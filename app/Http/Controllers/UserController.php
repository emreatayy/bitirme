<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserUpdateRequest;
use App\Models\Lesson;
use App\Models\User;
use App\Models\UserClass;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    public function index(){
        $users = User::latest()->filter(request(['search']))->get();
        return $users;
    }
    public function favorite(Request $request){
        $user_id = $request->user()->id;
        $data = $request->validate([
            'slug' => ['required',
                Rule::exists('lessons', 'slug')]
        ]);
        $lesson_id = Lesson::where('slug', $data['slug'])->pluck('id');
        $favorites = UserClass::where('user_id', $user_id)->get();
        if($favorites != null){
            foreach ($favorites as $favorite){
                if($favorite->lessons_id == $lesson_id[0]){
                    $favorite->delete();
                    return response(status: 200, content: "Deleted");
                }
            }
        }
        UserClass::create([
            'user_id' => $user_id,
            'lessons_id' => $lesson_id[0]
        ]);
        return response(status: 200, content: "Added");
    }

    public function isFavorite(Lesson $lesson,Request $request){
        $user = $request->user();
        $bool[0] = UserClass::where('lessons_id','=',$lesson->id)
            ->where('user_id', '=',$user->id)->first();

        if($bool[0] != null){
            return response(content: "true");
        }else{
            return response(content: "false");
        }
    }
}
