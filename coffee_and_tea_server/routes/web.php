<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/VerifyToken/{email}/{token}/{handle}',
            [AuthController::class, 'VerifyToken'])->name('verify.token');

Route::get('/verify_page', function () {
    return view('verify_page');
})->name('verify.page');
