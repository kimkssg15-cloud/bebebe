<?php
session_start();

$login = $_SESSION['login'] ?? 'unknown';
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$time = date('Y-m-d H:i:s');

$file = __DIR__ . '/logs/auth.log';

$line = "$time | ip=$ip | login=$login | action=LOGOUT";
file_put_contents($file, $line . PHP_EOL, FILE_APPEND);

session_unset();
session_destroy();

header('Location: index.php');
exit;