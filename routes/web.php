<?php
use App\Http\Controllers\AuthController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\CategoryController;
use \App\Http\Controllers\UserClassesController;
use \App\Http\Controllers\LectureVideosController;
use \App\Http\Controllers\LectureClassesController;
use App\Http\Controllers\VideosController;
use Illuminate\Support\Facades\Route;

Route::get('/lessons' , [LessonController::class, 'index']);
Route::get('/lesson/{lesson:slug}' , [LessonController::class, 'lesson']);
Route::get('/' , [AuthController::class, 'me']);
Route::get('/categories' , [CategoryController::class, 'index']);
Route::get('/user_classes' , [UserClassesController::class, 'index']);
Route::get('/lecture_videos' , [LectureVideosController::class, 'index']);
Route::get('/lecture_classes' , [LectureClassesController::class, 'index']);
Route::get('/videos' , [VideosController::class, 'index']);
