<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClickedUser extends Model
{
    use HasFactory;

    protected $fillable = ['deviceType'];
}
