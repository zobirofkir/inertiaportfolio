<?php

namespace App\Http\Controllers;

use App\Services\Facades\HomeFacade;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Get all of the models for the HomeController.
     *
     */
    public function index()
    {
        return HomeFacade::index();
    }
}
