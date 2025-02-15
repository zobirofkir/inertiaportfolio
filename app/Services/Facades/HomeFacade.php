<?php

namespace App\Services\Facades;

use Illuminate\Support\Facades\Facade;

class HomeFacade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'HomeService';
    }
}