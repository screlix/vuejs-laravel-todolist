<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class item extends Model
{
    use HasFactory;
    protected $table = "items";
    protected $primarykey = "id";
    protected $guarded = [];
    public $timestamps = false;
}
