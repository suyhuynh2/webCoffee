<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class History extends Model
{
    use HasFactory;

    protected $table = 'history_buy';
    protected $primaryKey = 'id';
    protected $fillable = [
        'prd_name',
        'qty',
        'phone',
        'total_price',
        'status',
        'created_at',
        'updated_at',
    ];
}