<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customers;

class CustomerController extends Controller
{
    public function getAllData()
    {
        $data = Customers::all();
        return response()->json($data);
    }
}
