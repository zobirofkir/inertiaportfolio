<?php

namespace App\Services\Services;

use App\Models\Category;
use App\Services\Constructors\HomeConstructor;

class HomeService implements HomeConstructor
{
    public function index()
    {
        $categories = Category::all();
        return inertia('Home', ['categories' => $categories]);
    }
}
