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
        
        $seo = SeoService::generate([
            'title' => 'Services',
            'description' => 'Professional web development services including frontend development, backend development, UI/UX design, and more.',
            'keywords' => ['services', 'web development', 'frontend', 'backend', 'ui/ux'],
        ]);

        $structuredData = SeoService::generateStructuredData('Service', [
            'serviceType' => 'Web Development',
            'provider' => [
                '@type' => 'Organization',
                'name' => config('app.name'),
            ],
            'description' => 'A range of web development services to build modern and efficient applications.',
            'hasOfferCatalog' => [
                '@type' => 'OfferCatalog',
                'name' => 'Web Development Services',
                'itemListElement' => $services->map(function ($service) {
                    return [
                        '@type' => 'Offer',
                        'itemOffered' => [
                            '@type' => 'Service',
                            'name' => $service->title,
                            'description' => $service->description,
                        ],
                    ];
                })->toArray(),
            ],
        ]);

        return inertia('Service', [
            'services' => $services,
            'seo' => $seo,
            'structuredData' => $structuredData,
        ]);
    }
}
