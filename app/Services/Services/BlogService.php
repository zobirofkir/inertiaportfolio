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
        
        $seo = SeoService::generateMetaTags([
            'title' => 'Blog | Zobir Ofkir - Web Development Articles & Tutorials',
            'description' => 'Explore web development articles and tutorials on Laravel, React, Next.js, and more by Zobir Ofkir. Expert insights and practical guides.',
            'keywords' => 'web development blog, Laravel tutorials, React articles, programming tips, Zobir Ofkir',
            'type' => 'website'
        ]);
        
        $structuredData = SeoService::generateStructuredData('Blog', [
            'headline' => 'Zobir Ofkir\'s Web Development Blog',
            'description' => 'Web development articles and tutorials',
            'author' => [
                '@type' => 'Person',
                'name' => 'Zobir Ofkir'
            ],
            'publisher' => [
                '@type' => 'Person',
                'name' => 'Zobir Ofkir'
            ]
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
        
        $seo = SeoService::generateMetaTags([
            'title' => $blog->title . ' | Zobir Ofkir\'s Blog',
            'description' => substr(strip_tags($blog->description), 0, 160),
            'keywords' => $blog->title . ', blog, article, web development, Zobir Ofkir' . ($tags->count() ? ', ' . $tags->join(', ') : ''),
            'image' => $blog->image ? asset('storage/' . $blog->image) : asset('images/logo.png'),
            'type' => 'article'
        ]);
        
        $structuredData = SeoService::generateStructuredData('BlogPosting', [
            'headline' => $blog->title,
            'description' => substr(strip_tags($blog->description), 0, 160),
            'image' => $blog->image ? asset('storage/' . $blog->image) : asset('images/logo.png'),
            'datePublished' => $blog->created_at->toISOString(),
            'dateModified' => $blog->updated_at->toISOString(),
            'author' => [
                '@type' => 'Person',
                'name' => 'Zobir Ofkir'
            ],
            'publisher' => [
                '@type' => 'Person',
                'name' => 'Zobir Ofkir'
            ],
            'mainEntityOfPage' => [
                '@type' => 'WebPage',
                '@id' => url()->current()
            ]
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
