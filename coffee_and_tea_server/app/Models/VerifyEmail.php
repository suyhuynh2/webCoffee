<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VerifyEmail extends Model
{
    use HasFactory;

    protected $table = 'verify_email';
    protected $primaryKey = 'id';

    protected $fillable = [
        'email',
        'token',
        'expires_at'
    ];
}
