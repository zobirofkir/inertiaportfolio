<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BlogResource\Pages;
use App\Filament\Resources\BlogResource\RelationManagers;
use App\Models\Blog;
use App\Services\LinkedInService;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Actions\Action;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Facades\Auth;

class BlogResource extends Resource
{
    protected static ?string $model = Blog::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationGroup = 'Blogs';

    protected static ?string $navigationLabel = 'Blogs';

    protected static ?string $pluralLabel = 'Blogs';

    protected static ?string $navigation = 'Blogs';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('title')
                    ->required()
                    ->unique(ignoreRecord: true),
                Textarea::make('description')->required(),
                RichEditor::make('content')->required(),
                FileUpload::make('images')->multiple()->image()->required(),
                Select::make('category_id')->relationship('category', 'title')->required(),
                Select::make('is_published')->options([true => 'Published', false => 'Unpublished'])->required(),
                Select::make('tags')->relationship('tags', 'title')->multiple()->required(),
                Hidden::make('user_id')->default(Auth::user()->id),
            ])->columns(1);
    }

    public static function table(Table $table): Table
    {
        return $table
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
            ->defaultSort('created_at', 'desc')
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Action::make('Post to LinkedIn')
                    ->action(function (Blog $record) {
                        //
                    })
                    ->requiresConfirmation()
                    ->color('success')
                    ->icon('heroicon-o-arrow-up-on-square'),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListBlogs::route('/'),
            'create' => Pages\CreateBlog::route('/create'),
            'edit' => Pages\EditBlog::route('/{record}/edit'),
        ];
    }
}
