<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class msmenu extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'msmenu';
    protected $primaryKey = 'idMenu';
    protected $fillable = ['idCategory', 'name', 'description', 'price', 'price', 'ratingcount', 'ratingcum'];
}
