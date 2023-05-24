<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\LessonController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
Route::get('/lessons' , [LessonController::class, 'index']);
Route::get('/lesson/{lesson:slug}' , [LessonController::class, 'lesson']);
Route::get('/' , [AuthController::class, 'me']);
