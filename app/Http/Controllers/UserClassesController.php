<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Lesson;
use App\Models\UserClass;
use Illuminate\Http\Request;

class UserClassesController extends Controller
{
    public function index()
    {
        $user_classes = UserClass::all();
        return response($user_classes);
    }
}
