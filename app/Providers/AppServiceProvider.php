<?php

namespace App\Providers;

use App\Models\Blog;
use App\Models\Category;
use App\Models\Project;
use App\Models\Tag;
use App\Observers\BlogObserver;
use App\Observers\CategoryObserver;
use App\Observers\ProjectObserver;
use App\Observers\TagObserver;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Laravel\Passport\Passport;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        Passport::ignoreRoutes();
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
        Project::observe(ProjectObserver::class);
    }
}
