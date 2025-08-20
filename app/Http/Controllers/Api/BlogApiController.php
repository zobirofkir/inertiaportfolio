<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\BlogRequest;
use App\Http\Resources\BlogApiResource;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BlogApiController extends Controller
{
    public function store(BlogRequest $request) : BlogApiResource
    {
        $validatedData = $request->validated();
        $validatedData['user_id'] = Auth::user()->id;
        
        $blog = Blog::create($validatedData);
        
        return BlogApiResource::make($blog);
    }
}
