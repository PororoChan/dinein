<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use App\Models\mcategory;
use App\Models\msmenu;
use Illuminate\Http\Request;
use Inertia\Inertia;

class Menu extends Controller
{
    public function index()
    {
        $data = msmenu::join('mscategory', 'msmenu.idCategory', '=', 'mscategory.idCategory')
            ->get(['msmenu.*', 'mscategory.name as catname']);
        return Inertia::render('front/Menu', [
            'title' => 'Menu Page |  DineIn',
            'link' => 'menu/table',
            'column' => $data,
            'categ' => mcategory::all(),
        ]);
    }

    public function detail($id)
    {
        $data = msmenu::join('mscategory', 'msmenu.idCategory', '=', 'mscategory.idCategory')
            ->where('msmenu.idMenu', $id)
            ->get(['msmenu.*', 'mscategory.name as catname']);
        return Inertia::render('front/menuDetail', [
            'title' => 'Menu Detail | DineIn',
            'link' => 'detail/table',
            'column' => $data,
        ]);
    }
}
