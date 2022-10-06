<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Muser extends Authenticatable
{
    use HasFactory, Notifiable;

    public $timestamps = false;
    protected $table = 'msuser';
    protected $primaryKey = 'idUser';
    protected $fillable = ['nickname', 'email', 'password', 'commonname'];

    public function getAuthPassword()
    {
        return $this->password;
    }
}
