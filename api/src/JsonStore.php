<?php
/**
 * 4R BET | JsonStore.php
 * ------------------------------------------------------------------
 * JSON-file "database" engine.
 *
 * Wasmer Edge par app ka filesystem READ-ONLY hota hai, sirf mounted
 * VOLUME writable hota hai. Isliye saara data DATA_DIR (volume) me
 * JSON files me rehta hai.
 *
 * Volume read-write-many hai (auto-scaling me kai instances ek hi
 * file ko chhoo sakte hain), isliye ye engine 3 cheezein guarantee
 * karta hai:
 *
 *   1. LOCKING   - har file ka apna sidecar .lock, flock(LOCK_EX)
 *                  + timeout retry. Read-modify-write poora lock ke
 *                  andar hota hai (lost update nahi hota).
 *   2. ATOMIC    - pehle temp file me likho, phir rename(). rename
 *                  POSIX par atomic hai, isliye reader ko kabhi
 *                  aadhi-likhi file nahi milti.
 *   3. RECOVERY  - har successful write se pehle purani file .bak me
 *                  chali jaati hai. JSON corrupt mile to .bak se
 *                  restore hota hai.
 *
 * Sharding: ek badi file ke bajaye chhoti-chhoti files
 *   complaints/index.json      (list, summaries only)
 *   complaints/<id>.json       (full record)
 *   chats/index.json           (list)
 *   chats/<id>/chat.json       (chat doc)
 *   chats/<id>/messages.json   (us chat ke messages)
 * Isse write contention sirf us chat tak seemit rehti hai aur
 * listing me images/base64 load nahi hote.
 */

declare(strict_types=1);

final class JsonStore
{
    /** @var string */
    private $root;

    /** @var int lock milne ka max wait (milliseconds) */
    private $lockTimeoutMs;

    /** @var int retry ke beech ka sleep (microseconds) */
    private $lockRetryUs;

    /** @var string[] request lifecycle me aaye errors (health endpoint dikhata hai) */
    private $errors = array();

    public function __construct($root = null, $lockTimeoutMs = 4000, $lockRetryUs = 4000)
    {
        if ($root === null || (is_string($root) && trim($root) === '')) {
            $root = self::defaultRoot();
        }
        $this->root        = rtrim($this->normalize((string) $root), '/');
        $this->lockTimeoutMs = max(200, (int) $lockTimeoutMs);
        $this->lockRetryUs   = max(500, (int) $lockRetryUs);
    }

    /* ==========================================================
       PATHS
       ========================================================== */

    public function root()
    {
        return $this->root;
    }

    /** root() ka alias - padhne me aasan. */
    public function dir()
    {
        return $this->root;
    }

    /**
     * Data dir kahan hogi? Priority:
     *   1. DATA_DIR env (Edge par /data/4rbet - volume ke andar)
     *   2. /data/4rbet  (Wasmer volume mount default)
     *   3. sys_get_temp_dir()/4rbet-data  (local dev)
     */
    public static function defaultRoot()
    {
        $env = getenv('DATA_DIR');
        if (is_string($env) && trim($env) !== '') {
            return trim($env);
        }
        if (is_dir('/data') && @is_writable('/data')) {
            return '/data/4rbet';
        }
        if (is_dir('/data')) {
            return '/data/4rbet';   /* ensureLayout() error note karega */
        }
        return rtrim((string) sys_get_temp_dir(), '/') . '/4rbet-data';
    }

    /**
     * Relative path safe hai? (traversal test) - safe ho to normalized
     * relative path, warna ''.
     */
    public function safe($rel)
    {
        $rel = (string) $rel;
        if ($rel === '' || strpos($rel, "\0") !== false) {
            return '';
        }
        if ($rel[0] === '/' || strpos($rel, '..') !== false) {
            return '';
        }
        $norm = $this->normalize($rel);
        if ($norm === '' || $norm !== ltrim($rel, './')) {
            /* normalize ne kuch hataya => suspicious */
            if ($norm === '') {
                return '';
            }
        }
        return $norm;
    }

    /**
     * Relative path ko safe absolute path banao.
     * Traversal (../), absolute path aur null byte block.
     */
    public function path($rel)
    {
        $rel = $this->normalize((string) $rel);

        if ($rel === '' || $rel === '/' || $rel === '.') {
            return $this->root;
        }
        if ($rel[0] === '/' || strpos($rel, "\0") !== false) {
            throw new RuntimeException('unsafe path: ' . $rel);
        }

        $full = $this->root . '/' . ltrim($rel, '/');

        /* resolve karke confirm karo ki root ke andar hi hai */
        $real = realpath($full);
        if ($real !== false && strpos($real, $this->root) !== 0) {
            throw new RuntimeException('path escapes data dir: ' . $rel);
        }

        return $full;
    }

    private function normalize($p)
    {
        $p = str_replace('\\', '/', (string) $p);

        /* ".." segments hata do */
        $parts = array();
        foreach (explode('/', $p) as $seg) {
            if ($seg === '' || $seg === '.') {
                continue;
            }
            if ($seg === '..') {
                array_pop($parts);
                continue;
            }
            $parts[] = $seg;
        }

        $out = implode('/', $parts);
        if (substr((string) $p, 0, 1) === '/' && $out !== '') {
            $out = '/' . $out;
        }

        return $out;
    }

    /* ==========================================================
       LAYOUT / HEALTH
       ========================================================== */

    /** Zaroori directories + seed files banao. Idempotent. */
    public function ensureLayout()
    {
        $created = array();

        $dirs = array('', 'complaints', 'chats', 'uploads', 'tmp');
        foreach ($dirs as $d) {
            $full = $d === '' ? $this->root : $this->root . '/' . $d;
            if (!is_dir($full)) {
                if (@mkdir($full, 0775, true) && is_dir($full)) {
                    $created[] = $full;
                }
            }
        }

        $seeds = array(
            'meta.json'          => array('schema' => 1, 'createdAt' => $this->now(), 'counters' => array()),
            'admins.json'        => array('admins' => array()),
            'settings.json'      => array('telegram' => array('botToken' => '', 'chatId' => '', 'enabled' => false),
                                          'ui' => array('showPassword' => false, 'splash' => true)),
            'complaints/index.json' => array(),
            'chats/index.json'      => array(),
        );

        foreach ($seeds as $rel => $data) {
            $full = $this->path($rel);
            if (!file_exists($full)) {
                if ($this->write($rel, $data)) {
                    $created[] = $rel;
                }
            }
        }

        return $created;
    }

    public function isWritable()
    {
        if (!is_dir($this->root)) {
            return false;
        }
        $probe = $this->root . '/tmp/.w-' . getmypid() . '-' . mt_rand(1000, 9999);
        $ok = @file_put_contents($probe, 'x');
        if ($ok === false) {
            return false;
        }
        @unlink($probe);
        return true;
    }

    public function errors()
    {
        return $this->errors;
    }

    private function note($msg)
    {
        $this->errors[] = $msg;
        if (count($this->errors) > 20) {
            array_shift($this->errors);
        }
        error_log('[4rbet] ' . $msg);
    }

    /* ==========================================================
       READ
       ========================================================== */

    /**
     * JSON file padho. File na ho ya corrupt ho to $default.
     * Corrupt par .bak se ek baar restore try hota hai.
     */
    public function read($rel, $default = null)
    {
        $full = $this->path($rel);

        if (!is_file($full)) {
            return $default;
        }

        $raw = @file_get_contents($full);
        if ($raw === false || trim($raw) === '') {
            return $default;
        }

        $data = json_decode($raw, true);
        if (json_last_error() === JSON_ERROR_NONE) {
            return $data;
        }

        /* corrupt -> backup se restore */
        $this->note('corrupt json: ' . $rel . ' (' . json_last_error_msg() . ')');

        $bak = $full . '.bak';
        if (is_file($bak)) {
            $rawBak = @file_get_contents($bak);
            if (is_string($rawBak) && trim($rawBak) !== '') {
                $bakData = json_decode($rawBak, true);
                if (json_last_error() === JSON_ERROR_NONE) {
                    @file_put_contents($full . '.corrupt-' . time(), $raw);
                    @rename($bak, $full);
                    $this->note('restored from .bak: ' . $rel);
                    return $bakData;
                }
            }
        }

        return $default;
    }

    /* ==========================================================
       WRITE (atomic)
       ========================================================== */

    public function write($rel, $data)
    {
        $full = $this->path($rel);
        $dir  = dirname($full);

        if (!is_dir($dir) && !@mkdir($dir, 0775, true) && !is_dir($dir)) {
            $this->note('mkdir failed: ' . $dir);
            return false;
        }

        $json = json_encode(
            $data,
            JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PARTIAL_OUTPUT_ON_ERROR
        );

        if ($json === false) {
            $this->note('json_encode failed: ' . $rel . ' (' . json_last_error_msg() . ')');
            return false;
        }

        $tmp = $dir . '/.' . basename($full) . '.tmp-' . getmypid() . '-' . mt_rand(10000, 99999);

        if (@file_put_contents($tmp, $json, LOCK_EX) === false) {
            $this->note('temp write failed: ' . $rel);
            @unlink($tmp);
            return false;
        }

        /* purani file ko .bak me rakho (crash recovery) */
        if (is_file($full)) {
            @copy($full, $full . '.bak');
        }

        if (!@rename($tmp, $full)) {
            $this->note('atomic rename failed: ' . $rel);
            @unlink($tmp);
            return false;
        }

        @chmod($full, 0664);
        return true;
    }

    /* ==========================================================
       LOCK
       ========================================================== */

    /**
     * File ka exclusive lock lo (sidecar .lock par).
     * @return resource|false
     */
    public function lock($rel)
    {
        $lockPath = $this->path($rel) . '.lock';
        $dir = dirname($lockPath);
        if (!is_dir($dir)) {
            @mkdir($dir, 0775, true);
        }

        $fh = @fopen($lockPath, 'c+');
        if ($fh === false) {
            $this->note('cannot open lock: ' . $rel);
            return false;
        }

        $deadline = microtime(true) + ($this->lockTimeoutMs / 1000);

        while (true) {
            if (@flock($fh, LOCK_EX | LOCK_NB)) {
                return $fh;
            }
            if (microtime(true) >= $deadline) {
                break;
            }
            usleep($this->lockRetryUs);
        }

        /* aakhri koshish - blocking, warna fail */
        if (@flock($fh, LOCK_EX)) {
            return $fh;
        }

        @fclose($fh);
        $this->note('lock timeout: ' . $rel);
        return false;
    }

    public function unlock($fh)
    {
        if (is_resource($fh)) {
            @flock($fh, LOCK_UN);
            @fclose($fh);
        }
    }

    /* ==========================================================
       TRANSACTION  (read-modify-write, poora lock ke andar)
       ========================================================== */

    /**
     * $fn($currentData) ko lock ke andar chalao; jo return kare wahi
     * file me likha jaata hai. null return kiya to write skip.
     *
     * @return mixed  $fn ka return value
     */
    public function transaction($rel, callable $fn, $default = null)
    {
        $fh = $this->lock($rel);
        if ($fh === false) {
            throw new RuntimeException('store busy, dobara koshish karein (' . $rel . ')');
        }

        try {
            $current = $this->read($rel, $default);
            $result  = $fn($current);

            if ($result !== null) {
                if (!$this->write($rel, $result)) {
                    throw new RuntimeException('write failed: ' . $rel);
                }
            }

            return $result === null ? $current : $result;
        } finally {
            $this->unlock($fh);
        }
    }

    /* ==========================================================
       HELPERS
       ========================================================== */

    /** Monotonic counter (meta.json me) - complaint IDs ke liye. */
    public function nextCounter($key)
    {
        $meta = $this->transaction('meta.json', function ($m) use ($key) {
            if (!is_array($m)) {
                $m = array('schema' => 1, 'counters' => array());
            }
            if (!isset($m['counters']) || !is_array($m['counters'])) {
                $m['counters'] = array();
            }
            $n = isset($m['counters'][$key]) ? (int) $m['counters'][$key] : 0;
            $m['counters'][$key] = $n + 1;
            return $m;
        }, array('schema' => 1, 'counters' => array()));

        return isset($meta['counters'][$key]) ? (int) $meta['counters'][$key] : 1;
    }

    /** List file me item upsert karo (id match par replace, warna unshift). */
    public function upsertInList($rel, array $item, $idKey = 'id', $maxItems = 2000)
    {
        return $this->transaction($rel, function ($list) use ($item, $idKey, $maxItems) {
            if (!is_array($list)) {
                $list = array();
            }
            $id = isset($item[$idKey]) ? $item[$idKey] : null;
            $out = array();
            $replaced = false;

            foreach ($list as $row) {
                if ($id !== null && is_array($row) && isset($row[$idKey]) && $row[$idKey] === $id) {
                    $out[] = $item;
                    $replaced = true;
                } else {
                    $out[] = $row;
                }
            }

            if (!$replaced) {
                array_unshift($out, $item);
            }

            if (count($out) > $maxItems) {
                $out = array_slice($out, 0, $maxItems);
            }

            return $out;
        }, array());
    }

    public function removeFromList($rel, $id, $idKey = 'id')
    {
        return $this->transaction($rel, function ($list) use ($id, $idKey) {
            if (!is_array($list)) {
                return array();
            }
            $out = array();
            foreach ($list as $row) {
                if (is_array($row) && isset($row[$idKey]) && (string) $row[$idKey] === (string) $id) {
                    continue;
                }
                $out[] = $row;
            }
            return $out;
        }, array());
    }

    /** File ka size (bytes) - health/stats ke liye. */
    public function sizeOf($rel)
    {
        $full = $this->path($rel);
        return is_file($full) ? (int) @filesize($full) : 0;
    }

    public function now()
    {
        return gmdate('Y-m-d\TH:i:s\Z');
    }

    /** Disk usage of data dir (approx, uploads ke saath). */
    public function diskUsage()
    {
        $total = 0;
        $files = 0;

        $it = new RecursiveIteratorIterator(
            new RecursiveDirectoryIterator($this->root, FilesystemIterator::SKIP_DOTS),
            RecursiveIteratorIterator::SELF_FIRST
        );

        foreach ($it as $f) {
            if ($f->isFile()) {
                $total += (int) $f->getSize();
                $files++;
            }
            if ($files > 20000) {
                break;
            }
        }

        $upBytes = 0;
        $upFiles = 0;
        $upDir = $this->root . '/uploads';
        if (is_dir($upDir)) {
            $it2 = new RecursiveIteratorIterator(
                new RecursiveDirectoryIterator($upDir, FilesystemIterator::SKIP_DOTS)
            );
            foreach ($it2 as $f) {
                if ($f->isFile()) {
                    $upBytes += (int) $f->getSize();
                    $upFiles++;
                }
                if ($upFiles > 20000) {
                    break;
                }
            }
        }

        return array(
            'bytes'   => $total,
            'files'   => $files,
            'mb'      => round($total / 1048576, 2),
            'uploads' => array('bytes' => $upBytes, 'files' => $upFiles, 'mb' => round($upBytes / 1048576, 2)),
        );
    }
}
