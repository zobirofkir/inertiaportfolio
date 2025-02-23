<?php

namespace App\Services\Facades;

use Illuminate\Support\Facades\Facade;

class CommentFacade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'CommentService';
    }
}