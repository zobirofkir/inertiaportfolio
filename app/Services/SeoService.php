<?php

namespace App\Services;

class SeoService
{
    public static function generateMetaTags(array $data): array
    {
        $defaults = [
            'title' => 'Zobir Ofkir | Web Developer & Designer',
            'description' => 'Professional web developer specializing in Laravel, React.js, and modern web technologies.',
            'keywords' => 'Zobir Ofkir, web developer, Laravel, React, portfolio',
            'image' => asset('images/logo.png'),
            'url' => url()->current(),
            'type' => 'website',
            'author' => 'Zobir Ofkir',
        ];

        return array_merge($defaults, $data);
    }

    public static function generateStructuredData(string $type, array $data): array
    {
        $base = [
            '@context' => 'https://schema.org',
            '@type' => $type,
        ];

        return array_merge($base, $data);
    }

    public static function generateBreadcrumbs(array $items): array
    {
        return [
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => collect($items)->map(function ($item, $index) {
                return [
                    '@type' => 'ListItem',
                    'position' => $index + 1,
                    'name' => $item['name'],
                    'item' => $item['url'] ?? null,
                ];
            })->toArray()
        ];
    }
}