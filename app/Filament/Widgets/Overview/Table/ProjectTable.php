<?php

namespace App\Filament\Widgets\Overview;

use App\Models\Project;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class ProjectTable extends BaseWidget
{
    protected int|string|array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                Project::query()
            )
            ->columns([
                ImageColumn::make('image'),
                TextColumn::make('title'),
                TextColumn::make('slug'),
                TextColumn::make('description'),
                TextColumn::make('status'),
                TextColumn::make('created_at'),
                TextColumn::make('updated_at'),
            ]);
    }
}
