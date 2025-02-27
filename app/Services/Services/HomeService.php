<?php

namespace App\Services\Services;

use App\Models\Blog;
use App\Models\Category;
use App\Models\Project;
use App\Models\Service;
use App\Models\Skill;
use App\Models\Tag;
use App\Services\Constructors\HomeConstructor;

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
        return inertia('Home', ['categories' => $categories, 'tags' => $tags, 'blogs' => $blogs, 'projects' => $projects, 'projectsSlider' => $projectsSlider, 'skills' => $skills, 'services' => $services]);
    }
}
