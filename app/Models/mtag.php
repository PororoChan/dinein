<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class mtag extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'mstag';
    protected $primaryKey = 'idTag';
    protected $fillable = ['name'];
}
