<?php

use App\Http\Controllers\admin\HomePage;
use App\Http\Controllers\Login\LoginPage as LoginLoginPage;
use App\Http\Controllers\LoginPage;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Login Page
Route::get('admin/login', [LoginLoginPage::class, 'index']);
// Auth
Route::post('admin/login/auth', [LoginLoginPage::class, 'auth']);

// Admin - Index Page
Route::get('admin/a/home', [HomePage::class, 'index']);

require __DIR__ . '/auth.php';
