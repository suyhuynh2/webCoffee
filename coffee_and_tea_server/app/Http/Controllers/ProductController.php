<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;
use Illuminate\Support\Facades\Redis;

class ProductController extends Controller
{
    public function getAllPrd()
    {
        $data = Products::all();
        return response()->json($data);
    }

    public function deletePrd(Request $request)
    {
        Products::destroy($request->input('id'));
        return response()->json(['message' => 'Product deleted successfully']);
    }

    public function updatePrd(Request $request)
    {

        $product = Products::find($request->input('id'));


        try {

            $product->name = $request->input('name');
            $product->category = $request->input('category');
            $product->description = $request->input('description');
            $product->price = $request->input('price');
            $product->quantity = $request->input('quantity');
            $product->image = $request->input('image');

            $product->save();

            return response()->json([
                'message' => 'Cập nhật sản phẩm thành công',
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Có lỗi xảy ra: ' . $e->getMessage()
            ], 500);
        }
    }

    public function addPrd(Request $request)
    {
        Products::create($request->all());
        return response()->json(['message' => 'Thêm sản phẩm thành công'], 200);
    }
}
