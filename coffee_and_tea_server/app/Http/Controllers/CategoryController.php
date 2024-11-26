<?php

namespace App\Http\Controllers;

use App\Models\Categories;

use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getAllCtg()
    {
        $data = Categories::all();
        return response()->json($data);
    }

    public function addCtg(Request $request)
    {
        if (Categories::where('category', $request->input('category'))->exists()) {
            return response()->json(['message' => 'Danh mục đã tồn tại'], 400);
        } else {
            Categories::create(['category' => $request->input('category')]);
            return response()->json(['message' => 'Thêm danh mục thành công'], 200);
        }
    }
}
