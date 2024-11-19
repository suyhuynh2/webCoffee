<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use App\Valid\AuthValid;
use Exception;
use App\Security\CryptAES;

class AuthController extends Controller
{
    // Admin register API
    public function AdminRegister(Request $request)
    {
        try {
            $name = CryptAES::decryptAES($request->input('name'));
            $email = CryptAES::decryptAES($request->input('email'));
            $phone = CryptAES::decryptAES($request->input('phone'));

            if (!$name || !$email || !$phone) {
                return response()->json([
                    'message' => 'Dữ liệu giải hóa không hợp lệ'
                ], 400);
            }

            if (Admin::where('email', $email)->exists()) {
                return response()->json([
                    'message' => 'Email đã tồn tại'
                ], 400);
            }

            Admin::create([
                'name' => $name,
                'email' => $email,
                'password' => $request->input('password'),
                'phone' => $phone,
                'image' => asset('admins/avt-dep.jpg')
            ]);

            return response()->json([
                'message' => 'Đăng ký thành công',
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Registration failed: ' . $e->getMessage()
            ], 400);
        }
    }

    public function AdminLogin(Request $request)
    {
        $admin = Admin::where('email', $request->email)->first();
        if (!$admin) {
            return response()->json([
                'message' => 'Email không khớp',
            ], 404);
        } else {
            if ($request->password === $admin->password && $admin->status === 1) {
                return response()->json([
                    'message' => 'Đăng nhập thành công',
                ], 200);
            } else if ($request->password != $admin->password) {
                return response()->json([
                    'message' => 'Sai mật khẩu',
                ], 401);
            } else if ($admin->status != 1) {
                return response()->json([
                    'message' => 'Tài khoản chưa được kích hoạt',
                ], 401);
            }
        }
    }


    public function active($admin, $token)
    {
        $admin = Admin::where('email', $admin)->first();

        if ($admin) {
            if ($admin->token === $token && $admin->status === 0) {
                // Activate the account
                $admin->status = 1;
                $admin->token = '';
                $admin->save();

                return response()->json([
                    'message' => 'Tài khoản đã được kích hoạt',
                ], 200);
            } else {
                return response()->json([
                    'message' => 'Token không hợp lệ hoặc tài khoản đã được kích hoạt.',
                ], 400);
            }
        } else {
            return response()->json([
                'message' => 'Email không tồn tại.',
            ], 404);
        }
    }
}
