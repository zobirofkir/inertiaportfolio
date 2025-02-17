<?php

namespace App\Filament\Widgets\Table;

use App\Models\Blog;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class BlogTable extends BaseWidget
{
    protected int|string|array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                Blog::query()
            )
            ->columns([
                TextColumn::make('title')->searchable(),
                TextColumn::make('category.title'),
                TextColumn::make('tags')->getStateUsing(fn($record) => implode(', ', $record->tags->pluck('title')->toArray())),
                TextColumn::make('user.name'),
                TextColumn::make('created_at')->dateTime(),
            ]);
    }
}
