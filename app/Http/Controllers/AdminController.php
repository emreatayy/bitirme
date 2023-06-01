<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserDeleteRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Models\User;
use Illuminate\Http\Request;


class AdminController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }

    public function patchUser(UserUpdateRequest $userUpdateRequest)
    {
        $data = $userUpdateRequest->validated();
        $user = User::where('id',$userUpdateRequest->id)->first();
        $attribute = [
            'name' => $data['name'],
            'surname' => $data['surname'],
            'username' => $data['username']
        ];
        $user->update($attribute);
        $user->save();
        return response(status: 200,content: "Kullanıcı Güncellendi.");
    }
    Public function deleteUser(UserDeleteRequest $userDeleteRequest){
        $data = $userDeleteRequest->validated();
        User::firstWhere('username', $data['username'])->delete();
        return response(status: 200, content: "Kullanıcı Silindi.");
    }
}
