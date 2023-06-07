<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\UserController;
use \App\Http\Controllers\CategoryController;
use App\Http\Controllers\UserClassesController;
use \App\Http\Controllers\LectureVideosController;
use \App\Http\Controllers\LectureClassesController;
use \App\Http\Controllers\VideosController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

Route::middleware('auth:sanctum')->group(function (){
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
    Route::get('/users',[AdminController::class, 'index']);
    Route::patch('/user', [AdminController::class, 'patchUser']);
    Route::delete('/user', [AdminController::class, 'deleteUser']);
    Route::get('/lesson/content/{lesson:slug}' , [LessonController::class, 'contentLesson']);
    Route::post('/favorite', [UserController::class, 'favorite']);
    Route::get('/isFavorite/{lesson:slug}', [UserController::class, 'isFavorite']);
    Route::get('/MyFavorites', [AuthController::class, 'MyFavorites']);
    Route::get('/MyLessons' , [AuthController::class, 'MyLessons']);
});

Route::get('/lesson/{lesson:slug}' , [LessonController::class, 'lesson']);
Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);


Route::get('/lessons' , [LessonController::class, 'index']);
Route::get('/teachers' , [UserController::class, 'index']);
Route::get('/lesson/{lesson:slug}' , [LessonController::class, 'lesson']);

