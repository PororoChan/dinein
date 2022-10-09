<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\mcategory;
use App\Models\msmenu;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Mscategory;

class Menu extends Controller
{
    public function index()
    {
        $data = msmenu::join('mscategory', 'msmenu.idCategory', '=', 'mscategory.idCategory')
            ->get(['msmenu.*', 'mscategory.name as catname']);
        return Inertia::render('admin/menu/MenuPage', [
            'title' => 'Menu Page |  DineIn',
            'link' => 'menu/table',
            'column' => $data,
            'categ' => mcategory::all(),
        ]);
    }

    public function editForm($id)
    {
        if ($id != '') {
            $dt = msmenu::find($id);
            return $dt;
        }
    }

    public function store(Request $request)
    {
        $res = array();
        $id = $request->id;
        $category = $request->category;
        $nama = $request->name;
        $description = $request->descriptions;
        $price = $request->price;

        if ($nama != "" && $category != "" && $description != "" && $price != "") {
            $menu = new msmenu();
            if ($id != "") {
                $menus = msmenu::find($id);
                $menus->idCategory = $category;
                $menus->name = $nama;
                $menus->description = $description;
                $menus->price = $price;
                $menus->save();
                $res = [
                    'success' => 200,
                    'msg' => 'Added New Menu Data',
                ];
            } else {
                $menu->idCategory = $category;
                $menu->name = $nama;
                $menu->description = $description;
                $menu->price = $price;

                $menu->save();
                $res = [
                    'success' => 200,
                    'msg' => 'Added New Menu Data',
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
            $tag = msmenu::find($id);
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
