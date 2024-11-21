<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Admin extends Model implements JWTSubject {
    use HasFactory;

    protected $table = 'admin_accounts';
    protected $primaryKey = 'id';
    protected $fillable = [
        'id',
        'name',
        'email',
        'password',
        'phone',
        'image',
        'birth_date',
        'verify'
    ];

    protected $hidden = [
        'password',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
}
