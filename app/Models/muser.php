<?php

namespace App\Models;

use Illuminate\Auth\Events\Authenticated;
use Illuminate\Auth\Middleware\Authenticate;
use Illuminate\Foundation\Auth\User as Authenticable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class muser extends Authenticable
{
    use HasFactory;

    protected $table = 'msuser';
    public $timestamps = false;
}
