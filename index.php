<?php
session_start();

if (isset($_SESSION['user_id'])) {
    header('Location: dashboard.php');
    exit;
}

$error = $_GET['error'] ?? '';
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Клуб Винкс — Авторизация</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>

<nav>
    <ul>
        <li><a href="index.php">Вход</a></li>
        <li><a href="../winx_club_site/index.html">Сайт Винкс</a></li>
        <li><a href="../winx_club_site/catalog.html">Каталог</a></li>
    </ul>
</nav>

<hr>

<h1>Вход в Магикс</h1>

<p>
Практическая работа №5.
Авторизация пользователей для сайта «Клуб Винкс».
</p>

<div class="auth-box">

<?php if ($error === 'invalid'): ?>
    <p class="error">Неверный логин или пароль.</p>
<?php endif; ?>

<form method="POST" action="auth.php">

    <label>
        Логин:
        <br>
        <input type="text" name="login">
    </label>

    <br><br>

    <label>
        Пароль:
        <br>
        <input type="password" name="password">
    </label>

    <br><br>

    <button type="submit">Войти</button>

</form>

</div>

<hr>

<footer>
    <p>&copy; 2026 Клуб Винкс</p>
</footer>

</body>
</html>