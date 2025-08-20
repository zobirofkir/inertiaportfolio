<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\BlogRequest;
use App\Http\Resources\BlogApiResource;
use App\Models\Blog;
use Illuminate\Http\Request;

class BlogApiController extends Controller
{
    public function store(BlogRequest $request) : BlogApiResource
    {
        return BlogApiResource::make(
            Blog::create($request->validated())
        );
    }
}
