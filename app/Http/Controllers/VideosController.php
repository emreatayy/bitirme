<?php

namespace App\Http\Controllers;

use App\Models\Video;

class VideosController extends Controller
{
    public function index()
    {
        $videos = Video::all();
        return response($videos);
    }
}
