<?php

namespace App\Http\Controllers;

use App\Services\Facades\BlogFacade;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        return BlogFacade::index();
    }

    /**
     * Show the specified resource.
     *
     * @param $slug
     */
    public function show($slug)
    {
        return BlogFacade::show($slug);
    }
}
