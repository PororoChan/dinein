<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\mtag;
use Illuminate\Http\Request;
use Inertia\Inertia;

class Tag extends Controller
{
    public function index()
    {
        $data = mtag::all();
        return Inertia::render('admin/tag/TagPage', [
            'title' => 'Tag Page |  DineIn',
            'link' => 'tag/table',
            'column' => $data,
        ]);
    }

    public function editForm($id)
    {
        if ($id != '') {
            $dt = mtag::find($id);
            return $dt;
        }
    }

    public function store(Request $request)
    {
        $res = array();
        $id = $request->id;
        $nama = $request->name;

        if ($nama != "") {
            $tag = new mtag();
            if ($id != "") {
                $tags = mtag::find($id);
                $tags->name = $nama;
                $tags->save();
                $res = [
                    'success' => 200,
                    'msg' => 'Added New Tag Data',
                ];
            } else {
                $tag->name = $nama;

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
            $tag = mtag::find($id);
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
