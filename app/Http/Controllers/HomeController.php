<?php

namespace App\Http\Controllers;

use App\Services\Facades\HomeFacade;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return HomeFacade::index();
    }
}
