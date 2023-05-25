<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\CategoryClass;
use App\Models\Lesson;
use App\Models\User;
use Illuminate\Database\Eloquent\Casts\Json;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;


class LessonController extends Controller
{
    public function index()
    {
        $lessons = Lesson::latest()->filter(request(['search', 'teacher']))->get();
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
}
