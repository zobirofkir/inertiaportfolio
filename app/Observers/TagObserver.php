<?php

namespace App\Observers;

use App\Models\Tag;
use Illuminate\Support\Str;

class TagObserver
{
    /**
     * Handle the Tag "creating" event.
     */
    public function creating(Tag $tag): void
    {
        $tag->slug = Str::slug($tag->title);
    }

    /**
     * Handle the Tag "updating" event.
     */
    public function updating(Tag $tag): void
    {
        if ($tag->isDirty('title')) {
            $tag->slug = Str::slug($tag->title);
        }
    }
}
