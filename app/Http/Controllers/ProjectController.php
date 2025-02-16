<?php

namespace App\Http\Controllers;

use App\Services\Facades\ProjectFacade;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        return ProjectFacade::index();
    }

    /**
     * Show the specified resource.
     *
     * @param string $slug
     */
    public function show($slug)
    {
        return ProjectFacade::show($slug);
    }
}
