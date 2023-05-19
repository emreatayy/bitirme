<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Models\UserModel;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(): \Illuminate\Http\JsonResponse
    {
        $users = UserModel::all();
        return response()->json($users);
    }

    public function store(UserStoreRequest $request): \Illuminate\Http\JsonResponse
    {
        $users = new UserModel([
            'email' => $request->input('email'),
            'name' => $request->input('name'),
            'surname' => $request->input('surname'),
            'username' => $request->input('username'),
            'password' => $request->input('password'),
            'role' => $request->input('role'),
        ]);

        $users ->save();
        return response() ->json('User Created');
    }

    public function show($id)
    {
        //
    }


    public function update(Request $request, $id)
    {
        $users = UserModel::find($id);
        $users -> update($request ->all());
        return response()->json('User Created');
    }

    public function destroy($id)
    {
        $users = UserModel::find($id);
        $users->delete();
        return response()->json(' deleted!');
    }
}
