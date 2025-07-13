<?php

namespace App\Observers;

use App\Models\Blog;
use App\Services\LinkedInService;
use Illuminate\Support\Str;

class BlogObserver
{
    protected $linkedInService;

    public function __construct(LinkedInService $linkedInService)
    {
        $this->linkedInService = $linkedInService;
    }

    /**
     * Handle the Blog "created" event.
     */
    public function created(Blog $blog): void
    {
        //
    }

    /**
     * Handle the Blog "creating" event.
     */
    public function creating(Blog $blog): void
    {
        $blog->slug = Str::slug($blog->title);
    }

    /**
     * Handle the Blog "updating" event.
     */
    public function updating(Blog $blog): void
    {
        if ($blog->isDirty('title')) {
            $blog->slug = Str::slug($blog->title);
        }
    }
}
