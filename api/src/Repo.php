<?php
/**
 * 4R BET | Repo.php
 * ------------------------------------------------------------------
 * Domain layer - JsonStore ke upar business logic.
 *
 * Data model (sab JSON files me, volume par):
 *
 *   meta.json                     schema, counters, appKey
 *   admins.json                   admin users (bcrypt hash)
 *   settings.json                 telegram + ui preferences
 *   complaints/index.json         [ summary ]  (newest first, images ke bina)
 *   complaints/<id>.json          full record (data + image refs + audit)
 *   chats/index.json              [ chat summary ]  (updatedAt desc)
 *   chats/<chatId>/chat.json      chat doc (userName, counters, last message)
 *   chats/<chatId>/messages.json  { seq, items: [ message ] }
 *   chats/<chatId>/archive-N.json purane messages (cap cross hone par)
 *   uploads/YYYY/MM/<uuid>.<ext>  image/file bytes
 *
 * RELATIONS
 *   complaint.deviceId  -> device (user apni complaints kisi bhi device se dekhe)
 *   complaint.images[].path -> uploads/...
 *   complaint.chatId    -> chats/<chatId>  (admin complaint se seedha chat khol sake)
 *   chat.messages[].attachment.path -> uploads/...
 *   sab records me createdBy/updatedBy + timestamps (audit trail)
 */

declare(strict_types=1);

final class Repo
{
    const MSG_CAP     = 1000;   /* messages.json me max items */
    const LIST_CAP    = 2000;   /* index.json me max summaries */
    const TEXT_MAX    = 4000;

    const STATUSES = array('pending', 'previewing', 'successful');

    /** complaint form fields - order wahi jo UI/Telegram me dikhta hai */
    public static $FIELD_ORDER = array(
        'userName'    => 'User Name',
        'mobile'      => 'Mobile Number',
        'email'       => 'Email ID',
        'password'    => 'Game Account Password',
        'problem'     => 'Select Your Problem',
        'amount'      => 'Amount',
        'verifyEmail' => 'Email To Verify',
        'docType'     => 'Document Type',
        'docNo'       => 'Document No.',
        'accountNo'   => 'Account Number',
        'utr'         => 'Transaction / UTR',
        'detail'      => 'Detail',
    );

    public static $SECRET_FIELDS = array('password');

    /** @var JsonStore */
    private $s;

    public function __construct(JsonStore $store)
    {
        $this->s = $store;
    }

    public function store()
    {
        return $this->s;
    }

    /* ==========================================================
       COMPLAINTS
       ========================================================== */

    /**
     * @param array $data     form fields
     * @param array $images   Uploads::save() ke results
     * @param string $category
     * @param string $deviceId
     */
    public function createComplaint($category, array $data, array $images = array(), $deviceId = '', $chatId = '')
    {
        $category = V::str($category, 60);
        if ($category === '') {
            $category = 'Complaint';
        }

        /* fields sanitize - sirf known keys, secret fields bhi store hote hain
           (admin ko dikhna zaroori hai) par API response me mask hote hain */
        $clean = array();
        foreach (self::$FIELD_ORDER as $key => $label) {
            if (!array_key_exists($key, $data)) {
                continue;
            }
            $raw = $data[$key];
            if ($key === 'email' || $key === 'verifyEmail') {
                $v = V::email($raw);
            } elseif ($key === 'mobile') {
                $v = V::mobile($raw);
            } elseif ($key === 'amount') {
                $v = V::str($raw, 20);
            } else {
                $v = V::str($raw, $key === 'detail' ? 2000 : 190);
            }
            if ($v !== '') {
                $clean[$key] = $v;
            }
        }

        if (!isset($clean['userName']) || $clean['userName'] === '') {
            throw new ApiError('User Name zaroori hai');
        }

        $n = $this->s->nextCounter('complaints');
        $id = 'CM-' . gmdate('ymd') . '-' . str_pad((string) $n, 4, '0', STR_PAD_LEFT);

        $now = $this->s->now();

        $record = array(
            'id'         => $id,
            'category'   => $category,
            'formId'     => V::id(isset($data['__formId']) ? $data['__formId'] : '', 40),
            'data'       => $clean,
            'images'     => array(),
            'status'     => 'pending',
            'deviceId'   => V::id($deviceId, 64),
            'chatId'     => V::id($chatId, 64),
            'ip'         => '',
            'createdAt'  => $now,
            'updatedAt'  => $now,
            'statusAt'   => $now,
            'history'    => array(array('status' => 'pending', 'at' => $now, 'by' => 'user')),
        );

        foreach ($images as $im) {
            if (!is_array($im) || empty($im['ok'])) {
                continue;
            }
            $record['images'][] = array(
                'id'    => 'img_' . substr(bin2hex(random_bytes(5)), 0, 10),
                'field' => V::id(isset($im['field']) ? $im['field'] : '', 40),
                'name'  => isset($im['name']) ? V::str($im['name'], 120) : '',
                'path'  => isset($im['path']) ? V::relPath($im['path']) : '',
                'url'   => isset($im['url']) ? V::str($im['url'], 200) : '',
                'bytes' => isset($im['bytes']) ? (int) $im['bytes'] : 0,
                'mime'  => isset($im['mime']) ? V::str($im['mime'], 60) : '',
            );
        }

        if (!$this->s->write('complaints/' . $id . '.json', $record)) {
            throw new ApiError('complaint save nahi hui (volume writable hai?)', 500);
        }

        /* index me summary (bina images/data ke - list fast rahe) */
        $this->s->upsertInList('complaints/index.json', $this->complaintSummary($record), 'id', self::LIST_CAP);

        return $record;
    }

    public function complaintSummary(array $r)
    {
        $d = isset($r['data']) && is_array($r['data']) ? $r['data'] : array();

        return array(
            'id'         => isset($r['id']) ? $r['id'] : '',
            'category'   => isset($r['category']) ? $r['category'] : 'Complaint',
            'userName'   => isset($d['userName']) ? $d['userName'] : '',
            'mobile'     => isset($d['mobile']) ? $d['mobile'] : '',
            'status'     => isset($r['status']) ? $r['status'] : 'pending',
            'imageCount' => isset($r['images']) && is_array($r['images']) ? count($r['images']) : 0,
            'deviceId'   => isset($r['deviceId']) ? $r['deviceId'] : '',
            'chatId'     => isset($r['chatId']) ? $r['chatId'] : '',
            'createdAt'  => isset($r['createdAt']) ? $r['createdAt'] : '',
            'updatedAt'  => isset($r['updatedAt']) ? $r['updatedAt'] : '',
        );
    }

    public function getComplaint($id)
    {
        $id = V::id($id, 40);
        if ($id === '') {
            return null;
        }
        $r = $this->s->read('complaints/' . $id . '.json', null);
        return is_array($r) && isset($r['id']) ? $r : null;
    }

    /**
     * @param array $filters status|deviceId|q|category|from|to
     * @param bool  $maskSecrets  true = password jaise fields chhupao
     */
    public function listComplaints(array $filters = array(), $maskSecrets = true, $limit = 200, $offset = 0)
    {
        $idx = $this->s->read('complaints/index.json', array());
        if (!is_array($idx)) {
            $idx = array();
        }

        $status   = isset($filters['status']) ? V::oneOf($filters['status'], self::STATUSES) : '';
        $deviceId = isset($filters['deviceId']) ? V::id($filters['deviceId'], 64) : '';
        $category = isset($filters['category']) ? V::str($filters['category'], 60) : '';
        $qRaw     = isset($filters['q']) ? V::str($filters['q'], 80) : '';
        $q        = $qRaw === '' ? '' : (function_exists('mb_strtolower') ? mb_strtolower($qRaw) : strtolower($qRaw));

        $out = array();
        foreach ($idx as $row) {
            if (!is_array($row)) {
                continue;
            }
            if ($status !== '' && (isset($row['status']) ? $row['status'] : '') !== $status) {
                continue;
            }
            if ($deviceId !== '' && (isset($row['deviceId']) ? $row['deviceId'] : '') !== $deviceId) {
                continue;
            }
            if ($category !== '' && (isset($row['category']) ? $row['category'] : '') !== $category) {
                continue;
            }
            if ($q !== '') {
                $joined = implode(' ', array(
                    isset($row['userName']) ? $row['userName'] : '',
                    isset($row['mobile']) ? $row['mobile'] : '',
                    isset($row['id']) ? $row['id'] : '',
                ));
                $hay = function_exists('mb_strtolower') ? mb_strtolower($joined) : strtolower($joined);
                if (strpos($hay, $q) === false) {
                    continue;
                }
            }

            /* device-scoped list me secret fields kabhi nahi */
            if ($deviceId !== '') {
                $maskSecrets = true;
            }

            if ($deviceId !== '' && !$this->shouldExposeForDevice($row, $deviceId)) {
                continue;
            }

            $out[] = $this->decorateSummary($row, $maskSecrets);
        }

        $total = count($out);
        $out = array_slice($out, max(0, (int) $offset), max(1, (int) $limit));

        return array('items' => $out, 'total' => $total);
    }

    private function shouldExposeForDevice($row, $deviceId)
    {
        return isset($row['deviceId']) && (string) $row['deviceId'] === (string) $deviceId;
    }

    /** Summary me full data jodo (list ke liye ek-ek file padhna padta hai). */
    private function decorateSummary(array $row, $maskSecrets)
    {
        $id = isset($row['id']) ? (string) $row['id'] : '';
        $full = $id !== '' ? $this->getComplaint($id) : null;

        $data = array();
        if (is_array($full) && isset($full['data']) && is_array($full['data'])) {
            foreach ($full['data'] as $k => $v) {
                if ($maskSecrets && in_array($k, self::$SECRET_FIELDS, true)) {
                    $data[$k] = self::mask((string) $v);
                    continue;
                }
                $data[$k] = $v;
            }
        }

        $images = array();
        if (is_array($full) && isset($full['images']) && is_array($full['images'])) {
            foreach ($full['images'] as $im) {
                if (is_array($im)) {
                    $images[] = array(
                        'id'   => isset($im['id']) ? $im['id'] : '',
                        'name' => isset($im['name']) ? $im['name'] : '',
                        'url'  => isset($im['url']) ? $im['url'] : '',
                        'path' => isset($im['path']) ? $im['path'] : '',
                    );
                }
            }
        }

        return array_merge($row, array(
            'data'   => $data,
            'images' => $images,
            'statusAt' => is_array($full) && isset($full['statusAt']) ? $full['statusAt'] : '',
        ));
    }

    public static function mask($pw)
    {
        $pw = (string) $pw;
        $len = strlen($pw);
        if ($len === 0) {
            return '';
        }
        $visible = max(1, (int) ceil($len * 0.2));
        return substr($pw, 0, $visible) . str_repeat('*', max(0, $len - $visible));
    }

    public function setComplaintStatus($id, $status, $byEmail = '')
    {
        $id = V::id($id, 40);
        $status = V::oneOf($status, self::STATUSES);
        if ($id === '' || $status === '') {
            throw new ApiError('id ya status sahi nahi hai');
        }

        $now = $this->s->now();

        $rec = $this->s->transaction('complaints/' . $id . '.json', function ($r) use ($status, $now, $byEmail) {
            if (!is_array($r) || !isset($r['id'])) {
                return null;
            }
            $r['status']    = $status;
            $r['statusAt']  = $now;
            $r['updatedAt'] = $now;
            if (!isset($r['history']) || !is_array($r['history'])) {
                $r['history'] = array();
            }
            $r['history'][] = array(
                'status' => $status,
                'at'     => $now,
                'by'     => $byEmail !== '' ? $byEmail : 'admin',
            );
            if (count($r['history']) > 50) {
                $r['history'] = array_slice($r['history'], -50);
            }
            return $r;
        }, null);

        if (!is_array($rec)) {
            throw new ApiError('complaint nahi mili', 404);
        }

        $this->s->upsertInList('complaints/index.json', $this->complaintSummary($rec), 'id', self::LIST_CAP);

        return $rec;
    }

    public function deleteComplaint($id)
    {
        $id = V::id($id, 40);
        if ($id === '') {
            throw new ApiError('id sahi nahi hai');
        }

        $rec = $this->getComplaint($id);
        if ($rec === null) {
            throw new ApiError('complaint nahi mili', 404);
        }

        /* uploaded files bhi hata do */
        if (isset($rec['images']) && is_array($rec['images'])) {
            foreach ($rec['images'] as $im) {
                if (is_array($im) && isset($im['path'])) {
                    $p = V::relPath($im['path']);
                    if ($p !== '') {
                        @unlink($this->s->path($p));
                    }
                }
            }
        }

        @unlink($this->s->path('complaints/' . $id . '.json'));
        @unlink($this->s->path('complaints/' . $id . '.json.bak'));
        $this->s->removeFromList('complaints/index.json', $id, 'id');

        return true;
    }

    public function complaintStats()
    {
        $idx = $this->s->read('complaints/index.json', array());
        if (!is_array($idx)) {
            $idx = array();
        }

        $stats = array('total' => count($idx), 'today' => 0, 'pending' => 0, 'previewing' => 0, 'successful' => 0);
        $today = gmdate('Y-m-d');

        foreach ($idx as $row) {
            if (!is_array($row)) {
                continue;
            }
            $st = isset($row['status']) ? (string) $row['status'] : 'pending';
            if (isset($stats[$st])) {
                $stats[$st]++;
            }
            $c = isset($row['createdAt']) ? (string) $row['createdAt'] : '';
            if ($c !== '' && substr($c, 0, 10) === $today) {
                $stats['today']++;
            }
        }

        return $stats;
    }

    /* ==========================================================
       CHATS
       ========================================================== */

    /**
     * Chat ensure karo. clientId diya to wahi use hota hai (purane
     * localStorage wale chatId compatible rehte hain), warna naya.
     */
    public function ensureChat($name, $clientId = '', $deviceId = '')
    {
        $id = V::id($clientId, 40);
        if ($id === '' || strlen($id) < 8) {
            $id = 'c' . substr(bin2hex(random_bytes(8)), 0, 15);
        }

        $name = V::str($name, 40);
        $now  = $this->s->now();
        $created = false;

        $chat = $this->s->transaction('chats/' . $id . '/chat.json', function ($c) use ($id, $name, $now, $deviceId, &$created) {
            if (!is_array($c) || !isset($c['id'])) {
                $created = true;
                return array(
                    'id'          => $id,
                    'userName'    => $name !== '' ? $name : ('Guest #' . strtoupper(substr($id, 0, 4))),
                    'deviceId'    => V::id($deviceId, 64),
                    'createdAt'   => $now,
                    'updatedAt'   => $now,
                    'lastText'    => '',
                    'lastWho'     => '',
                    'lastAt'      => '',
                    'seq'         => 0,
                    'unreadAdmin' => 0,
                    'unreadUser'  => 0,
                    'messageCount'=> 0,
                    'closed'      => false,
                );
            }

            if ($name !== '' && $name !== $c['userName']) {
                $c['userName'] = $name;
                $c['updatedAt'] = $now;
            }
            if (!isset($c['seq'])) {
                $c['seq'] = isset($c['messageCount']) ? (int) $c['messageCount'] : 0;
            }
            return $c;
        }, array());

        $this->s->upsertInList('chats/index.json', $this->chatSummary($chat), 'id', self::LIST_CAP);

        return array('chat' => $chat, 'created' => $created);
    }

    public function chatSummary(array $c)
    {
        return array(
            'id'          => isset($c['id']) ? $c['id'] : '',
            'userName'    => isset($c['userName']) ? $c['userName'] : '',
            'deviceId'    => isset($c['deviceId']) ? $c['deviceId'] : '',
            'createdAt'   => isset($c['createdAt']) ? $c['createdAt'] : '',
            'updatedAt'   => isset($c['updatedAt']) ? $c['updatedAt'] : '',
            'lastText'    => isset($c['lastText']) ? $c['lastText'] : '',
            'lastWho'     => isset($c['lastWho']) ? $c['lastWho'] : '',
            'lastAt'      => isset($c['lastAt']) ? $c['lastAt'] : '',
            'unreadAdmin' => isset($c['unreadAdmin']) ? (int) $c['unreadAdmin'] : 0,
            'unreadUser'  => isset($c['unreadUser']) ? (int) $c['unreadUser'] : 0,
            'messageCount'=> isset($c['messageCount']) ? (int) $c['messageCount'] : 0,
            'closed'      => !empty($c['closed']),
        );
    }

    public function getChat($id)
    {
        $id = V::id($id, 40);
        if ($id === '') {
            return null;
        }
        $c = $this->s->read('chats/' . $id . '/chat.json', null);
        return is_array($c) && isset($c['id']) ? $c : null;
    }

    public function listChats($onlyUnread = false, $limit = 200)
    {
        $idx = $this->s->read('chats/index.json', array());
        if (!is_array($idx)) {
            $idx = array();
        }

        /* updatedAt desc */
        usort($idx, function ($a, $b) {
            $x = is_array($a) && isset($a['updatedAt']) ? (string) $a['updatedAt'] : '';
            $y = is_array($b) && isset($b['updatedAt']) ? (string) $b['updatedAt'] : '';
            return strcmp($y, $x);
        });

        $out = array();
        $unread = 0;
        foreach ($idx as $row) {
            if (!is_array($row) || !isset($row['id'])) {
                continue;
            }
            $u = isset($row['unreadAdmin']) ? (int) $row['unreadAdmin'] : 0;
            $unread += max(0, $u);
            if ($onlyUnread && $u <= 0) {
                continue;
            }
            $out[] = $row;
            if (count($out) >= (int) $limit) {
                break;
            }
        }

        return array('items' => $out, 'total' => count($idx), 'unread' => $unread);
    }

    public function markRead($chatId, $side)
    {
        $chatId = V::id($chatId, 40);
        if ($chatId === '') {
            throw new ApiError('chat nahi mili', 404);
        }
        $field = $side === 'admin' ? 'unreadAdmin' : 'unreadUser';

        $c = $this->s->transaction('chats/' . $chatId . '/chat.json', function ($c) use ($field) {
            if (!is_array($c) || !isset($c['id'])) {
                return null;
            }
            $c[$field] = 0;
            return $c;
        }, null);

        if (!is_array($c)) {
            throw new ApiError('chat nahi mili', 404);
        }

        $this->s->upsertInList('chats/index.json', $this->chatSummary($c), 'id', self::LIST_CAP);
        return $c;
    }

    public function deleteChat($chatId)
    {
        $chatId = V::id($chatId, 40);
        if ($chatId === '') {
            throw new ApiError('chat id sahi nahi hai');
        }
        if ($this->getChat($chatId) === null) {
            throw new ApiError('chat nahi mili', 404);
        }

        /* attachments hata do */
        $msgs = $this->s->read('chats/' . $chatId . '/messages.json', array('seq' => 0, 'items' => array()));
        if (is_array($msgs) && isset($msgs['items']) && is_array($msgs['items'])) {
            foreach ($msgs['items'] as $m) {
                if (is_array($m) && isset($m['attachment']['path'])) {
                    $p = V::relPath($m['attachment']['path']);
                    if ($p !== '') {
                        @unlink($this->s->path($p));
                    }
                }
            }
        }

        $dir = $this->s->path('chats/' . $chatId);
        if (is_dir($dir)) {
            foreach (glob($dir . '/*') as $f) {
                if (is_file($f)) {
                    @unlink($f);
                }
            }
            @rmdir($dir);
        }
        @unlink($this->s->path('chats/' . $chatId . '.lock'));

        $this->s->removeFromList('chats/index.json', $chatId, 'id');
        return true;
    }

    /* ==========================================================
       MESSAGES
       ========================================================== */

    /**
     * @param string $who  user|admin
     * @param array  $msg  text | attachment (Uploads::save result)
     */
    public function appendMessage($chatId, $who, array $msg, $authorName = '')
    {
        $chatId = V::id($chatId, 40);
        $who = $who === 'admin' ? 'admin' : 'user';

        if ($chatId === '') {
            throw new ApiError('chat id sahi nahi hai');
        }
        if ($this->getChat($chatId) === null) {
            throw new ApiError('chat nahi mili', 404);
        }

        $text = V::str(isset($msg['text']) ? $msg['text'] : '', self::TEXT_MAX);
        $att = null;
        if (isset($msg['attachment']) && is_array($msg['attachment']) && !empty($msg['attachment']['ok'])) {
            $a = $msg['attachment'];
            $att = array(
                'kind'  => isset($a['kind']) ? $a['kind'] : 'file',
                'name'  => isset($a['name']) ? V::str($a['name'], 120) : 'file',
                'path'  => isset($a['path']) ? V::relPath($a['path']) : '',
                'url'   => isset($a['url']) ? V::str($a['url'], 200) : '',
                'bytes' => isset($a['bytes']) ? (int) $a['bytes'] : 0,
                'mime'  => isset($a['mime']) ? V::str($a['mime'], 60) : '',
            );
        }

        if ($text === '' && $att === null) {
            throw new ApiError('message khaali hai');
        }

        $now = $this->s->now();
        $mid = 'm' . substr(bin2hex(random_bytes(7)), 0, 14);
        $authorName = V::str($authorName, 40);

        $rel = 'chats/' . $chatId . '/messages.json';
        $newSeq = 0;

        $this->s->transaction($rel, function ($d) use ($mid, $who, $text, $att, $now, $authorName, &$newSeq) {
            if (!is_array($d)) {
                $d = array('seq' => 0, 'items' => array());
            }
            if (!isset($d['seq'])) {
                $d['seq'] = 0;
            }
            if (!isset($d['items']) || !is_array($d['items'])) {
                $d['items'] = array();
            }

            $d['seq'] = (int) $d['seq'] + 1;
            $newSeq = (int) $d['seq'];

            $item = array(
                'id'   => $mid,
                'seq'  => $newSeq,
                'who'  => $who,
                'text' => $text,
                'at'   => $now,
                'name' => $authorName,
            );
            if ($att !== null) {
                $item['attachment'] = $att;
            }

            $d['items'][] = $item;

            /* cap: purane items archive me */
            if (count($d['items']) > self::MSG_CAP) {
                $overflow = array_splice($d['items'], 0, count($d['items']) - self::MSG_CAP);
                $n = isset($d['archiveCount']) ? (int) $d['archiveCount'] : 0;
                $n++;
                $d['archiveCount'] = $n;
                /* archive write transaction ke baad karte hain (nested lock se bachne ke liye),
                   isliye yahan sirf stash karo */
                $d['__spill'] = $overflow;
            }

            return $d;
        }, array('seq' => 0, 'items' => array()));

        /* spill ko alag archive file me daalo (lock release ho chuka) */
        $cur = $this->s->read($rel, array('seq' => 0, 'items' => array()));
        if (is_array($cur) && isset($cur['__spill']) && is_array($cur['__spill']) && $cur['__spill']) {
            $n = isset($cur['archiveCount']) ? (int) $cur['archiveCount'] : 1;
            $spill = $cur['__spill'];
            unset($cur['__spill']);
            $this->s->write('chats/' . $chatId . '/archive-' . $n . '.json', array('items' => $spill));
            $this->s->write($rel, $cur);
        }

        /* chat doc update (counters + last message) - alag transaction */
        $preview = $text !== '' ? (function_exists('mb_substr') ? mb_substr($text, 0, 90) : substr($text, 0, 90)) : '';
        if ($preview === '' && $att !== null) {
            $preview = $att['kind'] === 'image' ? 'Photo' : ('File: ' . $att['name']);
        }

        $chat = $this->s->transaction('chats/' . $chatId . '/chat.json', function ($c) use ($who, $preview, $now, $newSeq) {
            if (!is_array($c) || !isset($c['id'])) {
                return null;
            }
            $c['updatedAt']    = $now;
            $c['lastText']     = $preview;
            $c['lastWho']      = $who;
            $c['lastAt']       = $now;
            $c['seq']          = $newSeq;
            $c['messageCount'] = $newSeq;
            if ($who === 'user') {
                $c['unreadAdmin'] = (isset($c['unreadAdmin']) ? (int) $c['unreadAdmin'] : 0) + 1;
            } else {
                $c['unreadUser'] = (isset($c['unreadUser']) ? (int) $c['unreadUser'] : 0) + 1;
            }
            return $c;
        }, null);

        if (is_array($chat)) {
            $this->s->upsertInList('chats/index.json', $this->chatSummary($chat), 'id', self::LIST_CAP);
        }

        return array('id' => $mid, 'seq' => $newSeq, 'who' => $who, 'text' => $text, 'at' => $now,
                     'name' => $authorName, 'attachment' => $att);
    }

    /**
     * Cursor-based read: $since seq se aage ke messages.
     * Polling isi se real-time banta hai (har 1-1.5s).
     */
    public function messagesSince($chatId, $since = 0, $limit = 200)
    {
        $chatId = V::id($chatId, 40);
        if ($chatId === '') {
            throw new ApiError('chat id sahi nahi hai');
        }

        $d = $this->s->read('chats/' . $chatId . '/messages.json', array('seq' => 0, 'items' => array()));
        if (!is_array($d) || !isset($d['items']) || !is_array($d['items'])) {
            $d = array('seq' => 0, 'items' => array());
        }

        $since = max(0, (int) $since);
        $out = array();
        foreach ($d['items'] as $m) {
            if (!is_array($m)) {
                continue;
            }
            if ((int) (isset($m['seq']) ? $m['seq'] : 0) > $since) {
                $out[] = $m;
            }
        }

        $truncated = false;
        if (count($out) > (int) $limit) {
            $out = array_slice($out, 0, (int) $limit);
            $truncated = true;
        }

        $chat = $this->getChat($chatId);

        return array(
            'items'     => $out,
            'seq'       => (int) (isset($d['seq']) ? $d['seq'] : 0),
            'truncated' => $truncated,
            'chat'      => $chat === null ? null : $this->chatSummary($chat),
            'serverTime'=> $this->s->now(),
        );
    }

    public function allMessages($chatId, $limit = 500)
    {
        return $this->messagesSince($chatId, 0, $limit);
    }

    public function editMessage($chatId, $msgId, $text, $who)
    {
        $chatId = V::id($chatId, 40);
        $msgId  = V::id($msgId, 40);
        $text   = V::str($text, self::TEXT_MAX);
        if ($text === '') {
            throw new ApiError('message khaali nahi ho sakta');
        }

        $done = false;
        $this->s->transaction('chats/' . $chatId . '/messages.json', function ($d) use ($msgId, $text, $who, &$done) {
            if (!is_array($d) || !isset($d['items']) || !is_array($d['items'])) {
                return null;
            }
            foreach ($d['items'] as $i => $m) {
                if (is_array($m) && isset($m['id']) && $m['id'] === $msgId) {
                    /* sirf apna text message edit ho */
                    if ((isset($m['who']) ? $m['who'] : '') !== $who) {
                        throw new ApiError('sirf apna message edit kar sakte ho', 403);
                    }
                    if (isset($m['attachment'])) {
                        throw new ApiError('attachment wala message edit nahi hota', 403);
                    }
                    $d['items'][$i]['text'] = $text;
                    $d['items'][$i]['editedAt'] = gmdate('Y-m-d\TH:i:s\Z');
                    $done = true;
                    return $d;
                }
            }
            return null;
        }, null);

        if (!$done) {
            throw new ApiError('message nahi mila', 404);
        }
        return true;
    }

    public function deleteMessage($chatId, $msgId, $who, $isAdmin = false)
    {
        $chatId = V::id($chatId, 40);
        $msgId  = V::id($msgId, 40);

        $deleted = null;
        $this->s->transaction('chats/' . $chatId . '/messages.json', function ($d) use ($msgId, $who, $isAdmin, &$deleted) {
            if (!is_array($d) || !isset($d['items']) || !is_array($d['items'])) {
                return null;
            }
            $keep = array();
            foreach ($d['items'] as $m) {
                if (is_array($m) && isset($m['id']) && $m['id'] === $msgId) {
                    if (!$isAdmin && (isset($m['who']) ? $m['who'] : '') !== $who) {
                        throw new ApiError('sirf apna message delete kar sakte ho', 403);
                    }
                    $deleted = $m;
                    continue;
                }
                $keep[] = $m;
            }
            if ($deleted === null) {
                return null;
            }
            $d['items'] = $keep;
            return $d;
        }, null);

        if ($deleted === null) {
            throw new ApiError('message nahi mila', 404);
        }

        if (isset($deleted['attachment']['path'])) {
            $p = V::relPath($deleted['attachment']['path']);
            if ($p !== '') {
                @unlink($this->s->path($p));
            }
        }

        return true;
    }

    /* ==========================================================
       SETTINGS
       ========================================================== */

    public function getSettings()
    {
        $s = $this->s->read('settings.json', array());
        if (!is_array($s)) {
            $s = array();
        }
        return array(
            'telegram' => isset($s['telegram']) && is_array($s['telegram']) ? $s['telegram']
                          : array('botToken' => '', 'chatId' => '', 'enabled' => false),
            'ui'       => isset($s['ui']) && is_array($s['ui']) ? $s['ui']
                          : array('showPassword' => false, 'splash' => true),
        );
    }

    public function saveSettings(array $patch, $byEmail = '')
    {
        $now = $this->s->now();

        return $this->s->transaction('settings.json', function ($s) use ($patch, $now, $byEmail) {
            if (!is_array($s)) {
                $s = array();
            }
            if (!isset($s['telegram']) || !is_array($s['telegram'])) {
                $s['telegram'] = array('botToken' => '', 'chatId' => '', 'enabled' => false);
            }
            if (!isset($s['ui']) || !is_array($s['ui'])) {
                $s['ui'] = array('showPassword' => false, 'splash' => true);
            }

            if (isset($patch['telegram']) && is_array($patch['telegram'])) {
                $t = $patch['telegram'];
                if (array_key_exists('botToken', $t)) {
                    $s['telegram']['botToken'] = V::str($t['botToken'], 200);
                }
                if (array_key_exists('chatId', $t)) {
                    $s['telegram']['chatId'] = V::str($t['chatId'], 60);
                }
                if (array_key_exists('enabled', $t)) {
                    $s['telegram']['enabled'] = !empty($t['enabled']);
                }
            }

            if (isset($patch['ui']) && is_array($patch['ui'])) {
                $u = $patch['ui'];
                if (array_key_exists('showPassword', $u)) {
                    $s['ui']['showPassword'] = !empty($u['showPassword']);
                }
                if (array_key_exists('splash', $u)) {
                    $s['ui']['splash'] = !empty($u['splash']);
                }
            }

            $s['updatedAt'] = $now;
            $s['updatedBy'] = $byEmail;

            return $s;
        }, array());
    }

    /* ==========================================================
       FILES
       ========================================================== */

    /** uploads/... relative path -> absolute (traversal safe). */
    public function uploadPath($rel)
    {
        $rel = V::relPath($rel);
        if ($rel === '' || strpos($rel, 'uploads/') !== 0) {
            return null;
        }
        $full = $this->s->path($rel);
        return is_file($full) ? $full : null;
    }
}
