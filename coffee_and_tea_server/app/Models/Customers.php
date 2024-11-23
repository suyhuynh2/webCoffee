<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customers extends Model
{
    use HasFactory;
    protected $table = 'customers';
    protected $primaryKey = 'id';
    protected $fillable = [
        'gender',
        'cus_name',
        'phone',
        'email',
        'birth_date',
        'address',
        'total_price',
        'image',
        'status',
        'verify',
        'created_at',
        'updated_at',
    ];
}
