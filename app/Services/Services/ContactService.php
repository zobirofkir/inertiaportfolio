<?php

namespace App\Services\Services;

use App\Http\Requests\ContactRequest;
use App\Mail\ContactMail;
use App\Models\Contact;
use App\Services\Constructors\ContactConstructor;
use Illuminate\Support\Facades\Mail;

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
        Mail::to('contact@zobirofkir.com')->send(new ContactMail($request->validated()));

        if (request()->expectsJson()) {
            return response()->json(['message' => 'Message sent successfully!'], 201);
        }

        return redirect()->back()->with('success', 'Message sent successfully!');
    }
}
