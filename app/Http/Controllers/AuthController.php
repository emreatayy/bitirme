<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\Lesson;
use App\Models\User;
use Illuminate\Database\Eloquent\Casts\Json;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Ramsey\Collection\Collection;

class AuthController extends Controller
{
    public function signup(SignupRequest $request)
    {
        $data = $request->validated();

        $attribute =
            [
                'email' => $data['email'],
                'name' => $data['name'],
                'surname' => $data['surname'],
                'username' => $data['username'],
                'password' => bcrypt($data['password'])];

        $user = User::create($attribute);
        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        $remember = $credentials['remember'] ?? false;
        unset($credentials['remember']);

        if (!Auth::attempt($credentials, $remember)) {
            return response([
                'error' => 'E-mail veya parolanız hatalı.'
            ], 422);
        }
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function logout()
    {
        $user = Auth::user();

        $user->currentAccessToken()->delete();

        return response([
            'success' => true
        ]);
    }

    public function me(Request $request)
    {
        return $request->user();
    }

    public function MyFavorites(Request $request)
    {
        $user = $request->user();
        $favorites = $user->favorites;
        return $favorites;
    }

    public function MyLessons(Request $request){
        $me = $request->user();
        $favorites = $me->favorites;

        $response = [];
        $count=0;
        foreach ($favorites as $favorite) {
            $lesson = Lesson::where('id', $favorite->lessons_id)->get();
            $user = $lesson[0]->user;
            $categories = $lesson[0]->categories($lesson[0]);
            $json = Json::encode([
                'lesson' => $lesson[0],
                'categories' => $categories
            ]);
            $response[$count] = json_decode($json);
            $count++;
        }
        return response($response);
    }

}
