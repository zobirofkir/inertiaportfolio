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
        
        $seo = SeoService::generateMetaTags([
            'title' => 'Zobir Ofkir | Web Developer & Designer Portfolio',
            'description' => 'Portfolio of Zobir Ofkir, a professional web developer specializing in Laravel, React.js, and modern web technologies. View my projects, services, and skills.',
            'keywords' => 'Zobir Ofkir, web developer, portfolio, React developer, Laravel developer, web design, frontend developer',
            'type' => 'website'
        ]);
        
        $structuredData = SeoService::generateStructuredData('Person', [
            'name' => 'Zobir Ofkir',
            'url' => url('/'),
            'jobTitle' => 'Web Developer',
            'sameAs' => [
                'https://github.com/zobirofkir',
                'https://www.linkedin.com/in/zobir-ofkir'
            ]
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
            'structuredData' => $structuredData
        ]);
    }
}
