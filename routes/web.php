<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function() {
    return inertia('Home');
});

Route::get('/abouts', function () {
    return inertia('About');
});

require __DIR__.'/auth.php';
