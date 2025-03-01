<?php

namespace App\Filament\Widgets\Overview;

use Filament\Widgets\ChartWidget;
use App\Models\Category;
use Carbon\Carbon;

class CategoryChart extends ChartWidget
{
    protected static ?string $heading = 'Category Statistics';

    protected function getData(): array
    {
        $months = collect(range(1, 12))->map(function ($month) {
            return Carbon::create(null, $month, 1)->format('F');
        });

        $categoryCounts = collect(range(1, 12))->map(function ($month) {
            return Category::whereMonth('created_at', $month)
                ->whereYear('created_at', now()->year)
                ->count();
        });

        return [
            'datasets' => [
                [
                    'label' => 'Number of Posts',
                    'data' => $categoryCounts->toArray(),
                    'backgroundColor' => 'rgba(54, 162, 235, 0.5)',
                    'borderColor' => 'rgba(54, 162, 235, 1)',
                    'borderWidth' => 1,
                ],
            ],
            'labels' => $months->toArray(),
        ];
    }

    protected function getType(): string
    {
        return 'bar';
    }
}
