<?php

namespace App\Services\Services;

use App\Http\Requests\CommentRequest;
use App\Models\Comment;
use App\Services\Constructors\CommentConstructor;
use Illuminate\Support\Facades\Log;

class CommentService implements CommentConstructor
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $comments = Comment::with('blog')->paginate(10);
        return inertia('CommentsList', ['comments' => $comments]);
    }

    /**
     * Store a newly created comment in storage.
     *
     * @param CommentRequest $request
     * @param int $blogId
     */
    public function store(CommentRequest $request, $blogId)
    {
        Comment::create(array_merge($request->validated(), ['blog_id' => $blogId]));
        return redirect()->back()->with('success', 'Comment added successfully!');
    }
}
