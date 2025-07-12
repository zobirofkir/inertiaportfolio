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
        
        $seo = SeoService::generate([
            'title' => 'Projects',
            'description' => 'Explore my portfolio of web development projects. View my latest work in React, Laravel, and other modern technologies.',
            'keywords' => ['projects', 'portfolio', 'web development', 'zobir ofkir'],
        ]);

        $structuredData = SeoService::generateStructuredData('CollectionPage', [
            'name' => 'Projects Portfolio',
            'description' => 'A showcase of web development projects by Zobir Ofkir.',
        ]);

        return inertia('Project', [
            'projects' => $projects,
            'seo' => $seo,
            'structuredData' => $structuredData,
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
        
        $seo = SeoService::generate([
            'title' => $project->title,
            'description' => substr(strip_tags($project->description), 0, 160),
            'keywords' => [$project->title, 'project', 'portfolio', 'case study'],
            'image' => $project->image ? asset('storage/' . $project->image) : null,
            'type' => 'article',
        ]);

        $structuredData = SeoService::generateStructuredData('CreativeWork', [
            'name' => $project->title,
            'description' => substr(strip_tags($project->description), 0, 160),
            'image' => $project->image ? asset('storage/' . $project->image) : asset(config('seo.image.fallback')),
            'url' => route('projects.show', $project),
            'author' => [
                '@type' => 'Person',
                'name' => config('seo.author'),
            ],
            'datePublished' => $project->created_at->toIso8601String(),
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
