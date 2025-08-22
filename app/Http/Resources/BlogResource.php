<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BlogResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     */
    public function toArray(Request $request): array
    {
        $images = is_array($this->images) ? $this->images : json_decode($this->images, true);
        $images = $images ?? [];
        
        $images = array_map(function ($image) {
            $url = is_array($image) ? $image['url'] : $image;
            return filter_var($url, FILTER_VALIDATE_URL) ? $url : asset('storage/' . $url);
        }, $images);

        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'content' => str($this->content)->sanitizeHtml(),
            'image' => $images[0] ?? null,
            'images' => $images,
            'slug' => $this->slug,
            'comments' => CommentResource::collection($this->whenLoaded('comments')),
            'is_published' => $this->is_published,
        ];
    }
}
