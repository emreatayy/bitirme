<?php

namespace App\Models;

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
}
