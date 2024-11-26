<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customers;
use App\Models\History;
use App\Valid\AuthValid;

class CustomerController extends Controller
{

    public function getAllCus()
    {
        $data = Customers::all();
        return response()->json($data);
    }


    public function getAllHistory()
    {
        $data = History::all();
        return response()->json($data);
    }


    public function updateCus(Request $request)
    {
        $authValid = new AuthValid();

        $customer = Customers::find($request->input('id'));

        if (!$customer) {
            return response()->json([
                'message' => 'Khách hàng không tồn tại'
            ], 404);
        }

        if ($authValid->emailExists($request->input('email'))) {
            return response()->json([
                'message' => 'Email đã tồn tại trong hệ thống'
            ], 400);
        }

        try {

            $customer->cus_name = $request->input('cus_name');
            $customer->gender = $request->input('gender');
            $customer->phone = $request->input('phone');
            $customer->email = $request->input('email');
            $customer->birth_date = $request->input('birth_date');
            $customer->created_at = $request->input('created_at');
            $customer->address = $request->input('address');
            $customer->balance = $request->input('balance');
            $customer->status = $request->input('status');
            $customer->image = $request->input('image');


            $customer->save();

            return response()->json([
                'message' => 'Cập nhật khách hàng thành công',
                'data' => $customer
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Có lỗi xảy ra: ' . $e->getMessage()
            ], 500);
        }
    }
}
