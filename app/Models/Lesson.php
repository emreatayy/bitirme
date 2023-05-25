<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Json;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    use HasFactory;
    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? false, fn($query, $search)=>
        $query->where(fn($query) =>
        $query->where('title', 'like', '%' .$search. '%')
        ->orWhere('excerpt', 'like', '%' .$search. '%'))
        );

        $query->when($filters['teacher'] ?? false, fn($query, $teacher)=>
        $query->whereHas('user' , fn($query) =>
        $query->where('username', $teacher)));
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function categories($lesson){
        $categories = new Collection([]);
        $categoryId = CategoryClass::where('lesson_id', $lesson->id)->pluck('category_id');
        foreach ($categoryId as $category) {
            $categories = $categories->merge(Category::where('id', $category)->get());
        }
        return $categories;
    }
    public function lectures($lesson){
        $response = [];
        $videos = new Collection([]);
        $lectures = LectureClass::where('lesson_id', $lesson->id)->get();
        $count = 0;
        foreach ($lectures as $lecture){
            $videos = new Collection([]);
            $video_id = LectureVideo::where('lecture_id', $lecture->id)->get();
            foreach ($video_id as $video) {
                $videos = $videos->merge(Video::where('id', $video->video_id)->get());
            }
            $json = Json::encode([
                'lecture' => $lecture,
                'videos' => $videos
            ]);
            $response[$count] = json_decode($json);
            $count++;
        }
        return $response;
    }
}
