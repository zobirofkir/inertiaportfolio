<?php

namespace App\Services\Constructors;

use App\Http\Requests\CommentRequest;

interface CommentConstructor
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index();

    /**
     * Store a newly created resource in storage.
     *
     * @param CommentRequest $request
     */
    public function store(CommentRequest $request, $blogId);
}
