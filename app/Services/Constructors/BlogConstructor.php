<?php

namespace App\Services\Constructors;

use App\Models\Blog;

interface BlogConstructor
{
    /**
     * Get all of the models for the BlogConstructor.
     *
     */
    public function index();

    /**
     * Show the specified resource.
     *
     * @param $slug
     */
    public function show($slug);
}
