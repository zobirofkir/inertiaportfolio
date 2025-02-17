<?php

namespace App\Filament\Widgets\Overview;

use App\Models\Tag;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class TagTable extends BaseWidget
{
    protected int|string|array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                Tag::query()
            )
            ->columns([
                TextColumn::make('title')->searchable(),
                TextColumn::make('created_at')->dateTime(),
            ]);
    }
}
