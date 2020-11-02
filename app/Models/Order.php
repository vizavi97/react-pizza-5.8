<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{

    protected $fillable = ['pizzas',"info","amount","user_id"];
    protected $casts = [
      'pizzas' => 'array',
      'info' => 'array'
    ];
}
