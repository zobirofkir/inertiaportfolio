<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SeoMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);
        
        // Add global SEO data to all Inertia responses
        Inertia::share([
            'seo' => [
                'site_name' => config('app.name', 'Zobir Ofkir'),
                'site_url' => config('app.url'),
                'author' => 'Zobir Ofkir',
                'twitter_handle' => '@zobirofkir',
                'default_image' => asset('images/logo.png'),
                'current_url' => $request->fullUrl(),
            ]
        ]);

        return $response;
    }
}