<?php

namespace App\Services\Services;

use App\Models\Service;
use App\Services\Constructors\ServiceConstructor;

class ServiceService implements ServiceConstructor
{
    public function index()
    {
        $services = Service::all();
        return inertia('Service', ['services' => $services]);
    }
}
