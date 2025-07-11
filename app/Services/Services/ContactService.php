<?php

namespace App\Services\Services;

use App\Http\Requests\ContactRequest;
use App\Mail\ContactMail;
use App\Models\Contact;
use App\Services\Constructors\ContactConstructor;
use App\Services\SeoService;
use Illuminate\Support\Facades\Mail;

class ContactService implements ContactConstructor
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        $seo = SeoService::generateMetaTags([
            'title' => 'Contact Zobir Ofkir | Web Developer & Designer',
            'description' => 'Get in touch with Zobir Ofkir, web developer and designer. Contact me for project inquiries, collaborations, or questions about web development services.',
            'keywords' => 'contact, Zobir Ofkir, web developer, hire developer, web development services, contact form',
            'type' => 'website'
        ]);
        
        $structuredData = SeoService::generateStructuredData('Person', [
            'name' => 'Zobir Ofkir',
            'url' => url('/'),
            'email' => 'contact@zobirofkir.com',
            'telephone' => '+212 619920942',
            'address' => [
                '@type' => 'PostalAddress',
                'addressLocality' => 'Imouzzer Kandar Ain Soltane'
            ]
        ]);
        
        return inertia('Contact', [
            'seo' => $seo,
            'structuredData' => $structuredData
        ]);
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
