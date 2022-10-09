<?php

use App\Http\Controllers\admin\Category;
use App\Http\Controllers\admin\HomePage;
use App\Http\Controllers\admin\Menu;
use App\Http\Controllers\admin\Tag;
use App\Http\Controllers\admin\TagM;
use App\Http\Controllers\admin\UserPage;
use App\Http\Controllers\Login\LoginPage as LoginLoginPage;
use App\Http\Controllers\LoginPage;
use App\Http\Controllers\user\Menu as UserMenu;
use App\Models\mtagme;
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
Route::get('admin/logout', [LoginLoginPage::class, 'logout']);
// Auth
Route::post('admin/login/auth', [LoginLoginPage::class, 'auth']);

// Admin - Index Page
Route::get('admin/home', [HomePage::class, 'index']);
Route::get('admin/user', [UserPage::class, 'index']);
Route::get('admin/tag', [Tag::class, 'index']);
Route::get('admin/tags', [TagM::class, 'index']);
Route::get('admin/category', [Category::class, 'index']);
Route::get('admin/menu', [Menu::class, 'index']);

// Admin - Form
// User
Route::get('admin/user/form', [UserPage::class, 'form']);
Route::get('admin/user/edit/{id}', [UserPage::class, 'editForm']);
// Tag
Route::get('admin/tag/edit/{id}', [Tag::class, 'editForm']);
// Category
Route::get('admin/cat/edit/{id}', [Category::class, 'editForm']);
// Menu
Route::get('admin/menu/edit/{id}', [Menu::class, 'editForm']);

// Admin - CRUD
// User
Route::post('admin/user/process', [UserPage::class, 'store']);
Route::delete('admin/user/delete/{id}', [UserPage::class, 'delete']);
// Tag
Route::post('admin/tag/process', [Tag::class, 'store']);
Route::delete('admin/tag/delete/{id}', [Tag::class, 'delete']);
// Tags
Route::post('admin/tags/process', [TagM::class, 'store']);
// Category
Route::post('admin/cat/process', [Category::class, 'store']);
Route::post('admin/cat/seq', [Category::class, 'seq']);
Route::delete('admin/cat/delete/{id}', [Category::class, 'delete']);
// Menu
Route::post('admin/menu/process', [Menu::class, 'store']);
Route::delete('admin/menu/delete/{id}', [Menu::class, 'delete']);

// Front-End
Route::get('menu', [UserMenu::class, 'index']);
Route::get('menu/d/{id}', [UserMenu::class, 'detail']);
Route::post('menu/comment/add', [UserPage::class, 'comment']);

require __DIR__ . '/auth.php';
