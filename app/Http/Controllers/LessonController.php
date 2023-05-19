<?php

namespace App\Http\Controllers;

use App\Models\Lesson;
use Illuminate\Http\Request;

class LessonController extends Controller
{
    public function index()
    {
        $lessons = Lesson::all();
        /*return view('welcome', [
            'lessons' => $lessons
        ]);*/
        return response($lessons);
    }
}
