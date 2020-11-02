<?php

namespace App\Http\Controllers;

use App\Models\Pizza;
use Illuminate\Http\Request;

class PizzaController extends Controller
{
    public function getAllPizzas() {
        return Pizza::all();
    }
    public function getPizzaById($id) {
        return Pizza::whereId($id)->first();
    }
}
