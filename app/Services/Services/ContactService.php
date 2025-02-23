<?php

namespace App\Services\Services;

use App\Http\Requests\ContactRequest;
use App\Models\Contact;
use App\Services\Constructors\ContactConstructor;

class ContactService implements ContactConstructor
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        return inertia('Contact');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ContactRequest $request
     */
    public function store(ContactRequest $request)
    {
        Contact::create($request->validated());
        return redirect()->back()->with('success', 'Message sent successfully!');
    }
}
