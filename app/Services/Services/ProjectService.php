<?php

namespace App\Services\Services;

use App\Models\Project;
use App\Services\Constructors\ProjectConstructor;

class ProjectService implements ProjectConstructor
{
    /**
     * Get all of the models for the ProjectService.
     *
     */
    public function index()
    {
        $projects = Project::orderBy('created_at', 'desc')->paginate(10);
        return inertia('Project', ['projects' => $projects]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param string $slug
     */
    public function show(string $slug)
    {
        $project = Project::where('slug', $slug)->firstOrFail();
        return inertia('ShowProject', ['project' => $project]);
    }
}
