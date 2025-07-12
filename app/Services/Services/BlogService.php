<?php

namespace App\Services\Services;

use App\Http\Resources\BlogResource;
use App\Http\Resources\CommentResource;
use App\Models\Blog;
use App\Models\Category;
use App\Services\Constructors\BlogConstructor;
use App\Services\SeoService;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class BlogService implements BlogConstructor
{
    /**
     * Get all of the models for the BlogConstructor.
     *
     */
    public function index()
    {
        $blogs = Blog::with('category', 'tags' , 'comments')->paginate(10);
        $categories = Category::orderBy('created_at', 'desc')->get();
        
        $seo = SeoService::generate([
            'title' => 'Blog',
            'description' => 'Explore web development articles and tutorials on Laravel, React, Next.js, and more. Expert insights and practical guides.',
            'keywords' => ['blog', 'web development', 'laravel', 'react', 'tutorials'],
        ]);

        $structuredData = SeoService::generateStructuredData('Blog', [
            'name' => 'Web Development Blog',
            'description' => 'A collection of articles and tutorials on web development.',
            'publisher' => [
                '@type' => 'Organization',
                'name' => config('app.name'),
                'logo' => [
                    '@type' => 'ImageObject',
                    'url' => asset(config('seo.image.default')),
                ],
            ],
        ]);

        return inertia('Blog', [
            'blogs' => $blogs,
            'categories' => $categories,
            'seo' => $seo,
            'structuredData' => $structuredData
        ]);
    }
    /**
     * Show the specified resource.
     *
     * @param $slug
     * @return Blog
     */
    public function show($slug)
    {
        $blog = Blog::with(['comments' => function($query) {
            $query->orderBy('created_at', 'desc');
        }])->where('slug', $slug)->orderBy('created_at', 'desc')->firstOrFail();

        $tags = $blog->tags->pluck('title');
        
        $seo = SeoService::generate([
            'title' => $blog->title,
            'description' => substr(strip_tags($blog->description), 0, 160),
            'keywords' => $tags->toArray(),
            'image' => $blog->image ? asset('storage/' . $blog->image) : null,
            'type' => 'article',
        ]);

        $structuredData = SeoService::generateStructuredData('BlogPosting', [
            'mainEntityOfPage' => [
                '@type' => 'WebPage',
                '@id' => url()->current(),
            ],
            'headline' => $blog->title,
            'description' => substr(strip_tags($blog->description), 0, 160),
            'image' => $blog->image ? asset('storage/' . $blog->image) : asset(config('seo.image.fallback')),
            'author' => [
                '@type' => 'Person',
                'name' => config('seo.author'),
                'url' => url('/'),
            ],
            'publisher' => [
                '@type' => 'Organization',
                'name' => config('app.name'),
                'logo' => [
                    '@type' => 'ImageObject',
                    'url' => asset(config('seo.image.default')),
                ],
            ],
            'datePublished' => $blog->created_at->toIso8601String(),
            'dateModified' => $blog->updated_at->toIso8601String(),
        ]);
        
        $breadcrumbs = SeoService::generateBreadcrumbs([
            ['name' => 'Home', 'url' => url('/')],
            ['name' => 'Blog', 'url' => url('/blogs')],
            ['name' => $blog->title]
        ]);

        return inertia('ShowBlog', [
            'blog' => BlogResource::make($blog),
            'tags' => $tags,
            'comments' => CommentResource::collection($blog->comments),
            'seo' => $seo,
            'structuredData' => $structuredData,
            'breadcrumbs' => $breadcrumbs
        ]);
    }
}
