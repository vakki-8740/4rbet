<?php
/**
 * 4R BET | Drive.php
 * ------------------------------------------------------------------
 * Google Drive integration - database JSON files ka BACKUP aur
 * (chaaho to) uploaded images ka MIRROR.
 *
 * Kyun zaroori hai: Wasmer ka volume persistent hai, par region-bound
 * hai aur single-writer. Drive par backup hone se data kabhi khoega nahi,
 * aur app kisi dusre region/account me bhi restore ho sakti hai.
 *
 * AUTH (zaroori baat):
 *   Wasmer ke PHP module me `openssl` extension NAHI hai, isliye
 *   service-account JWT (RS256) sign nahi ho sakta. Default tarika:
 *   OAuth2 REFRESH TOKEN - sirf curl chahiye, koi signing nahi.
 *   (Agar openssl mile to service account path bhi kaam karta hai.)
 *
 *   Env secrets (kabhi repo me mat likhna):
 *     GDRIVE_REFRESH_TOKEN
 *     GDRIVE_CLIENT_ID
 *     GDRIVE_CLIENT_SECRET
 *     GDRIVE_FOLDER_ID      (settings.json se bhi aa sakta hai)
 *   Optional service account (sirf agar openssl available ho):
 *     GDRIVE_SA_EMAIL, GDRIVE_SA_PRIVATE_KEY
 *
 * MODES (settings.json -> drive.mode):
 *   off     - kuch nahi
 *   backup  - JSON database ka snapshot Drive par
 *   mirror  - har upload Drive par bhi copy (volume fail ho to files safe)
 *   both    - dono
 */

declare(strict_types=1);

final class Drive
{
    const TOKEN_URL   = 'https://oauth2.googleapis.com/token';
    const SA_GRANT    = 'urn:ietf:params:oauth:grant-type:jwt-bearer';
    const API         = 'https://www.googleapis.com/drive/v3';
    const UPLOAD_API  = 'https://www.googleapis.com/upload/drive/v3';
    const FOLDER_MIME = 'application/vnd.google-apps.folder';

    const TIMEOUT     = 25;
    const KEEP        = 14;          /* kitne purane backup rakhein */
    const AUTO_HOURS  = 12;          /* auto backup ka gap */
    const MAX_SNAP_MB = 40;

    /** @var JsonStore */
    private $s;
    /** @var array */
    private $cfg;
    /** @var string */
    private $token = '';
    /** @var string */
    public $lastError = '';

    public function __construct(JsonStore $store)
    {
        $this->s = $store;

        $meta = $store->read('settings.json', array());
        $d = (is_array($meta) && isset($meta['drive']) && is_array($meta['drive'])) ? $meta['drive'] : array();

        /* mode: settings.json me set ho to wahi, warna GDRIVE_MODE env, warna off */
        $mode = isset($d['mode']) && is_string($d['mode']) && $d['mode'] !== ''
            ? $d['mode']
            : $this->envOr('GDRIVE_MODE', 'off');

        $this->cfg = array(
            'mode'      => (string) $mode,
            'folderId'  => $this->envOr('GDRIVE_FOLDER_ID', isset($d['folderId']) ? (string) $d['folderId'] : ''),
            'keep'      => isset($d['keep']) ? max(1, (int) $d['keep']) : self::KEEP,
            'autoHours' => isset($d['autoHours']) ? max(1, (int) $d['autoHours']) : self::AUTO_HOURS,
            'mirrorPublic' => !empty($d['mirrorPublic']),
        );
    }

    private function envOr($key, $fallback = '')
    {
        $v = getenv($key);
        return (is_string($v) && trim($v) !== '') ? trim($v) : $fallback;
    }

    /* ---------- config / status ---------- */

    public function mode()
    {
        $m = (string) $this->cfg['mode'];
        return in_array($m, array('off', 'backup', 'mirror', 'both'), true) ? $m : 'off';
    }

    private function hasRefreshCreds()
    {
        return $this->envOr('GDRIVE_REFRESH_TOKEN') !== ''
            && $this->envOr('GDRIVE_CLIENT_ID') !== ''
            && $this->envOr('GDRIVE_CLIENT_SECRET') !== '';
    }

    private function hasSaCreds()
    {
        return function_exists('openssl_sign')
            && $this->envOr('GDRIVE_SA_EMAIL') !== ''
            && $this->envOr('GDRIVE_SA_PRIVATE_KEY') !== '';
    }

    public function credsReady()
    {
        return $this->hasRefreshCreds() || $this->hasSaCreds();
    }

    public function wantsBackup()
    {
        $m = $this->mode();
        return ($m === 'backup' || $m === 'both');
    }

    public function wantsMirror()
    {
        $m = $this->mode();
        return ($m === 'mirror' || $m === 'both');
    }

    public function enabled()
    {
        return $this->mode() !== 'off' && $this->credsReady();
    }

    public function status()
    {
        $meta = $this->s->read('meta.json', array());
        $bk = (is_array($meta) && isset($meta['drive']) && is_array($meta['drive'])) ? $meta['drive'] : array();

        return array(
            'mode'         => $this->mode(),
            'enabled'      => $this->enabled(),
            'credsReady'   => $this->credsReady(),
            'auth'         => $this->hasRefreshCreds() ? 'refresh_token' : ($this->hasSaCreds() ? 'service_account' : 'none'),
            'openssl'      => function_exists('openssl_sign'),
            'curl'         => function_exists('curl_init'),
            'folderId'     => $this->cfg['folderId'] !== '' ? substr($this->cfg['folderId'], 0, 6) . '…' : '',
            'folderSet'    => $this->cfg['folderId'] !== '',
            'keep'         => (int) $this->cfg['keep'],
            'autoHours'    => (int) $this->cfg['autoHours'],
            'lastBackupAt' => isset($bk['lastBackupAt']) ? $bk['lastBackupAt'] : '',
            'lastBackupId' => isset($bk['lastBackupId']) ? $bk['lastBackupId'] : '',
            'lastBackupOk' => isset($bk['lastBackupOk']) ? (bool) $bk['lastBackupOk'] : false,
            'lastError'    => isset($bk['lastError']) ? $bk['lastError'] : ($this->lastError ?: ''),
            'mirrored'     => isset($bk['mirrored']) ? (int) $bk['mirrored'] : 0,
            'note'         => 'credentials sirf env (Wasmer secrets) me hain - JSON/repo me kabhi nahi',
        );
    }

    /* ---------- OAuth ---------- */

    private function accessToken()
    {
        if ($this->token !== '') {
            return $this->token;
        }

        if (!function_exists('curl_init')) {
            $this->lastError = 'curl extension nahi hai';
            return '';
        }

        /* 1) refresh token (default - openssl ki zaroorat nahi) */
        if ($this->hasRefreshCreds()) {
            $post = array(
                'client_id'     => $this->envOr('GDRIVE_CLIENT_ID'),
                'client_secret' => $this->envOr('GDRIVE_CLIENT_SECRET'),
                'refresh_token' => $this->envOr('GDRIVE_REFRESH_TOKEN'),
                'grant_type'    => 'refresh_token',
            );
            $res = $this->curlPost(self::TOKEN_URL, $post, array(), true);

            if ($res['ok']) {
                $j = json_decode((string) $res['body'], true);
                if (is_array($j) && isset($j['access_token'])) {
                    $this->token = (string) $j['access_token'];
                    return $this->token;
                }
                $this->lastError = 'token response me access_token nahi: ' . substr((string) $res['body'], 0, 200);
                return '';
            }

            $this->lastError = 'token request fail (http ' . $res['status'] . '): ' . $this->shortErr($res);
            return '';
        }

        /* 2) service account JWT (sirf agar openssl ho) */
        if ($this->hasSaCreds()) {
            $jwt = $this->saJwt();
            if ($jwt === '') {
                return '';
            }
            $res = $this->curlPost(self::TOKEN_URL, array(
                'grant_type' => self::SA_GRANT,
                'assertion'  => $jwt,
            ), array(), true);

            if ($res['ok']) {
                $j = json_decode((string) $res['body'], true);
                if (is_array($j) && isset($j['access_token'])) {
                    $this->token = (string) $j['access_token'];
                    return $this->token;
                }
            }
            $this->lastError = 'service account token fail: ' . $this->shortErr($res);
            return '';
        }

        $this->lastError = 'Drive credentials set nahi hain (GDRIVE_REFRESH_TOKEN / CLIENT_ID / CLIENT_SECRET)';
        return '';
    }

    private function saJwt()
    {
        $email = $this->envOr('GDRIVE_SA_EMAIL');
        $key   = $this->envOr('GDRIVE_SA_PRIVATE_KEY');
        $now   = time();

        $b64 = function ($data) {
            return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
        };

        $header  = $b64(json_encode(array('alg' => 'RS256', 'typ' => 'JWT')));
        $claims  = $b64(json_encode(array(
            'iss'   => $email,
            'scope' => 'https://www.googleapis.com/auth/drive.file',
            'aud'   => self::TOKEN_URL,
            'iat'   => $now,
            'exp'   => $now + 3600,
        )));

        $signingInput = $header . '.' . $claims;
        $sig = '';
        $ok = openssl_sign($signingInput, $sig, $key, 'sha256WithRSAEncryption');
        if (!$ok) {
            $this->lastError = 'JWT sign nahi hua (private key format check karein)';
            return '';
        }

        return $signingInput . '.' . $b64($sig);
    }

    /* ---------- curl helpers ---------- */

    private function shortErr($res)
    {
        if (!empty($res['curlError'])) {
            return (string) $res['curlError'];
        }
        $b = (string) (isset($res['body']) ? $res['body'] : '');
        $j = json_decode($b, true);
        if (is_array($j) && isset($j['error']['message'])) {
            return (string) $j['error']['message'];
        }
        if (is_array($j) && isset($j['error_description'])) {
            return (string) $j['error_description'];
        }
        return substr($b, 0, 200);
    }

    /**
     * @param array $post    form fields (ya null)
     * @param array $headers extra headers
     * @param bool  $asForm  true = application/x-www-form-urlencoded
     */
    private function curlPost($url, $post, array $headers = array(), $asForm = false)
    {
        $ch = curl_init($url);
        $h = $headers;
        if ($asForm) {
            $h[] = 'Content-Type: application/x-www-form-urlencoded';
        }
        curl_setopt_array($ch, array(
            CURLOPT_POST           => true,
            CURLOPT_POSTFIELDS     => $asForm ? http_build_query((array) $post) : $post,
            CURLOPT_HTTPHEADER     => $h,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT        => self::TIMEOUT,
            CURLOPT_CONNECTTIMEOUT => 8,
        ));
        $body   = curl_exec($ch);
        $status = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $err    = curl_error($ch);
        curl_close($ch);

        return array('ok' => $status >= 200 && $status < 300, 'status' => $status,
                     'body' => is_string($body) ? $body : '', 'curlError' => $err);
    }

    private function curlGet($url, array $headers = array())
    {
        $ch = curl_init($url);
        curl_setopt_array($ch, array(
            CURLOPT_HTTPHEADER     => $headers,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT        => self::TIMEOUT,
            CURLOPT_CONNECTTIMEOUT => 8,
            CURLOPT_FOLLOWLOCATION => true,
        ));
        $body   = curl_exec($ch);
        $status = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $err    = curl_error($ch);
        curl_close($ch);

        return array('ok' => $status >= 200 && $status < 300, 'status' => $status,
                     'body' => is_string($body) ? $body : '', 'curlError' => $err);
    }

    private function curlDelete($url, array $headers = array())
    {
        $ch = curl_init($url);
        curl_setopt_array($ch, array(
            CURLOPT_CUSTOMREQUEST  => 'DELETE',
            CURLOPT_HTTPHEADER     => $headers,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT        => self::TIMEOUT,
        ));
        $body   = curl_exec($ch);
        $status = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $err    = curl_error($ch);
        curl_close($ch);

        return array('ok' => $status >= 200 && $status < 300, 'status' => $status,
                     'body' => is_string($body) ? $body : '', 'curlError' => $err);
    }

    private function authHeaders($extra = array())
    {
        $t = $this->accessToken();
        if ($t === '') {
            return array();
        }
        return array_merge(array('Authorization: Bearer ' . $t), $extra);
    }

    /* ---------- folder ---------- */

    /** Folder id lo; na diya ho to "4R-BET Backups" bana do. */
    public function ensureFolder($name = '4R-BET Backups')
    {
        if ($this->cfg['folderId'] !== '') {
            return $this->cfg['folderId'];
        }
        if (!$this->accessToken()) {
            return '';
        }

        /* pehle dhoondho (duplicate mat banao) */
        $q = rawurlencode("mimeType='" . self::FOLDER_MIME . "' and name='" . $name . "' and trashed=false");
        $res = $this->curlGet(self::API . '/files?q=' . $q . '&fields=files(id,name)&pageSize=5', $this->authHeaders());
        if ($res['ok']) {
            $j = json_decode($res['body'], true);
            if (is_array($j) && isset($j['files'][0]['id'])) {
                $id = (string) $j['files'][0]['id'];
                $this->saveFolderId($id);
                return $id;
            }
        }

        $id = $this->createFolder($name);
        if ($id !== '') {
            $this->saveFolderId($id);
        }
        return $id;
    }

    public function createFolder($name, $parent = '')
    {
        if (!$this->accessToken()) {
            return '';
        }

        $meta = array('name' => (string) $name, 'mimeType' => self::FOLDER_MIME);
        if ($parent !== '') {
            $meta['parents'] = array($parent);
        }

        $boundary = 'b' . bin2hex(random_bytes(8));
        $body = $this->multipart($boundary, json_encode($meta, JSON_UNESCAPED_SLASHES), 'application/json', '', '');

        $res = $this->curlPost(self::API . '/files', $body, $this->authHeaders(array(
            'Content-Type: multipart/related; boundary=' . $boundary,
        )));

        if (!$res['ok']) {
            $this->lastError = 'folder create fail: ' . $this->shortErr($res);
            return '';
        }

        $j = json_decode($res['body'], true);
        return is_array($j) && isset($j['id']) ? (string) $j['id'] : '';
    }

    private function saveFolderId($id)
    {
        $this->cfg['folderId'] = (string) $id;
        $this->s->transaction('settings.json', function ($s) use ($id) {
            if (!is_array($s)) {
                $s = array();
            }
            if (!isset($s['drive']) || !is_array($s['drive'])) {
                $s['drive'] = array();
            }
            $s['drive']['folderId'] = (string) $id;
            return $s;
        }, array());
    }

    /* ---------- upload ---------- */

    private function multipart($boundary, $metaJson, $metaMime, $content, $contentMime)
    {
        $out  = "--" . $boundary . "\r\n";
        $out .= 'Content-Type: ' . $metaMime . "\r\n\r\n";
        $out .= $metaJson . "\r\n";

        if ($content !== '' || $contentMime !== '') {
            $out .= "--" . $boundary . "\r\n";
            $out .= 'Content-Type: ' . ($contentMime ?: 'application/octet-stream') . "\r\n\r\n";
            $out .= $content . "\r\n";
        }

        $out .= '--' . $boundary . '--';
        return $out;
    }

    /**
     * String content upload karo (backup JSON ke liye).
     * @return array{ok:bool,id?:string,name?:string,size?:int,error?:string}
     */
    public function uploadString($name, $content, $mime = 'application/json', $folderId = '')
    {
        if (!$this->accessToken()) {
            return array('ok' => false, 'error' => $this->lastError ?: 'Drive auth fail');
        }

        $folder = $folderId !== '' ? $folderId : $this->ensureFolder();
        $meta = array('name' => (string) $name, 'mimeType' => $mime);
        if ($folder !== '') {
            $meta['parents'] = array($folder);
        }

        $boundary = 'b' . bin2hex(random_bytes(8));
        $body = $this->multipart($boundary, json_encode($meta, JSON_UNESCAPED_SLASHES), 'application/json', $content, $mime);

        $res = $this->curlPost(self::UPLOAD_API . '/files?uploadType=multipart&fields=id,name,size,mimeType,webViewLink',
            $body, $this->authHeaders(array('Content-Type: multipart/related; boundary=' . $boundary)));

        if (!$res['ok']) {
            $this->lastError = 'upload fail: ' . $this->shortErr($res);
            return array('ok' => false, 'error' => $this->lastError, 'status' => $res['status']);
        }

        $j = json_decode($res['body'], true);
        if (!is_array($j) || !isset($j['id'])) {
            return array('ok' => false, 'error' => 'upload response me id nahi');
        }

        return array(
            'ok'   => true,
            'id'   => (string) $j['id'],
            'name' => isset($j['name']) ? (string) $j['name'] : $name,
            'size' => isset($j['size']) ? (int) $j['size'] : strlen($content),
            'url'  => isset($j['webViewLink']) ? (string) $j['webViewLink'] : '',
        );
    }

    /**
     * Volume ki file upload karo (image mirror ke liye).
     * @param string $relPath JsonStore-relative path (uploads/…)
     */
    public function uploadFile($relPath, $name = '', $mime = '')
    {
        $full = $this->s->path(V::relPath($relPath));
        if (!is_file($full)) {
            return array('ok' => false, 'error' => 'file nahi mili: ' . $relPath);
        }

        $content = (string) file_get_contents($full);
        if ($content === '') {
            return array('ok' => false, 'error' => 'file khaali hai');
        }

        if ($name === '') {
            $name = basename($full);
        }
        if ($mime === '') {
            $mime = Uploads::mimeFor(pathinfo($full, PATHINFO_EXTENSION));
        }

        return $this->uploadString($name, $content, $mime);
    }

    /* ---------- list / download / delete ---------- */

    public function listBackups($limit = 50)
    {
        if (!$this->accessToken()) {
            return array('ok' => false, 'error' => $this->lastError ?: 'Drive auth fail', 'items' => array());
        }

        $folder = $this->cfg['folderId'];
        $q = "name contains '4rbet-backup-' and trashed=false";
        if ($folder !== '') {
            $q = "'" . $folder . "' in parents and " . $q;
        }

        $res = $this->curlGet(
            self::API . '/files?q=' . rawurlencode($q)
            . '&fields=files(id,name,size,createdTime,modifiedTime)&orderBy=createdTime desc&pageSize=' . (int) $limit,
            $this->authHeaders()
        );

        if (!$res['ok']) {
            return array('ok' => false, 'error' => $this->shortErr($res), 'items' => array());
        }

        $j = json_decode($res['body'], true);
        $items = (is_array($j) && isset($j['files']) && is_array($j['files'])) ? $j['files'] : array();

        return array('ok' => true, 'items' => $items, 'count' => count($items));
    }

    public function download($fileId)
    {
        if (!$this->accessToken()) {
            return array('ok' => false, 'error' => $this->lastError ?: 'Drive auth fail', 'body' => '');
        }

        $res = $this->curlGet(self::API . '/files/' . rawurlencode((string) $fileId) . '?alt=media', $this->authHeaders());
        if (!$res['ok']) {
            return array('ok' => false, 'error' => $this->shortErr($res), 'body' => '', 'status' => $res['status']);
        }

        return array('ok' => true, 'body' => $res['body']);
    }

    public function delete($fileId)
    {
        if (!$this->accessToken()) {
            return array('ok' => false, 'error' => $this->lastError ?: 'Drive auth fail');
        }
        $res = $this->curlDelete(self::API . '/files/' . rawurlencode((string) $fileId), $this->authHeaders());
        return $res['ok'] ? array('ok' => true) : array('ok' => false, 'error' => $this->shortErr($res));
    }

    /* ==========================================================
       BACKUP
       ========================================================== */

    /**
     * Poore JSON database ka ek snapshot:
     *   { version, at, files: { "complaints/index.json": {...}, … } }
     * Uploads (images) isme nahi - wo `mirror` mode me alag jaate hain.
     */
    public function buildSnapshot()
    {
        $root = $this->s->root();
        $files = array();
        $total = 0;

        $rii = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($root, FilesystemIterator::SKIP_DOTS));
        foreach ($rii as $f) {
            if (!$f->isFile()) {
                continue;
            }
            $full = $f->getPathname();
            $rel  = str_replace('\\', '/', substr($full, strlen($root) + 1));

            /* backups/locks/uploads skip */
            if (substr($rel, -4) === '.bak' || substr($rel, -5) === '.lock') {
                continue;
            }
            if (strpos($rel, 'uploads/') === 0 || strpos($rel, 'tmp/') === 0) {
                continue;
            }
            if (substr($rel, -5) !== '.json') {
                continue;
            }

            $raw = (string) file_get_contents($full);
            $dec = json_decode($raw, true);
            if (!is_array($dec)) {
                continue;    /* corrupt/empty - backup me mat daalo */
            }

            $files[$rel] = $dec;
            $total += strlen($raw);

            if (count($files) > 20000 || $total > self::MAX_SNAP_MB * 1048576) {
                break;
            }
        }

        ksort($files);

        return array(
            'version'   => 1,
            'app'       => '4rbet-api',
            'at'        => $this->s->now(),
            'fileCount' => count($files),
            'bytes'     => $total,
            'files'     => $files,
        );
    }

    /**
     * @return array{ok:bool,id?:string,name?:string,bytes?:int,error?:string}
     */
    public function backup($label = '')
    {
        if (!$this->enabled() && !$this->credsReady()) {
            return array('ok' => false, 'error' => $this->lastError ?: 'Drive credentials set nahi hain');
        }

        $snap = $this->buildSnapshot();
        $json = json_encode($snap, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        if (!is_string($json) || $json === '') {
            return array('ok' => false, 'error' => 'snapshot encode nahi hua');
        }

        $name = '4rbet-backup-' . gmdate('Ymd-His') . ($label !== '' ? '-' . V::id($label, 20) : '') . '.json';
        $res = $this->uploadString($name, $json, 'application/json');

        $this->noteBackup($res, strlen($json));

        if (empty($res['ok'])) {
            return $res;
        }

        $this->prune();

        return array(
            'ok'     => true,
            'id'     => $res['id'],
            'name'   => $res['name'],
            'bytes'  => strlen($json),
            'files'  => $snap['fileCount'],
            'url'    => isset($res['url']) ? $res['url'] : '',
        );
    }

    private function noteBackup($res, $bytes)
    {
        $now = $this->s->now();
        $ok  = !empty($res['ok']);

        $this->s->transaction('meta.json', function ($m) use ($res, $now, $ok, $bytes) {
            if (!is_array($m)) {
                $m = array('schema' => 1, 'counters' => array());
            }
            if (!isset($m['drive']) || !is_array($m['drive'])) {
                $m['drive'] = array();
            }
            $m['drive']['lastBackupAt'] = $now;
            $m['drive']['lastBackupOk'] = $ok;
            $m['drive']['lastBackupId'] = $ok && isset($res['id']) ? (string) $res['id'] : '';
            $m['drive']['lastBytes']    = (int) $bytes;
            if (!$ok) {
                $m['drive']['lastError'] = isset($res['error']) ? V::str($res['error'], 300) : 'unknown';
            } else {
                unset($m['drive']['lastError']);
            }
            return $m;
        }, array());
    }

    /** Purane backups hata do (keep se zyada). */
    public function prune()
    {
        $list = $this->listBackups(100);
        if (empty($list['ok'])) {
            return array('ok' => false, 'deleted' => 0);
        }

        $items = $list['items'];
        $keep  = (int) $this->cfg['keep'];
        $deleted = 0;

        if (count($items) > $keep) {
            foreach (array_slice($items, $keep) as $it) {
                if (isset($it['id']) && $this->delete($it['id'])['ok']) {
                    $deleted++;
                }
            }
        }

        return array('ok' => true, 'deleted' => $deleted, 'kept' => min(count($items), $keep));
    }

    /** Last backup kitna purana hai + ab backup banna chahiye ya nahi. */
    public function backupDue()
    {
        $meta = $this->s->read('meta.json', array());
        $last = (is_array($meta) && isset($meta['drive']['lastBackupAt'])) ? (string) $meta['drive']['lastBackupAt'] : '';

        if (!$this->wantsBackup() || !$this->credsReady()) {
            return array('due' => false, 'lastAt' => $last, 'ageHours' => null, 'reason' => 'backup mode off / creds missing');
        }

        if ($last === '') {
            return array('due' => true, 'lastAt' => '', 'ageHours' => null, 'reason' => 'ab tak koi backup nahi hua');
        }

        $lt = strtotime($last);
        $age = is_int($lt) ? (time() - $lt) / 3600 : null;

        return array(
            'due'      => $age === null ? true : ($age >= (int) $this->cfg['autoHours']),
            'lastAt'   => $last,
            'ageHours' => $age === null ? null : round($age, 1),
            'everyHours' => (int) $this->cfg['autoHours'],
        );
    }

    /** Auto backup - sirf tab jab last backup autoHours se purana ho. */
    public function maybeAutoBackup()
    {
        if (!$this->wantsBackup() || !$this->credsReady()) {
            return array('ok' => false, 'skipped' => true, 'reason' => 'backup mode off / creds missing');
        }

        $meta = $this->s->read('meta.json', array());
        $last = (is_array($meta) && isset($meta['drive']['lastBackupAt'])) ? (string) $meta['drive']['lastBackupAt'] : '';

        if ($last !== '') {
            $lt = strtotime($last);
            if (is_int($lt) && (time() - $lt) < $this->cfg['autoHours'] * 3600) {
                return array('ok' => false, 'skipped' => true, 'reason' => 'pichhla backup ' . $last . ' par hua tha');
            }
        }

        $r = $this->backup('auto');
        $r['auto'] = true;
        return $r;
    }

    /* ==========================================================
       RESTORE
       ========================================================== */

    /**
     * Drive ke backup se JSON files wapas volume par likho.
     * Sirf .json files - uploads (images) restore nahi hote.
     */
    public function restore($fileId, $confirm = false)
    {
        if ($confirm !== true) {
            return array('ok' => false, 'error' => 'confirm=true bhejna zaroori hai (restore sab kuch overwrite kar deta hai)');
        }

        $dl = $this->download($fileId);
        if (empty($dl['ok'])) {
            return array('ok' => false, 'error' => isset($dl['error']) ? $dl['error'] : 'download fail');
        }

        $snap = json_decode((string) $dl['body'], true);
        if (!is_array($snap) || !isset($snap['files']) || !is_array($snap['files'])) {
            return array('ok' => false, 'error' => 'backup file valid nahi lag rahi (files{} nahi mila)');
        }

        $written = 0;
        $skipped = 0;

        foreach ($snap['files'] as $rel => $content) {
            $rel = V::relPath((string) $rel);
            if ($rel === '' || substr($rel, -5) !== '.json' || strpos($rel, 'uploads/') === 0) {
                $skipped++;
                continue;
            }
            if (!is_array($content)) {
                $skipped++;
                continue;
            }
            if ($this->s->write($rel, $content)) {
                $written++;
            } else {
                $skipped++;
            }
        }

        return array(
            'ok'      => true,
            'from'    => (string) $fileId,
            'backupAt'=> isset($snap['at']) ? $snap['at'] : '',
            'written' => $written,
            'skipped' => $skipped,
            'note'    => 'uploads (images) restore nahi hue - wo mirror mode me Drive par alag maujood hain',
        );
    }

    /* ==========================================================
       MIRROR (uploads)
       ========================================================== */

    /**
     * Ek uploaded file ko Drive par bhi copy karo.
     * @return array{ok:bool,driveId?:string,url?:string,error?:string}
     */
    public function mirror($relPath, $name = '', $mime = '')
    {
        if (!$this->wantsMirror()) {
            return array('ok' => false, 'skipped' => true, 'reason' => 'mirror mode off');
        }

        $res = $this->uploadFile($relPath, $name, $mime);
        if (!empty($res['ok'])) {
            $this->s->transaction('meta.json', function ($m) {
                if (!is_array($m)) {
                    $m = array('schema' => 1, 'counters' => array());
                }
                if (!isset($m['drive']) || !is_array($m['drive'])) {
                    $m['drive'] = array();
                }
                $m['drive']['mirrored'] = (isset($m['drive']['mirrored']) ? (int) $m['drive']['mirrored'] : 0) + 1;
                return $m;
            }, array());
        }

        return $res;
    }

    /** Complaint ki saari images mirror karo (best effort). */
    public function mirrorComplaint(array &$record)
    {
        if (!$this->wantsMirror() || !isset($record['images']) || !is_array($record['images'])) {
            return array('mirrored' => 0);
        }

        $n = 0;
        foreach ($record['images'] as $i => $im) {
            if (!is_array($im) || empty($im['path'])) {
                continue;
            }
            $r = $this->mirror($im['path'], isset($im['name']) ? $im['name'] : '', isset($im['mime']) ? $im['mime'] : '');
            if (!empty($r['ok'])) {
                $record['images'][$i]['driveId'] = $r['id'];
                $record['images'][$i]['driveUrl'] = isset($r['url']) ? $r['url'] : '';
                $n++;
            } else {
                $record['images'][$i]['driveError'] = isset($r['error']) ? V::str($r['error'], 160) : 'mirror fail';
            }
        }

        return array('mirrored' => $n);
    }

    /* ==========================================================
       TEST
       ========================================================== */

    /** Chhoti si probe file: upload -> list -> download -> delete. */
    public function test()
    {
        $out = array('steps' => array());

        $name = '4rbet-drive-test-' . gmdate('Ymd-His') . '.json';
        $body = json_encode(array('ok' => true, 'at' => $this->s->now(), 'probe' => bin2hex(random_bytes(4))));

        $up = $this->uploadString($name, $body, 'application/json');
        $out['steps'][] = array('name' => 'upload probe', 'ok' => !empty($up['ok']),
                                'detail' => !empty($up['ok']) ? $up['id'] : (isset($up['error']) ? $up['error'] : ''));
        if (empty($up['ok'])) {
            $out['ok'] = false;
            return $out;
        }

        $dl = $this->download($up['id']);
        $same = !empty($dl['ok']) && (string) $dl['body'] === $body;
        $out['steps'][] = array('name' => 'download probe', 'ok' => $same,
                                'detail' => $same ? 'content match' : (isset($dl['error']) ? $dl['error'] : 'content mismatch'));

        $del = $this->delete($up['id']);
        $out['steps'][] = array('name' => 'delete probe', 'ok' => !empty($del['ok']),
                                'detail' => !empty($del['ok']) ? 'cleaned' : (isset($del['error']) ? $del['error'] : ''));

        $folder = $this->ensureFolder();
        $out['steps'][] = array('name' => 'folder', 'ok' => $folder !== '', 'detail' => $folder !== '' ? $folder : 'folder nahi mila/bana');

        $out['ok'] = $same && !empty($del['ok']) && $folder !== '';
        return $out;
    }
}
