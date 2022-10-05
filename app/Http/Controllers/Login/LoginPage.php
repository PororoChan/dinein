<?php

namespace App\Http\Controllers\Login;

use App\Http\Controllers\Controller;
use App\Models\muser;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Msuser;

class LoginPage extends Controller
{
    public function index()
    {
        return Inertia::render('admin/LoginPage', [
            'title' => 'Login | DineIn',
        ]);
    }
}
