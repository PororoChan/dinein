<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Muser;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserPage extends Controller
{
    public function index()
    {
        $data = Muser::all();
        return Inertia::render('admin/user/UserPage', [
            'title' => 'User Page | DineIn',
            'link' => 'user/table',
            'column' => $data,
        ]);
    }

    public function editForm($id)
    {
        if ($id != '') {
            $dt = Muser::find($id);
            return $dt;
        }
    }

    public function store(Request $request)
    {
        $res = array();
        $id = $request->id;
        $nama = $request->name;
        $email = $request->email;
        $password = $request->password;
        $confirm = $request->confirm;

        if ($nama != "" && $email != "" && $password != "" && $confirm != "") {
            if ($password == $confirm) {
                $user = new Muser();
                if ($id != "") {
                    $users = Muser::find($id);
                    $users->nickname = $nama;
                    $users->commonname = $nama;
                    $users->email = $email;
                    $users->password = app('hash')->make($password);
                    $users->save();
                    $res = [
                        'success' => 200,
                        'msg' => 'Added New User Data',
                    ];
                } else {
                    $user->nickname = $nama;
                    $user->commonname = $nama;
                    $user->email = $email;
                    $user->password = app('hash')->make($password);

                    $user->save();
                    $res = [
                        'success' => 200,
                        'msg' => 'Added New User Data',
                    ];
                }
            } else {
                $res = [
                    'success' => 500,
                    'msg' => 'Password not match',
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
            $user = Muser::find($id);
            $user->delete();

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
