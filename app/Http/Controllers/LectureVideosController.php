<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\LectureVideo;
use Illuminate\Http\Request;

class LectureVideosController extends Controller
{
    public function index()
    {
        $lecture_videos = LectureVideo::all();
        return response($lecture_videos);
    }
}
