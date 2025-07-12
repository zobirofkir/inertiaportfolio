<?php

namespace App\Services\Services;

use App\Models\Blog;
use App\Models\Category;
use App\Models\Project;
use App\Models\Service;
use App\Models\Skill;
use App\Models\Tag;
use App\Services\Constructors\HomeConstructor;
use App\Services\SeoService;

class HomeService implements HomeConstructor
{
    /**
     * Get all of the models for the HomeService.
     *
     */
    public function index()
    {
        $categories = Category::latest()->take(20)->get();
        $tags = Tag::pluck('title')->take(20);
        $blogs = Blog::latest()->with('category', 'tags')->take(16)->get();
        $projects = Project::latest()->get();
        $projectsSlider = Project::latest()->get();
        $skills = Skill::latest()->get();
        $services = Service::latest()->get();
        
        $seo = SeoService::generate([
            'title' => 'Home',
            'description' => 'Welcome to the portfolio of Zobir Ofkir, a passionate web developer. Explore my projects, blog, and services.',
            'keywords' => ['home', 'portfolio', 'web developer', 'Zobir Ofkir'],
        ]);

        $structuredData = SeoService::generateStructuredData('WebSite', [
            'url' => config('app.url'),
            'name' => config('app.name'),
            'description' => config('seo.description.default'),
            'author' => [
                '@type' => 'Person',
                'name' => config('seo.author'),
                'url' => config('app.url'),
            ],
            'publisher' => [
                '@type' => 'Organization',
                'name' => config('app.name'),
                'logo' => [
                    '@type' => 'ImageObject',
                    'url' => asset(config('seo.image.default')),
                ],
            ],
        ]);

        return inertia('Home', [
            'categories' => $categories,
            'tags' => $tags,
            'blogs' => $blogs,
            'projects' => $projects,
            'projectsSlider' => $projectsSlider,
            'skills' => $skills,
            'services' => $services,
            'seo' => $seo,
            'structuredData' => $structuredData,
        ]);
    }
}
