<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SeoMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        // Share global SEO data with Inertia
        Inertia::share([
            'seo' => [
                'site_name' => config('app.name'),
                'site_url' => config('app.url'),
                'author' => config('seo.author'),
                'twitter_handle' => config('seo.twitter_handle'),
                'default_image' => asset(config('seo.image.default')),
                'current_url' => $request->fullUrl(),
                'social' => config('seo.social'),
            ]
        ]);

        return $next($request);
    }
}