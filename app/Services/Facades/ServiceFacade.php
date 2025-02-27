<?php

namespace App\Services\Facades;

use Illuminate\Support\Facades\Facade;

class ServiceFacade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'ServiceService';
    }
}