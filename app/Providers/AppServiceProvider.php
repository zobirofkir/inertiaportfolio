<?php

namespace App\Providers;

use App\Models\Blog;
use App\Models\Category;
use App\Models\Tag;
use App\Observers\BlogObserver;
use App\Observers\CategoryObserver;
use App\Observers\TagObserver;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);
        Blog::observe(BlogObserver::class);
        Category::observe(CategoryObserver::class);
        Tag::observe(TagObserver::class);
    }
}
