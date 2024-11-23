<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DashboardController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Ném tất cả API vào middleware auth:api
Route::middleware('auth:api')->group(function () {
    Route::get('/get_all_product', [DashboardController::class, 'getAllProduct']);
    Route::get('/get_all_revenue', [DashboardController::class, 'getAllRevenue']);
});

/* API mở, không cần check middleware() */
Route::post('/admin_register', [AuthController::class, 'AdminRegister']);

Route::post('/admin_login', [AuthController::class, 'AdminLogin']);

Route::post('/admin_forgot_password', [AuthController::class, 'AdminForgotPassword']);

// thằng này của tài thì phải => middleware()
Route::get('/get_all_cus', [CustomerController::class, 'getAllData']);

