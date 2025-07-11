<?php

namespace App\Services\Services;

use App\Models\Service;
use App\Services\Constructors\ServiceConstructor;
use App\Services\SeoService;

class ServiceService implements ServiceConstructor
{
    public function index()
    {
        $services = Service::all();
        
        $seo = SeoService::generateMetaTags([
            'title' => 'Web Development Services | Zobir Ofkir - Professional Solutions',
            'description' => 'Professional web development services including frontend development, backend development, UI/UX design, and more. Learn how I can help with your next project.',
            'keywords' => 'web development services, frontend development, backend development, UI/UX design, Zobir Ofkir, web services',
            'type' => 'website'
        ]);
        
        $structuredData = SeoService::generateStructuredData('ItemList', [
            'itemListElement' => $services->map(function ($service, $index) {
                return [
                    '@type' => 'Service',
                    'position' => $index + 1,
                    'name' => $service->title,
                    'description' => $service->description,
                    'provider' => [
                        '@type' => 'Person',
                        'name' => 'Zobir Ofkir'
                    ]
                ];
            })->toArray()
        ]);
        
        return inertia('Service', [
            'services' => $services,
            'seo' => $seo,
            'structuredData' => $structuredData
        ]);
    }
}
