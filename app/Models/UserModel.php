<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserModel extends Model
{
    protected $table = "users";
    protected $primaryKey = "id";
    protected $fillable = ["email", "name", "surname", "username", "password", "role"];

    use HasFactory;
}
