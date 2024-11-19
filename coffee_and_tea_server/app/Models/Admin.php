<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    use HasFactory;

    protected $table = 'admin_accounts';
    protected $primaryKey = 'id';
    protected $fillable = [
        'name',
        'email',
        'password',
        'birth_date',
        'phone',
        'image',
        'status',
        'token',
        'created_at',
        'updated_at',
    ];

    protected $hidden = [
        'password',
    ];
}
