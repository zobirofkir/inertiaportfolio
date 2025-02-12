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

Route::get('/services', function () {
    return inertia('Service');
});

Route::get('/projects', function() {
    return inertia('Project');
});

require __DIR__.'/auth.php';
