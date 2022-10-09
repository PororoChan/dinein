<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class mcategory extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'mscategory';
    protected $primaryKey = 'idCategory';
    protected $fillable = ['name', 'position'];
}
