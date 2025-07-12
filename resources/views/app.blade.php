<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Zobir Ofkir is a web developer specialized in Laravel and React.js, committed to delivering scalable, user-friendly solutions.">
        <meta name="keywords" content="Zobir Ofkir, Laravel, React.js, Web Development, Full Stack, Task Management, Filament Admin Panel, AI-based Legal Services">
        <meta name="author" content="Zobir Ofkir">
        <meta name="robots" content="index, follow">
        <meta name="googlebot" content="index, follow">
        <meta name="theme-color" content="#3B82F6">
        <meta name="msapplication-TileColor" content="#3B82F6">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="dns-prefetch" href="//fonts.googleapis.com">

        <!-- Open Graph Meta Tags -->
        <meta property="og:type" content="website">
        <meta property="og:title" content="{{ config('app.name', 'ZOBIR') }}">
        <meta property="og:description" content="Zobir Ofkir is a web developer specializing in Laravel and React.js, building innovative solutions for legal services, task management, and more.">
        <meta property="og:image" content="{{ asset('images/logo.png') }}">
        <meta property="og:url" content="{{ url()->current() }}">

        <!-- Twitter Card Meta Tags -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="{{ config('app.name', 'ZOBIR') }}">
        <meta name="twitter:description" content="Zobir Ofkir is a web developer specializing in Laravel and React.js, building innovative solutions for legal services, task management, and more.">
        <meta name="twitter:image" content="{{ asset('images/logo.png') }}">

        <!-- LinkedIn Meta Tags -->
        <meta property="linkedin:title" content="{{ config('app.name', 'ZOBIR') }}">
        <meta property="linkedin:description" content="Zobir Ofkir is a web developer specializing in Laravel and React.js, building innovative solutions for legal services, task management, and more.">
        <meta property="linkedin:image" content="{{ asset('images/logo.png') }}">

        <!-- Facebook Open Graph Meta Tags -->
        <meta property="og:site_name" content="{{ config('app.name', 'ZOBIR') }}">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">

        <!-- Favicon -->
        <link rel="icon" href="{{ asset('images/logo.png') }}" type="image/x-icon">

        <title inertia>{{ config('app.name', 'ZOBIR') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

<!-- Google AdSense -->
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2068612253576714"
     crossorigin="anonymous"></script>
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
