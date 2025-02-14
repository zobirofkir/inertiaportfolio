<?php

namespace App\Observers;

use App\Models\Blog;
use Illuminate\Support\Str;

class BlogObserver
{
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
