<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/**
 * @phpstan-ignore-next-line
 */
Route::get('/', [HomeController::class, 'index'])->name('home');

/**
 * @phpstan-ignore-next-line
 */
Route::get('/abouts', function () {
    return inertia('About');
});

/**
 * @phpstan-ignore-next-line
 */
Route::get('/services', function () {
    return inertia('Service');
});

/**
 * @phpstan-ignore-next-line
 */
Route::get('/projects', [ProjectController::class, 'index'])->name('projects.index');

/**
 * @phpstan-ignore-next-line
 */
Route::get('/project/{project}', [ProjectController::class, 'show'])->name('projects.show');

/**
 * @phpstan-ignore-next-line
 */
Route::get('/contacts', function () {
    return inertia('Contact');
});

/**
 * @phpstan-ignore-next-line
 */
Route::get('/blogs', [BlogController::class, 'index'])->name('blogs.index');

/**
 * @phpstan-ignore-next-line
 */
Route::get('/blog/{post}', [BlogController::class, 'show'])->name('blog.show');

require __DIR__.'/auth.php';
