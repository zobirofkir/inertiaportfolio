<?php

use App\Http\Controllers\Api\BlogApiController;
use App\Http\Controllers\LoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix("auth")->group(function() {
    Route::post('/login', [LoginController::class, 'login']);

    Route::middleware(['auth:api'])->group(function() {
        Route::apiResource("blogs", BlogApiController::class);
    });
});

