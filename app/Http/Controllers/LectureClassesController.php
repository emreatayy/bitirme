<?php

namespace App\Http\Controllers;


use App\Models\LectureClass;


class LectureClassesController extends Controller
{
    public function index()
    {
        $lecture_classes = LectureClass::all();
        return response($lecture_classes);
    }
}
