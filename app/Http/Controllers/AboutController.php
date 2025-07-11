<?php

namespace App\Http\Controllers;

use App\Services\SeoService;

class AboutController extends Controller
{
    public function index()
    {
        $seo = SeoService::generateMetaTags([
            'title' => 'About Zobir Ofkir - Web Developer & Designer | Portfolio',
            'description' => 'Learn about Zobir Ofkir, a passionate web developer specializing in Laravel, React.js, Next.js, and Tailwind CSS. Discover my skills, experience, and projects.',
            'keywords' => 'Zobir Ofkir, web developer, React developer, Laravel developer, portfolio, frontend developer, full-stack developer',
            'type' => 'website'
        ]);
        
        $structuredData = SeoService::generateStructuredData('Person', [
            'name' => 'Zobir Ofkir',
            'url' => url('/'),
            'jobTitle' => 'Web Developer',
            'description' => 'Passionate web developer specializing in Laravel, React.js, Next.js, and Tailwind CSS',
            'sameAs' => [
                'https://github.com/zobirofkir',
                'https://www.linkedin.com/in/zobir-ofkir'
            ]
        ]);
        
        return inertia('About', [
            'seo' => $seo,
            'structuredData' => $structuredData
        ]);
    }
}