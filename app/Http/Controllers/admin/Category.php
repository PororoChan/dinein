<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\mcategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class Category extends Controller
{
    public function index()
    {
        $data = mcategory::orderBy('position')->get();
        return Inertia::render('admin/category/CatPage', [
            'title' => 'Category Page |  DineIn',
            'link' => 'cat/table',
            'column' => $data,
        ]);
    }

    public function editForm($id)
    {
        if ($id != '') {
            $dt = mcategory::find($id);
            return $dt;
        }
    }

    public function store(Request $request)
    {
        $res = array();
        $id = $request->id;
        $nama = $request->name;

        if ($nama != "") {
            $cat = new mcategory();
            if ($id != "") {
                $cats = mcategory::find($id);
                $cats->name = $nama;
                $cats->save();
                $res = [
                    'success' => 200,
                    'msg' => 'Added New Category Data',
                ];
            } else {
                $cat->name = $nama;

                $cat->save();
                $res = [
                    'success' => 200,
                    'msg' => 'Added New Category Data',
                ];
            }
        } else {
            $res = [
                'success' => 500,
                'msg' => 'Data Required',
            ];
        }

        echo json_encode($res);
    }

    public function seq(Request $request)
    {
        $id = $request->id;
        $seq = $request->seq;

        $categ = mcategory::find($id);
        $categ->position = $seq;
        $categ->save();
    }

    public function delete($id)
    {
        $res = array();
        if ($id != '') {
            $tag = mcategory::find($id);
            $tag->delete();

            $res = [
                'success' => 200,
                'msg' => 'Data deleted successfully',
            ];
        } else {
            $res = [
                'success' => 500,
                'msg' => 'Id is not defined',
            ];
        }

        echo json_encode($res);
    }
}
