<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BlogApiResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "user_id" => $this->user_id,
            "category_id" => $this->category_id,
            "title" => $this->title,
            "description" => $this->description,
            "content" => $this->content,
            "images" => $this->images,
            "is_published" => (bool) $this->is_published,
        ];
    }
}
