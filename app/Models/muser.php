<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class muser extends Model
{
    use HasFactory;

    protected $table = 'msuser';
    public $timestamps = false;
    protected $primaryKey = 'idUser';
    protected $fillable = ['nickname', 'email', 'password', 'commonname'];
}
