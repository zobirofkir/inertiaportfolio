<?php

namespace App\Filament\Widgets;

use App\Models\Blog;
use App\Models\Category;
use App\Models\Project;
use App\Models\Tag;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class OverviewWidget extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Blogs', Blog::count())
                ->description('Nomber of Blogs')
                ->color('success')
                ->icon('heroicon-o-folder'),

            Stat::make('Category', Category::count())
                ->description('Nomber of Categories')
                ->color('success')
                ->icon('heroicon-o-cube'),

            Stat::make('Projects', Project::count())
                ->description('Nomber of Projects')
                ->color('success')
                ->icon('heroicon-o-command-line'),

            Stat::make('Tags', Tag::count())
                ->description('Nomber of Tags')
                ->color('success')
                ->icon('heroicon-o-tag'),

        ];
    }
}
