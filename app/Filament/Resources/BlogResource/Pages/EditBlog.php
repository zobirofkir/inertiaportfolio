<?php

namespace App\Filament\Resources\BlogResource\Pages;

use App\Filament\Resources\BlogResource;
use Filament\Actions;
use App\Services\LinkedInService;
use Filament\Resources\Pages\EditRecord;
use Illuminate\Database\Eloquent\Model;
 
class EditBlog extends EditRecord
{
    protected static string $resource = BlogResource::class;
 
    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
 
    protected function afterSave(): void
    {
        //
    }
}
