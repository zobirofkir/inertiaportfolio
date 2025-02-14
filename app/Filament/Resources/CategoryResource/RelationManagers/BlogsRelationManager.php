<?php

namespace App\Filament\Resources\CategoryResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Facades\Auth;

class BlogsRelationManager extends RelationManager
{
    protected static string $relationship = 'blogs';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('title')->required()->unique(ignoreRecord: true),
                Textarea::make('description')->required(),
                RichEditor::make('content')->required(),
                FileUpload::make('images')->multiple()->image()->required(),
                Select::make('category_id')->relationship('category', 'title')->required(),
                Select::make('is_published')->options([true => 'Published', false => 'Unpublished'])->required(),
                Select::make('tags')->relationship('tags', 'title')->multiple()->required(),
                Hidden::make('user_id')->default(Auth::user()->id),
            ])->columns(1);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('title')
            ->columns([
                ImageColumn::make('images')->label('Image')->getStateUsing(fn ($record) => $record->images[0] ?? null),
                TextColumn::make('title')->searchable(),
                TextColumn::make('category.title')->searchable(),
                TextColumn::make('is_published')
                    ->badge()
                    ->colors([
                        'success' => fn ($state) => $state,
                        'danger' => fn ($state) => !$state,
                    ])
                    ->formatStateUsing(fn ($state) => $state ? 'Published' : 'Unpublished'),
                TextColumn::make('created_at')->dateTime(),
            ])
            ->filters([
                //
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }
}
