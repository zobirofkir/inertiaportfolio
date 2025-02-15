<?php

namespace App\Services\Services;

use App\Models\Blog;
use App\Models\Category;
use App\Models\Tag;
use App\Services\Constructors\HomeConstructor;

class HomeService implements HomeConstructor
{
    public function index()
    {
        $categories = Category::all();
        $tags = Tag::pluck('title');
        $blogs = Blog::latest()->with('category', 'tags')->take(16)->get();
        return inertia('Home', ['categories' => $categories, 'tags' => $tags, 'blogs' => $blogs]);
    }
}
