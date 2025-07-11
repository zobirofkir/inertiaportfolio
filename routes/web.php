<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ServiceConstroller;
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
Route::get('/abouts', [\App\Http\Controllers\AboutController::class, 'index'])->name('about');

/**
 * @phpstan-ignore-next-line
 */
Route::get('/services', [ServiceConstroller::class, 'index'])->name('services.index');

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
Route::get('/contacts', [ContactController::class, 'index'])->name('contacts.index');

/**
 * @phpstan-ignore-next-line
 */
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

/**
 * @phpstan-ignore-next-line
 */
Route::get('/blogs', [BlogController::class, 'index'])->name('blogs.index');

/**
 * @phpstan-ignore-next-line
 */
Route::get('/blog/{post}', [BlogController::class, 'show'])->name('blog.show');

/**
 * @phpstan-ignore-next-line
 */
Route::post('/blog/{id}/comment', [CommentController::class, 'store'])->name('blog.comment.store');

/**
 * @phpstan-ignore-next-line
 */
Route::get('/sitemap.xml', [\App\Http\Controllers\SitemapController::class, 'index'])->name('sitemap');

require __DIR__.'/auth.php';
