<?php
/**
 * 4R BET | router.php
 * ------------------------------------------------------------------
 * PHP built-in server (`php -S ... router.php`) ke liye - Wasmer Edge
 * ka PHP runner isi tarah app chalata hai.
 *
 * Rule: agar request koi real static file hai to false return karo
 * (server khud serve karega), warna sab kuch front controller ko do.
 */

$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';

/* security: dotfiles / internals kabhi serve na ho */
if (preg_match('#(^|/)\.#', $path) || stripos($path, '/src/') !== false || stripos($path, '/tools/') !== false) {
    http_response_code(404);
    header('Content-Type: application/json');
    echo json_encode(array('ok' => false, 'error' => 'not found'));
    return true;
}

$file = __DIR__ . $path;
if ($path !== '/' && is_file($file)) {
    return false;   /* built-in server static file serve kar dega */
}

require __DIR__ . '/index.php';
