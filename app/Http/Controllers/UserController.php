<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserUpdateRequest;
use App\Models\Lesson;
use App\Models\UserClass;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
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
}
