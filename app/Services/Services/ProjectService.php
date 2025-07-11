<?php

namespace App\Services\Services;

use App\Models\Project;
use App\Services\Constructors\ProjectConstructor;
use App\Services\SeoService;

class ProjectService implements ProjectConstructor
{
    /**
     * Get all of the models for the ProjectService.
     *
     */
    public function index()
    {
        $projects = Project::orderBy('created_at', 'desc')->paginate(10);
        
        $seo = SeoService::generateMetaTags([
            'title' => 'Projects Portfolio | Zobir Ofkir - Web Development Showcase',
            'description' => 'Explore my portfolio of web development projects. View my latest work in React, Laravel, and other modern technologies.',
            'keywords' => 'web development projects, portfolio, Zobir Ofkir, React projects, Laravel projects, web design portfolio',
            'type' => 'website'
        ]);
        
        $structuredData = SeoService::generateStructuredData('CollectionPage', [
            'headline' => 'Zobir Ofkir\'s Project Portfolio',
            'description' => 'Web development projects showcase',
            'author' => [
                '@type' => 'Person',
                'name' => 'Zobir Ofkir'
            ]
        ]);
        
        return inertia('Project', [
            'projects' => $projects,
            'seo' => $seo,
            'structuredData' => $structuredData
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param string $slug
     */
    public function show(string $slug)
    {
        $project = Project::where('slug', $slug)->firstOrFail();
        
        $seo = SeoService::generateMetaTags([
            'title' => $project->title . ' | Zobir Ofkir\'s Portfolio',
            'description' => substr(strip_tags($project->description), 0, 160),
            'keywords' => $project->title . ', web development, portfolio project, Zobir Ofkir, case study',
            'image' => $project->image ? (str_starts_with($project->image, '/storage/') ? asset($project->image) : asset('storage/' . $project->image)) : asset('images/logo.png'),
            'type' => 'article'
        ]);
        
        $structuredData = SeoService::generateStructuredData('CreativeWork', [
            'name' => $project->title,
            'description' => $project->description,
            'image' => $project->image ? (str_starts_with($project->image, '/storage/') ? asset($project->image) : asset('storage/' . $project->image)) : asset('images/logo.png'),
            'url' => $project->link,
            'author' => [
                '@type' => 'Person',
                'name' => 'Zobir Ofkir'
            ]
        ]);
        
        $breadcrumbs = SeoService::generateBreadcrumbs([
            ['name' => 'Home', 'url' => url('/')],
            ['name' => 'Projects', 'url' => url('/projects')],
            ['name' => $project->title]
        ]);
        
        return inertia('ShowProject', [
            'project' => $project,
            'seo' => $seo,
            'structuredData' => $structuredData,
            'breadcrumbs' => $breadcrumbs
        ]);
    }
}
