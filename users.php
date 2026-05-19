<?php

$users = [
    'bloom' => [
        'id' => 1,
        'name' => 'Блум',
        'password_hash' => password_hash('dragonfire', PASSWORD_DEFAULT),
    ],
    'flora' => [
        'id' => 2,
        'name' => 'Флора',
        'password_hash' => password_hash('nature', PASSWORD_DEFAULT),
    ],
    'stella' => [
        'id' => 3,
        'name' => 'Стелла',
        'password_hash' => password_hash('sunlight', PASSWORD_DEFAULT),
    ],
];