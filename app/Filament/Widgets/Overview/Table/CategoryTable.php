<?php

namespace App\Filament\Widgets\Overview\Table;

use App\Models\Category;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class CategoryTable extends BaseWidget
{
    protected int|string|array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                Category::query()
            )
            ->columns([
                TextColumn::make('title')->searchable(),
                TextColumn::make('created_at')->dateTime(),
            ]);
    }
}
