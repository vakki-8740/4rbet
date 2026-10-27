<?php
/**
 * 4R BET | Http.php
 * ------------------------------------------------------------------
 * Chhota HTTP layer: Request, Response, Router, CORS, Uploads.
 * Framework nahi - sirf utna jitna API ke liye chahiye.
 *
 * Wasmer Edge par PHP built-in server chalta hai, isliye sab kuch
 * $_SERVER / $_FILES / php://input se hi padha jaata hai.
 */

declare(strict_types=1);

/* ==========================================================
   REQUEST
   ========================================================== */

final class Req
{
    /** @var string */
    public $method = 'GET';
    /** @var string normalized path, no query string */
    public $path = '/';
    /** @var array */
    public $query = array();
    /** @var array lower-cased header map */
    public $headers = array();
    /** @var string raw body */
    public $raw = '';
    /** @var array|null decoded json body */
    public $json = null;
    /** @var array */
    public $files = array();
    /** @var string */
    public $ip = '';
    /** @var array route params ({id} etc.) */
    public $params = array();

    public static function fromGlobals()
    {
        $r = new self();

        $r->method = strtoupper(isset($_SERVER['REQUEST_METHOD']) ? $_SERVER['REQUEST_METHOD'] : 'GET');

        $uri = isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : '/';
        $path = parse_url($uri, PHP_URL_PATH);
        if (!is_string($path) || $path === '') {
            $path = '/';
        }
        /* trailing slash hata do (root ke alawa) */
        if ($path !== '/' && substr($path, -1) === '/') {
            $path = rtrim($path, '/');
            if ($path === '') {
                $path = '/';
            }
        }
        $r->path  = $path;
        $r->query = isset($_GET) && is_array($_GET) ? $_GET : array();

        foreach ($_SERVER as $k => $v) {
            if (strpos($k, 'HTTP_') === 0) {
                $name = strtolower(str_replace('_', '-', substr($k, 5)));
                $r->headers[$name] = is_string($v) ? $v : '';
            }
        }
        foreach (array('CONTENT_TYPE' => 'content-type', 'CONTENT_LENGTH' => 'content-length') as $k => $name) {
            if (isset($_SERVER[$k])) {
                $r->headers[$name] = (string) $_SERVER[$k];
            }
        }

        $ctype = $r->header('content-type');
        $isForm = (stripos($ctype, 'application/x-www-form-urlencoded') !== false
                   || stripos($ctype, 'multipart/form-data') !== false);

        if ($isForm) {
            $r->json = $_POST;                       /* form data ko hi "body" maano */
            $r->raw  = '';
        } else {
            $raw = file_get_contents('php://input');
            $r->raw = is_string($raw) ? $raw : '';
            if ($r->raw !== '') {
                $dec = json_decode($r->raw, true);
                $r->json = (json_last_error() === JSON_ERROR_NONE && is_array($dec)) ? $dec : null;
            }
        }

        $r->files = isset($_FILES) && is_array($_FILES) ? $_FILES : array();

        $fwd = $r->header('x-forwarded-for');
        if ($fwd !== '') {
            $parts = explode(',', $fwd);
            $r->ip = trim($parts[0]);
        }
        if ($r->ip === '') {
            $r->ip = isset($_SERVER['REMOTE_ADDR']) ? (string) $_SERVER['REMOTE_ADDR'] : '0.0.0.0';
        }

        return $r;
    }

    public function header($name, $default = '')
    {
        $name = strtolower($name);
        return isset($this->headers[$name]) ? $this->headers[$name] : $default;
    }

    /** Body / query / $_POST me se value (isi order me). */
    public function input($key, $default = null)
    {
        if (is_array($this->json) && array_key_exists($key, $this->json)) {
            return $this->json[$key];
        }
        if (array_key_exists($key, $this->query)) {
            return $this->query[$key];
        }
        return $default;
    }

    public function bearer()
    {
        $h = $this->header('authorization');
        if ($h !== '' && stripos($h, 'bearer ') === 0) {
            return trim(substr($h, 7));
        }
        /* EventSource custom header nahi bhej sakta - query se bhi allow */
        $t = $this->input('token');
        return is_string($t) && $t !== '' ? $t : '';
    }

    public function deviceId()
    {
        $d = $this->header('x-device-id');
        if ($d === '') {
            $d = (string) $this->input('deviceId', '');
        }
        $d = preg_replace('/[^A-Za-z0-9_\-]/', '', $d);
        return is_string($d) ? substr($d, 0, 64) : '';
    }

    public function is($method)
    {
        return $this->method === strtoupper($method);
    }

    /* ---------- convenience accessors ---------- */

    /** Alias of fromGlobals() - router me padhne me aasan. */
    public static function capture()
    {
        return self::fromGlobals();
    }

    public function method()
    {
        return $this->method;
    }

    public function path()
    {
        return $this->path;
    }

    public function ip()
    {
        return $this->ip;
    }

    /** Query string param. */
    public function q($key, $default = '')
    {
        return array_key_exists($key, $this->query) ? $this->query[$key] : $default;
    }

    /** Decoded JSON body (array) ya null. Form body bhi isi me aati hai. */
    public function json()
    {
        return is_array($this->json) ? $this->json : null;
    }

    /** $_POST / form field. */
    public function field($key, $default = '')
    {
        if (isset($_POST[$key]) && !is_array($_POST[$key])) {
            return (string) $_POST[$key];
        }
        $v = $this->input($key, $default);
        return is_scalar($v) ? (string) $v : $default;
    }

    /** Saare form fields (scalar only). */
    public function fields()
    {
        $out = array();
        foreach ($_POST as $k => $v) {
            if (!is_array($v)) {
                $out[(string) $k] = (string) $v;
            }
        }
        return $out;
    }

    /** $_FILES */
    public function files()
    {
        return $this->files;
    }

    /**
     * Query flag: ?unmasked / ?unmasked=1 / ?debug=true
     */
    public function flag($key)
    {
        if (!array_key_exists($key, $this->query)) {
            return false;
        }
        $v = strtolower(trim((string) $this->query[$key]));
        return $v === '' || $v === '1' || $v === 'true' || $v === 'yes' || $v === 'on';
    }
}

/* ==========================================================
   RESPONSE
   ========================================================== */

final class Res
{
    /** @var array<string,string> extra headers jo har response me jayenge */
    private static $baseHeaders = array();

    /** @var int */
    private $status = 200;
    /** @var array<string,string> */
    private $headers = array();
    /** @var string */
    private $body = '';
    /** @var bool */
    private $sent = false;

    public static function setBaseHeaders(array $h)
    {
        self::$baseHeaders = $h;
    }

    public static function baseHeaders()
    {
        return self::$baseHeaders;
    }

    /* ---------- builders (chainable) ---------- */

    public function status($code)
    {
        $this->status = (int) $code;
        return $this;
    }

    public function getStatus()
    {
        return $this->status;
    }

    public function header($name, $value)
    {
        $this->headers[(string) $name] = (string) $value;
        return $this;
    }

    public function body($s)
    {
        $this->body = (string) $s;
        return $this;
    }

    public function json($data, $status = 200)
    {
        $this->status = (int) $status;
        $this->headers['Content-Type'] = 'application/json; charset=utf-8';
        $enc = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PARTIAL_OUTPUT_ON_ERROR);
        $this->body = $enc === false ? '{"ok":false,"error":"encode failed"}' : $enc;
        return $this;
    }

    public function ok(array $data = array(), $status = 200)
    {
        return $this->json(array_merge(array('ok' => true), $data), $status);
    }

    public function error($message, $status = 400, array $extra = array())
    {
        return $this->json(array_merge(array('ok' => false, 'error' => (string) $message), $extra), $status);
    }

    public function noContent()
    {
        $this->status = 204;
        $this->body = '';
        return $this;
    }

    public function text($s, $status = 200)
    {
        $this->status = (int) $status;
        $this->headers['Content-Type'] = 'text/plain; charset=utf-8';
        $this->body = (string) $s;
        return $this;
    }

    /** File stream (uploads serve karne ke liye). */
    public function file($fullPath, $mime, $downloadName = '')
    {
        if (!is_file($fullPath)) {
            return $this->error('file nahi mili', 404);
        }

        $this->status = 200;
        $this->headers['Content-Type'] = $mime;
        $this->headers['Content-Length'] = (string) filesize($fullPath);
        /* uploads immutable hain (uuid naam) - cache kar lo */
        $this->headers['Cache-Control'] = 'public, max-age=31536000, immutable';
        if ($downloadName !== '') {
            $this->headers['Content-Disposition'] = 'attachment; filename="' . str_replace('"', '', $downloadName) . '"';
        }
        $this->body = (string) file_get_contents($fullPath);
        return $this;
    }

    /* ---------- emit ---------- */

    public function send()
    {
        if ($this->sent) {
            return $this;
        }
        $this->sent = true;

        if (!headers_sent()) {
            http_response_code($this->status);
            foreach (self::$baseHeaders as $k => $v) {
                if ($v !== '') {
                    header($k . ': ' . $v);
                }
            }
            foreach ($this->headers as $k => $v) {
                if ($v !== '') {
                    header($k . ': ' . $v);
                }
            }
        }

        if ($this->status !== 204 && $this->body !== '') {
            echo $this->body;
        }

        return $this;
    }

    public function isSent()
    {
        return $this->sent;
    }
}

/* ==========================================================
   ROUTER
   ========================================================== */

final class Router
{
    /** @var array<int,array{0:string,1:string,2:callable}> */
    private $routes = array();

    /**
     * @param string $method  GET|POST|PATCH|DELETE|PUT
     * @param string $pattern e.g. /api/chats/{id}/messages
     */
    public function add($method, $pattern, callable $handler)
    {
        $regex = preg_replace_callback(
            '/\{([a-zA-Z_][a-zA-Z0-9_]*)\}/',
            function ($m) {
                return '(?P<' . $m[1] . '>[^/]+)';
            },
            $pattern
        );

        $this->routes[] = array(strtoupper($method), '#^' . $regex . '$#', $handler);
        return $this;
    }

    public function get($p, $h)     { return $this->add('GET', $p, $h); }
    public function post($p, $h)    { return $this->add('POST', $p, $h); }
    public function patch($p, $h)   { return $this->add('PATCH', $p, $h); }
    public function put($p, $h)     { return $this->add('PUT', $p, $h); }
    public function delete($p, $h)  { return $this->add('DELETE', $p, $h); }

    /**
     * @return array{0:callable,1:array}|null
     */
    public function match($method, $path)
    {
        $pathExists = false;

        foreach ($this->routes as $r) {
            if (preg_match($r[1], $path, $m)) {
                $pathExists = true;
                if ($r[0] === $method) {
                    $params = array();
                    foreach ($m as $k => $v) {
                        if (!is_int($k)) {
                            $params[$k] = rawurldecode($v);
                        }
                    }
                    return array($r[2], $params);
                }
            }
        }

        return $pathExists ? false : null;   /* false = path mila, method nahi (405) */
    }

    /**
     * Match + handler call.
     * @return mixed handler ka return value (null/Res/array/scalar)
     */
    public function dispatch(Req $req, Res $resp)
    {
        $m = $this->match($req->method, $req->path);

        if ($m === null) {
            return $resp->json(array(
                'ok'    => false,
                'error' => 'endpoint nahi mila',
                'path'  => $req->path,
                'hint'  => 'GET /api/health se check karein',
            ), 404);
        }

        if ($m === false) {
            return $resp->json(array(
                'ok'     => false,
                'error'  => 'method allowed nahi hai',
                'method' => $req->method,
                'path'   => $req->path,
            ), 405)->header('Allow', $this->allowedFor($req->path));
        }

        list($handler, $params) = $m;
        $req->params = $params;

        return call_user_func($handler, $params, $req, $resp);
    }

    /** 405 ke liye Allow header. */
    private function allowedFor($path)
    {
        $out = array();
        foreach ($this->routes as $r) {
            if (preg_match($r[1], $path)) {
                $out[] = $r[0];
            }
        }
        $out[] = 'OPTIONS';
        return implode(', ', array_values(array_unique($out)));
    }
}

/* ==========================================================
   CORS
   ========================================================== */

final class Cors
{
    /**
     * ALLOWED_ORIGINS env se origins (comma separated). "*" ya khaali = sab allow.
     * Credentials (cookies) use nahi ho rahi - token Authorization header me hai,
     * isliye wildcard origin safe hai.
     */
    public static function headers(Req $req)
    {
        $envRaw = getenv('ALLOWED_ORIGINS');
        $envRaw = is_string($envRaw) ? trim($envRaw) : '';

        $origin = $req->header('origin');
        $allow  = '*';

        if ($envRaw !== '' && $envRaw !== '*') {
            $list = array_filter(array_map('trim', explode(',', $envRaw)));
            $allow = '';
            foreach ($list as $o) {
                if ($o === '*') { $allow = '*'; break; }
                if ($origin !== '' && strcasecmp($o, $origin) === 0) {
                    $allow = $origin;
                    break;
                }
            }
            /* origin match na ho to '*' mat bhejo - sirf allowlisted */
            if ($allow === '') {
                $allow = $origin !== '' ? '' : '*';
            }
        }

        $h = array(
            'Access-Control-Allow-Methods'  => 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers'  => 'Authorization, Content-Type, X-Device-Id, X-Requested-With',
            'Access-Control-Expose-Headers' => 'X-Server-Time, X-RateLimit-Remaining',
            'Access-Control-Max-Age'        => '86400',
            'Vary'                          => 'Origin',
        );
        if ($allow !== '') {
            $h['Access-Control-Allow-Origin'] = $allow;
        }

        return $h;
    }

    /**
     * CORS headers response par lagao. OPTIONS ho to 204 set karke true.
     * Caller: if (Cors::handle($req,$resp)) { $resp->send(); exit; }
     */
    public static function handle(Req $req, Res $resp)
    {
        foreach (self::headers($req) as $k => $v) {
            $resp->header($k, $v);
        }
        Res::setBaseHeaders(self::headers($req));

        if ($req->method === 'OPTIONS') {
            $resp->noContent();
            return true;
        }

        return false;
    }

    /** Purana static entry point (compat). */
    public static function apply(Req $req)
    {
        Res::setBaseHeaders(self::headers($req));
        if ($req->method === 'OPTIONS') {
            return true;
        }
        return false;
    }
}

/* ==========================================================
   UPLOADS
   ========================================================== */

final class Uploads
{
    /** @var int bytes */
    public static $imageMax = 4194304;   /* 4 MB */
    public static $fileMax  = 2097152;   /* 2 MB */

    /** @var string absolute URL prefix (PUBLIC_BASE_URL env). Khaali = relative. */
    public static $baseUrl = '';

    /** Bootstrap par call karein - stored urls absolute ban jaate hain. */
    public static function useEnvBase()
    {
        $b = getenv('PUBLIC_BASE_URL');
        if (is_string($b) && trim($b) !== '') {
            self::$baseUrl = rtrim(trim($b), '/');
        }
        return self::$baseUrl;
    }

    private static $imageMimes = array(
        'image/jpeg' => 'jpg', 'image/jpg' => 'jpg', 'image/png' => 'png',
        'image/webp' => 'webp', 'image/gif' => 'gif',
    );

    private static $fileMimes = array(
        'application/pdf' => 'pdf',
        'application/msword' => 'doc',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document' => 'docx',
        'application/vnd.ms-excel' => 'xls',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' => 'xlsx',
        'text/plain' => 'txt',
        'application/zip' => 'zip',
    );

    /**
     * $_FILES entry ko volume par save karo.
     * @return array{ok:bool, error?:string, path?:string, url?:string, name?:string,
     *               bytes?:int, mime?:string, kind?:string}
     */
    public static function save(JsonStore $store, array $file, $kind = 'image')
    {
        if (!isset($file['error']) || is_array($file['error'])) {
            return array('ok' => false, 'error' => 'file upload sahi nahi hua');
        }

        if ($file['error'] === UPLOAD_ERR_NO_FILE) {
            return array('ok' => false, 'error' => 'koi file nahi chuni gayi');
        }
        if ($file['error'] === UPLOAD_ERR_INI_SIZE || $file['error'] === UPLOAD_ERR_FORM_SIZE) {
            return array('ok' => false, 'error' => 'file bahut badi hai (php.ini limit)');
        }
        if ($file['error'] !== UPLOAD_ERR_OK) {
            return array('ok' => false, 'error' => 'upload error code ' . $file['error']);
        }

        $tmp = isset($file['tmp_name']) ? (string) $file['tmp_name'] : '';
        if ($tmp === '' || !is_uploaded_file($tmp)) {
            /* CLI/test se aayi ho to bhi chale - par production me strict */
            if ($tmp === '' || !is_file($tmp)) {
                return array('ok' => false, 'error' => 'temp file nahi mili');
            }
        }

        $size = isset($file['size']) ? (int) $file['size'] : (int) @filesize($tmp);
        $origName = isset($file['name']) ? (string) $file['name'] : 'file';

        $max = $kind === 'image' ? self::$imageMax : self::$fileMax;
        if ($size <= 0) {
            return array('ok' => false, 'error' => 'file khaali hai');
        }
        if ($size > $max) {
            return array('ok' => false, 'error' => 'file ' . round($max / 1048576, 1) . 'MB se badi hai');
        }

        /* mime: finfo ho to usi par bharosa, warna extension */
        $mime = '';
        if (function_exists('finfo_open')) {
            $fi = @finfo_open(FILEINFO_MIME_TYPE);
            if ($fi) {
                $m = @finfo_file($fi, $tmp);
                if (is_string($m) && $m !== '') {
                    $mime = strtolower(trim(explode(';', $m)[0]));
                }
                @finfo_close($fi);
            }
        }
        if ($mime === '') {
            $mime = strtolower((string) (isset($file['type']) ? $file['type'] : ''));
        }

        $allowed = $kind === 'image' ? self::$imageMimes : self::$fileMimes;
        if (!isset($allowed[$mime])) {
            return array('ok' => false, 'error' => ($kind === 'image' ? 'sirf image (jpg/png/webp/gif)' : 'ye file type allowed nahi') . ' [' . $mime . ']');
        }

        $ext = $allowed[$mime];
        $sub = gmdate('Y/m');
        $name = self::uuid() . '.' . $ext;
        $rel  = 'uploads/' . $sub . '/' . $name;

        $full = $store->path($rel);
        $dir  = dirname($full);
        if (!is_dir($dir) && !@mkdir($dir, 0775, true) && !is_dir($dir)) {
            return array('ok' => false, 'error' => 'upload dir banaya nahi ja saka (volume writable hai?)');
        }

        $moved = @move_uploaded_file($tmp, $full);
        if (!$moved) {
            /* move_uploaded_file CLI/test me fail karta hai - copy fallback */
            $moved = @copy($tmp, $full);
        }
        if (!$moved) {
            return array('ok' => false, 'error' => 'file save nahi hui (volume writable hai?)');
        }

        @chmod($full, 0664);

        $safeName = preg_replace('/[^\w.\- ]+/u', '_', $origName);
        if (!is_string($safeName) || trim($safeName) === '') {
            $safeName = 'file.' . $ext;
        }

        return array(
            'ok'    => true,
            'kind'  => $kind,
            'path'  => $rel,
            'url'   => self::$baseUrl . '/api/files/' . $sub . '/' . $name,
            'name'  => substr($safeName, 0, 120),
            'bytes' => $size,
            'mime'  => $mime,
            'ext'   => $ext,
        );
    }

    public static function uuid()
    {
        $b = '';
        if (function_exists('random_bytes')) {
            try {
                $b = random_bytes(16);
            } catch (Exception $e) {
                $b = '';
            }
        }
        if ($b === '') {
            $b = '';
            for ($i = 0; $i < 16; $i++) {
                $b .= chr(mt_rand(0, 255));
            }
        }

        $b[6] = chr((ord($b[6]) & 0x0f) | 0x40);
        $b[8] = chr((ord($b[8]) & 0x3f) | 0x80);

        return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($b), 4));
    }

    public static function mimeFor($ext)
    {
        $map = array(
            'jpg' => 'image/jpeg', 'jpeg' => 'image/jpeg', 'png' => 'image/png',
            'webp' => 'image/webp', 'gif' => 'image/gif', 'pdf' => 'application/pdf',
            'doc' => 'application/msword', 'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'xls' => 'application/vnd.ms-excel', 'xlsx' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'txt' => 'text/plain', 'zip' => 'application/zip', 'json' => 'application/json',
        );
        $ext = strtolower((string) $ext);
        return isset($map[$ext]) ? $map[$ext] : 'application/octet-stream';
    }
}

/* ==========================================================
   VALIDATE
   ========================================================== */

final class V
{
    public static function str($v, $max = 200)
    {
        if (is_array($v) || is_object($v)) {
            return '';
        }
        $s = trim((string) $v);
        if (function_exists('mb_substr')) {
            return mb_substr($s, 0, $max);
        }
        return substr($s, 0, $max);
    }

    public static function email($v)
    {
        $s = self::str($v, 190);
        return filter_var($s, FILTER_VALIDATE_EMAIL) ? strtolower($s) : '';
    }

    public static function mobile($v)
    {
        $s = preg_replace('/[^0-9+\-\s]/', '', self::str($v, 20));
        return (strlen((string) $s) >= 10 && strlen((string) $s) <= 20) ? (string) $s : '';
    }

    public static function id($v, $max = 64)
    {
        $s = preg_replace('/[^A-Za-z0-9_\-]/', '', self::str($v, $max));
        return is_string($s) ? $s : '';
    }

    /** Sirf safe relative path (uploads ke liye). */
    public static function relPath($v)
    {
        $s = self::str($v, 200);
        if ($s === '' || strpos($s, '..') !== false || $s[0] === '/') {
            return '';
        }
        return preg_replace('/[^A-Za-z0-9\/._\-]/', '', $s);
    }

    /** Numeric clamp - query params ke liye. */
    public static function intVal($v, $default = 0, $min = 0, $max = PHP_INT_MAX)
    {
        if (is_array($v) || $v === null || $v === '') {
            $n = (int) $default;
        } elseif (is_numeric($v)) {
            $n = (int) $v;
        } else {
            $n = (int) $default;
        }
        if ($n < (int) $min) {
            $n = (int) $min;
        }
        if ($n > (int) $max) {
            $n = (int) $max;
        }
        return $n;
    }

    public static function oneOf($v, array $allowed, $default = '')
    {
        $s = self::str($v, 40);
        return in_array($s, $allowed, true) ? $s : $default;
    }
}

/* ==========================================================
   API EXCEPTION
   ========================================================== */

final class ApiError extends RuntimeException
{
    /** @var int */
    public $status;

    public function __construct($message, $status = 400)
    {
        parent::__construct((string) $message);
        $this->status = (int) $status;
    }

    public function getStatus()
    {
        return $this->status;
    }
}
