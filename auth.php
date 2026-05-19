<?php
session_start();
require_once 'users.php';

$login = trim($_POST['login'] ?? '');
$password = trim($_POST['password'] ?? '');

$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$time = date('Y-m-d H:i:s');

$dir = __DIR__ . '/logs';
$file = $dir . '/auth.log';

if (!is_dir($dir)) {
    mkdir($dir, 0755, true);
}

if ($login === '' || $password === '') {
    header('Location: index.php?error=empty');
    exit;
}

if (!isset($users[$login])) {
    $line = "$time | ip=$ip | login=$login | action=FAIL_LOGIN_NO_USER";
    file_put_contents($file, $line . PHP_EOL, FILE_APPEND);

    header('Location: index.php?error=invalid');
    exit;
}

if (password_verify($password, $users[$login]['password_hash'])) {
    $_SESSION['user_id'] = $users[$login]['id'];
    $_SESSION['login'] = $login;
    $_SESSION['name'] = $users[$login]['name'];

    $line = "$time | ip=$ip | login=$login | action=SUCCESS_LOGIN";
    file_put_contents($file, $line . PHP_EOL, FILE_APPEND);

    header('Location: dashboard.php');
    exit;
}

$line = "$time | ip=$ip | login=$login | action=FAIL_LOGIN";
file_put_contents($file, $line . PHP_EOL, FILE_APPEND);

header('Location: index.php?error=invalid');
exit;