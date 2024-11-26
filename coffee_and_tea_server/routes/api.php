<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;

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
    Route::get('/get_all_order', [DashboardController::class, 'getAllOrders']);
});

/* API mở, không cần check middleware() */
Route::post('/admin_register', [AuthController::class, 'AdminRegister']);

Route::post('/admin_login', [AuthController::class, 'AdminLogin']);

Route::post('/admin_forgot_password', [AuthController::class, 'AdminForgotPassword']);

// Customer
Route::middleware('auth:api')->group(function () {
    Route::get('/get_all_cus', [CustomerController::class, 'getAllCus']);
    Route::get('/get_all_his', [CustomerController::class, 'getAllHistory']);
    Route::post('/update_cus', [CustomerController::class, 'updateCus']);
});

//Product
Route::middleware('auth:api')->group(function () {
    Route::get('/get_all_prd', [ProductController::class, 'getAllPrd']);
    Route::post('/delete_prd', [ProductController::class, 'deletePrd']);
    Route::post('/update_prd', [ProductController::class, 'updatePrd']);
    Route::post('/add_prd', [ProductController::class, 'addPrd']);
});

//Category

Route::middleware('auth:api')->group(function () {
    Route::get('/get_all_ctg', [CategoryController::class, 'getAllCtg']);
    Route::post('/add_ctg', [CategoryController::class, 'addCtg']);
});
