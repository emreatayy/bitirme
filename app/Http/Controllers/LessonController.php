<?php

namespace App\Http\Controllers;

use App\Models\Lesson;
use App\Models\UserClass;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Casts\Json;
use App\Models\User;

class LessonController extends Controller
{
    public function index()
    {
        $lessons = Lesson::latest()->filter(request(['search', 'teacher', 'category']))->get();
        $response[]=null;
        $count=0;
        foreach ($lessons as $lesson) {
            $user = $lesson->user;
            $categories = $lesson->categories($lesson);
            $json = Json::encode([
                'lesson' => $lesson,
                'categories' => $categories
            ]);
            $response[$count] = json_decode($json);
            $count++;
        }
        return response($response);
    }
    public function lesson(Lesson $lesson)
    {
        $categories = $lesson->categories($lesson);
        $lectures = $lesson->lectures($lesson);
        return response
        ([
            'categories' => $categories,
            'user' => $lesson->user,
            'lesson' => $lesson,
            'lectures' => $lectures
        ]);
    }

    public function contentLesson(Lesson $lesson, Request $request)
    {
        $user = $request->user();
        $favorites = $user->favorites;
        $control = false;
        if($favorites != null) {
            foreach ($favorites as $favorite) {
                if ($favorite->lessons_id == $lesson->id) {
                    $control = true;
                    break;
                }
            }
            if (!$control) {
                return response(status: 403, content: $lesson->slug);
            }
            else{
                $categories = $lesson->categories($lesson);
                $lectures = $lesson->lectures($lesson);
                return response
                ([
                    'categories' => $categories,
                    'user' => $lesson->user,
                    'lesson' => $lesson,
                    'lectures' => $lectures
                ]);
            }
        }
        else{
            return response(status: 403,content: $lesson->slug);
        }
    }
}
