<?php

namespace App\Services\Services;

use App\Http\Resources\BlogResource;
use App\Models\Blog;
use App\Models\Category;
use App\Services\Constructors\BlogConstructor;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class BlogService implements BlogConstructor
{
    /**
     * Get all of the models for the BlogConstructor.
     *
     */
    public function index()
    {
        $blogs = Blog::with('category', 'tags')->paginate(10);
        $categories = Category::orderBy('created_at', 'desc')->get();
        return inertia('Blog', ['blogs' => $blogs, 'categories' => $categories]);
    }
    /**
     * Show the specified resource.
     *
     * @param $slug
     * @return Blog
     */
    public function show($slug)
    {
        $blog = Blog::where('slug', $slug)->first();
        $tags = $blog->tags->pluck('title');
        return inertia('ShowBlog', ['blog' => BlogResource::make($blog), 'tags' => $tags]);
    }
}
