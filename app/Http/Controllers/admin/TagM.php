<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\msmenu;
use App\Models\mtag;
use App\Models\mtagme;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TagM extends Controller
{
    public function index()
    {
        $data = mtagme::all();
        return Inertia::render('admin/tagmenu/TagPage', [
            'title' => 'Menu Tag |  DineIn',
            'link' => 'tagmenu/table',
            'column' => $data,
            'menu' => msmenu::all(),
            'tags' => mtag::all(),
        ]);
    }

    public function editForm($id)
    {
        if ($id != '') {
            $dt = mtagme::find($id);
            return $dt;
        }
    }

    public function store(Request $request)
    {
        $res = array();
        $id = $request->id;
        $tag = $request->tag;
        $menu = $request->menu;

        if ($menu != "" && $tag != "") {
            $tag = new mtagme();
            if ($id != "") {
                $tags = mtagme::find($id);
                $tags->idTag = $tag;
                $tags->idMenu = $menu;
                $tags->save();
                $res = [
                    'success' => 200,
                    'msg' => 'Added New Tag Data',
                ];
            } else {
                $tag->idTag = $tag;
                $tag->idMenu = $menu;

                $tag->save();
                $res = [
                    'success' => 200,
                    'msg' => 'Added New Tag Data',
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

    public function delete($id)
    {
        $res = array();
        if ($id != '') {
            $tag = mtagme::find($id);
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
