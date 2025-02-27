<?php

namespace App\Http\Controllers;

use App\Services\Facades\ServiceFacade;
use Illuminate\Http\Request;

class ServiceConstroller extends Controller
{
    public function index()
    {
        return ServiceFacade::index();
    }
}
