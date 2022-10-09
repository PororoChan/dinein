<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use App\Models\mcategory;
use App\Models\msmenu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
        // $count = msmenu::
        // $count = DB::raw('select floor(ratingsum / ratingcount) from msmenu where idMenu="' . $id . '"');
        $comment = msmenu::join('mscomments', 'msmenu.idMenu', '=', 'mscomments.idMenu')
            ->join('msuser', 'mscomments.idUser', '=', 'msuser.idUser')
            ->where('mscomments.idMenu', $id)
            ->get(['mscomments.*', 'msuser.nickname as names']);
        $data = msmenu::join('mscategory', 'msmenu.idCategory', '=', 'mscategory.idCategory')
            ->where('msmenu.idMenu', $id)
            ->get(['msmenu.*', 'mscategory.name as catname']);
        return Inertia::render('front/menuDetail', [
            'title' => 'Menu Detail | DineIn',
            'link' => 'detail/table',
            'column' => $data,
            'comment' => $comment,
            // 'count' => $count,
        ]);
    }
}
