<?php

namespace App\Observers;

use App\Models\Project;
use Illuminate\Support\Str;

class ProjectObserver
{
    /**
     * Handle the Project "creating" event.
     */
    public function creating(Project $project): void
    {
        $project->slug = Str::slug($project->title);
    }

    /**
     * Handle the Project "updating" event.
     */
    public function updating(Project $project): void
    {
        if ($project->isDirty('title')) {
            $project->slug = Str::slug($project->title);
        }
    }
}
