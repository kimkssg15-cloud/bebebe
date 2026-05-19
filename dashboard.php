<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header('Location: index.php?error=auth_required');
    exit;
}

$name = $_SESSION['name'] ?? $_SESSION['login'];
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Клуб Винкс — Личный кабинет</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<nav>
    <ul>
        <li><a href="dashboard.php">Личный кабинет</a></li>
        <li><a href="../winx_club_site/index.html">Сайт Винкс</a></li>
        <li><a href="../winx_club_site/catalog.html">Каталог</a></li>
        <li><a href="logout.php">Выйти</a></li>
    </ul>
</nav>

<hr>

<h1>Добро пожаловать в Алфею, <?= htmlspecialchars($name) ?>!</h1>

<p class="success">
    Авторизация выполнена успешно. Пользователь получил доступ к защищённой странице.
</p>

<p>
    Эта страница является закрытой частью сайта «Клуб Винкс».
    Она доступна только после успешного входа в систему.
</p>

<p>
    В ходе работы была создана сессия PHP, в которую записаны данные авторизованного пользователя.
</p>

<hr>

<footer>
    <p>&copy; 2026 Клуб Винкс. Практическая работа №5.</p>
</footer>

</body>
</html>