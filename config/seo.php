<?php

return [
    'title' => [
        'default' => 'Zobir Ofkir | Web Developer & Designer',
        'separator' => ' | ',
    ],
    'description' => [
        'default' => 'Professional web developer specializing in Laravel, React.js, and modern web technologies.',
    ],
    'keywords' => [
        'default' => ['Zobir Ofkir', 'web developer', 'Laravel', 'React', 'portfolio'],
    ],
    'author' => 'Zobir Ofkir',
    'twitter_handle' => '@zobirofkir',
    'social' => [
        'facebook' => 'https://www.facebook.com/zobir.ofkir',
        'twitter' => 'https://twitter.com/zobirofkir',
        'linkedin' => 'https://www.linkedin.com/in/zobir-ofkir-a4a7b31b3/',
        'github' => 'https://github.com/zobirofkir',
    ],
    'image' => [
        'default' => 'images/logo.png',
        'fallback' => 'images/logo.png',
    ],
    'sitemap' => [
        'enabled' => true,
        'route' => '/sitemap.xml',
    ],
    'log_seo_data' => env('LOG_SEO_DATA', false),
];