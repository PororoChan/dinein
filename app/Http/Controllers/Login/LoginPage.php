<?php

namespace App\Http\Controllers\Login;

use App\Http\Controllers\Controller;
use App\Models\muser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;
use Msuser;

class LoginPage extends Controller
{
    public function index()
    {
        return Inertia::render('admin/LoginPage', [
            'title' => 'Login | DineIn',
            'urls' => 'login/auth',
        ]);
    }

    public function auth(Request $request)
    {
        $data = array(
            'email' => $request->email,
            'password' => $request->password,
        );

        if (Auth::attempt($data)) {
            return response('Login Success', 200);
        } else {
            return response('Failed to Login', 500);
        }
    }
}
