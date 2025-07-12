<?php

namespace App\Services;

class SeoService
{
    public static function generate(array $data = []): array
    {
        $seoData = self::prepareData($data);

        if (config('seo.log_seo_data')) {
            \Illuminate\Support\Facades\Log::info('SEO Data:', $seoData);
        }

        return $seoData;
    }

public static function generateMetaTags(array $data = []): array
    {
        return self::generate($data);
    }
    protected static function prepareData(array $data): array
    {
        $defaults = self::getDefaults();
        $pageData = self::getPageSpecificData($data);

        return array_merge($defaults, $pageData);
    }

    protected static function getDefaults(): array
    {
        return [
            'title' => config('seo.title.default', 'Zobir Ofkir'),
            'description' => config('seo.description.default', ''),
            'keywords' => implode(', ', config('seo.keywords.default', [])),
            'author' => config('seo.author', ''),
            'image' => asset(config('seo.image.default', '')),
            'url' => url()->current(),
            'type' => 'website',
            'site_name' => config('app.name'),
            'twitter_handle' => config('seo.twitter_handle', ''),
        ];
    }

    protected static function getPageSpecificData(array $data): array
    {
        $title = $data['title'] ?? null;
        if ($title && $title !== config('seo.title.default')) {
            $data['title'] = $title . config('seo.title.separator', ' | ') . config('seo.title.default');
        }

        if (!empty($data['keywords']) && is_array($data['keywords'])) {
            $data['keywords'] = implode(', ', $data['keywords']);
        }

        return $data;
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
        return self::generateStructuredData('BreadcrumbList', [
            'itemListElement' => collect($items)->map(function ($item, $index) {
                return [
                    '@type' => 'ListItem',
                    'position' => $index + 1,
                    'name' => $item['name'],
                    'item' => $item['url'] ?? null,
                ];
            })->toArray(),
        ]);
    }
}