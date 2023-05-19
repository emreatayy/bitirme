<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

Route::middleware('auth:sanctum')->group(function (){
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
});

Route::middleware('')->group(function (){

});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/home' , [LessonController::class, 'index']);


Route::get('/users',[USerController::class, 'index']);
Route::post('/save',[UserController::class, 'store']);
Route::put('/update/{id}',[UserController::class, 'update']);
Route::delete('/delete/{id}',[UserController::class, 'destroy']);



