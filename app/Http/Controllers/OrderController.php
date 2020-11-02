<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Status;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function createOrder(Request $request)
    {
        $factory = new Order();
        try {
            $order = $factory->create($request->toArray());
            $resp = [
                "message" => "Your order has been sent for processing",
                "body" => $order
            ];
            return response()->json($resp, 200, [], JSON_UNESCAPED_UNICODE);
        } catch (ModelNotFoundException $exception) {
            return back()->withError($exception->getMessage())->withInput();
        }
    }
    public function getOrderByUserId(Request $request){
        $id = $request->id;
        $orders = Order::where('user_id',$id)->get();
        foreach($orders as $order){
            $status = Status::where('id', $order->status_id)->first();
            $order->status = $status->name;
        }

        return response()->json($orders);
    }
}
