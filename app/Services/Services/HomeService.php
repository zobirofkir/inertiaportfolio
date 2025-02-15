<?php

namespace App\Services\Services;

use App\Models\Category;
use App\Models\Tag;
use App\Services\Constructors\HomeConstructor;

class HomeService implements HomeConstructor
{
    public function index()
    {
        $categories = Category::all();
        $tags = Tag::pluck('title');
        return inertia('Home', ['categories' => $categories, 'tags' => $tags]);
    }
}
