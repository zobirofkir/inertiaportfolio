<?php

namespace App\Services\Constructors;

interface ProjectConstructor
{
    /**
     * Get all of the models for the ProjectConstructor.
     *
     */
    public function index();

    /**
     * Show the specified resource.
     *
     * @param string $slug
     */
    public function show(string $slug);
}
