<?php

namespace App\Http\Controllers;

use App\Models\Inventory;
use App\Models\Orders;
use App\Models\Products;
use App\Models\Revenue;

class DashboardController extends Controller {

    public function getAllProduct() {
        try {
            $products = Products::all();

            if ($products->isEmpty())
                return response()->json([
                    'products' => []
                ], 200);

            return response()->json([
                'products' => $products
            ], 200);
        }catch (\Exception $e) {
            return response()->json([
                'message' => 'Message: ' . $e->getMessage()
            ], 500);
        }
    }

    public function getAllRevenue() {
        try {
            $revenues = Revenue::all();
            if ($revenues) {
                return response()->json([
                    'revenues' => $revenues
                ], 200);
            }
        }catch (\Exception $e) {
            return response()->json([
                'message' => 'Message: ' . $e->getMessage()
            ], 500);
        }
    }

    public function getAllOrders() {
        try {
            $orders = Orders::all();
            if ($orders) {
                return response()->json([
                    'orders' => $orders
                ], 200);
            }
        }catch (\Exception $e) {
            return response()->json([
                'message' => 'Message: ' .$e->getMessage()
            ]);
        }
    }

}
