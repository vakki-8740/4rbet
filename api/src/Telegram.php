<?php
/**
 * 4R BET | Telegram.php
 * ------------------------------------------------------------------
 * Telegram alert ab SERVER se jaata hai (curl) - bot token browser me
 * nahi. Ye purane js/telegram.js ka replacement hai.
 *
 * - settings.json se botToken/chatId
 * - bhejne me fail ho to telegram-queue.json me save, agle request par retry
 * - complaint ka message format wahi rakha hai jo pehle tha (field order)
 */

declare(strict_types=1);

final class Telegram
{
    const QUEUE_FILE = 'telegram-queue.json';
    const QUEUE_CAP  = 300;
    const MAX_RETRY  = 3;
    const TIMEOUT    = 8;   /* seconds */

    /** @var JsonStore */
    private $s;
    /** @var Repo */
    private $repo;
    /** @var array */
    private $cfg;

    public function __construct(JsonStore $store, Repo $repo)
    {
        $this->s    = $store;
        $this->repo = $repo;
        $cfg        = $repo->getSettings();
        $this->cfg  = isset($cfg['telegram']) ? $cfg['telegram'] : array();
    }

    public function enabled()
    {
        return !empty($this->cfg['enabled'])
            && isset($this->cfg['botToken']) && V::str($this->cfg['botToken'], 200) !== ''
            && isset($this->cfg['chatId'])   && V::str($this->cfg['chatId'], 60) !== '';
    }

    public function status()
    {
        return array(
            'enabled'  => (bool) $this->enabled(),
            'botSet'   => isset($this->cfg['botToken']) && $this->cfg['botToken'] !== '',
            'chatSet'  => isset($this->cfg['chatId']) && $this->cfg['chatId'] !== '',
            'queueLen' => count($this->queue()),
            'note'     => 'alerts server (curl) se bhejte hain - token browser me expose nahi hota',
        );
    }

    /* ---------- complaint alert ---------- */

    public function notifyComplaint(array $rec)
    {
        $text = self::formatComplaint($rec);
        return $this->send($text);
    }

    public static function formatComplaint(array $rec)
    {
        $cat  = isset($rec['category']) ? $rec['category'] : 'Complaint';
        $id   = isset($rec['id']) ? $rec['id'] : '';
        $data = isset($rec['data']) && is_array($rec['data']) ? $rec['data'] : array();

        $lines = array();
        $lines[] = "New Complaint - 4R BET";
        $lines[] = "Category: " . $cat;
        $lines[] = "ID: " . $id;
        $lines[] = "At: " . (isset($rec['createdAt']) ? $rec['createdAt'] : '');
        $lines[] = "";

        foreach (Repo::$FIELD_ORDER as $key => $label) {
            if (array_key_exists($key, $data) && $data[$key] !== '') {
                $lines[] = $label . ": " . $data[$key];
            }
        }

        if (isset($rec['images']) && is_array($rec['images']) && $rec['images']) {
            $lines[] = "";
            $lines[] = "Attachments: " . count($rec['images']);
        }

        return implode("\n", $lines);
    }

    /** Chat ka naya user message admin ke Telegram par bhejna ho to. */
    public function notifyMessage($chatId, $who, $text, $authorName = '')
    {
        if ($who !== 'user') {
            return array('sent' => false, 'skipped' => true);
        }
        $body = "New chat message - 4R BET\n"
              . "Chat: " . $chatId . "\n"
              . "User: " . ($authorName !== '' ? $authorName : '-') . "\n"
              . "Message: " . ($text !== '' ? $text : '(attachment)');

        return $this->send($body);
    }

    /* ---------- send ---------- */

    /**
     * @return array{sent:bool,skipped?:bool,status?:int,error?:string,queued?:bool}
     */
    public function send($text)
    {
        $text = V::str($text, 3500);
        if (!$this->enabled()) {
            return array('sent' => false, 'skipped' => true, 'error' => 'telegram disabled / config missing');
        }

        $res = $this->post($text);
        if (!empty($res['sent'])) {
            return $res;
        }

        /* fail -> queue (agle request par retry) */
        $this->enqueue($text);
        $res['queued'] = true;
        return $res;
    }

    private function post($text)
    {
        if (!function_exists('curl_init')) {
            return array('sent' => false, 'error' => 'curl extension nahi hai');
        }

        $token = $this->cfg['botToken'];
        $chat  = $this->cfg['chatId'];
        $url   = 'https://api.telegram.org/bot' . rawurlencode($token) . '/sendMessage';

        $payload = array(
            'chat_id'                  => $chat,
            'text'                     => $text,
            'disable_web_page_preview' => true,
        );

        $ch = curl_init($url);
        curl_setopt_array($ch, array(
            CURLOPT_POST           => true,
            CURLOPT_POSTFIELDS     => json_encode($payload, JSON_UNESCAPED_UNICODE),
            CURLOPT_HTTPHEADER     => array('Content-Type: application/json'),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT        => self::TIMEOUT,
            CURLOPT_CONNECTTIMEOUT => 5,
        ));

        $body   = curl_exec($ch);
        $status = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $err    = curl_error($ch);
        curl_close($ch);

        if ($status >= 200 && $status < 300) {
            $j = json_decode(is_string($body) ? $body : '', true);
            if (is_array($j) && isset($j['ok']) && $j['ok'] === true) {
                return array('sent' => true, 'status' => $status);
            }
            return array('sent' => false, 'status' => $status,
                         'error' => is_array($j) && isset($j['description']) ? $j['description'] : 'telegram ne ok nahi bheja');
        }

        return array('sent' => false, 'status' => $status, 'error' => $err !== '' ? $err : ('http ' . $status));
    }

    /* ---------- queue + retry ---------- */

    private function queue()
    {
        $q = $this->s->read(self::QUEUE_FILE, array());
        return is_array($q) ? $q : array();
    }

    private function enqueue($text)
    {
        $now = $this->s->now();

        $this->s->transaction(self::QUEUE_FILE, function ($q) use ($text, $now) {
            if (!is_array($q)) {
                $q = array();
            }
            $q[] = array('text' => $text, 'at' => $now, 'tries' => 1);
            if (count($q) > self::QUEUE_CAP) {
                $q = array_slice($q, -self::QUEUE_CAP);
            }
            return $q;
        }, array());
    }

    /**
     * Purane failed alerts dobara bhej do. Har request par max $batch.
     * @return array{tried:int,sent:int,left:int}
     */
    public function flush($batch = 5)
    {
        if (!$this->enabled()) {
            return array('tried' => 0, 'sent' => 0, 'left' => count($this->queue()));
        }

        $q = $this->queue();
        if (!$q) {
            return array('tried' => 0, 'sent' => 0, 'left' => 0);
        }

        $tried = 0;
        $sent  = 0;
        $left  = array();

        foreach ($q as $item) {
            if (!is_array($item) || !isset($item['text'])) {
                continue;
            }

            if ($tried >= $batch) {
                $left[] = $item;
                continue;
            }

            $tried++;
            $res = $this->post((string) $item['text']);
            if (!empty($res['sent'])) {
                $sent++;
                continue;
            }

            $item['tries'] = (isset($item['tries']) ? (int) $item['tries'] : 0) + 1;
            if ($item['tries'] <= self::MAX_RETRY) {
                $left[] = $item;
            }
        }

        $this->s->write(self::QUEUE_FILE, $left);

        return array('tried' => $tried, 'sent' => $sent, 'left' => count($left));
    }

    /** Bot settings theek hain? (getMe se verify) */
    public function test()
    {
        if (!isset($this->cfg['botToken']) || $this->cfg['botToken'] === '') {
            return array('ok' => false, 'error' => 'bot token set nahi hai');
        }
        if (!function_exists('curl_init')) {
            return array('ok' => false, 'error' => 'curl extension nahi hai');
        }

        $url = 'https://api.telegram.org/bot' . rawurlencode($this->cfg['botToken']) . '/getMe';
        $ch = curl_init($url);
        curl_setopt_array($ch, array(
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT        => self::TIMEOUT,
            CURLOPT_CONNECTTIMEOUT => 5,
        ));
        $body   = curl_exec($ch);
        $status = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $err    = curl_error($ch);
        curl_close($ch);

        $j = json_decode(is_string($body) ? $body : '', true);
        if (is_array($j) && isset($j['ok']) && $j['ok'] === true) {
            $res = isset($j['result']) && is_array($j['result']) ? $j['result'] : array();
            return array('ok' => true, 'status' => $status, 'bot' => array(
                'username' => isset($res['username']) ? $res['username'] : '',
                'name'     => isset($res['first_name']) ? $res['first_name'] : '',
            ));
        }

        return array('ok' => false, 'status' => $status,
                     'error' => is_array($j) && isset($j['description']) ? $j['description'] : ($err !== '' ? $err : 'http ' . $status));
    }
}
