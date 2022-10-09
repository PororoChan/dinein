<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class mtagme extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'mstagmenu';
    protected $primaryKey = 'idTag';
    protected $fillable = ['idTag', 'idMenu'];
}
