<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Services\Facades\ContactFacade;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        return ContactFacade::index();
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param ContactRequest $request
     */
    public function store(ContactRequest $request)
    {
        return ContactFacade::store($request);
    }
}
