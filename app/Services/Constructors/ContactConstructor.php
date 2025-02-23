<?php

namespace App\Services\Constructors;

use App\Http\Requests\ContactRequest;

interface ContactConstructor
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index();

    /**
     * Store a newly created resource in storage.
     *
     * @param ContactRequest $request
     */
    public function store(ContactRequest $request);
}
