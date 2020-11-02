<?php
/**
 * Web Routes
 * Here is where you can register web routes for your application.
 * These | routes are loaded by the RouteServiceProvider within a group which
 *  contains the "web" middleware group. Now create something great!
 **/


//Auth::routes();
Route::prefix('/api')->group(function () {
    Route::prefix('/pizza')->group(function () {
        Route::get('/', 'PizzaController@getAllPizzas');
    });
    Route::prefix('/currency')->group(function () {
        Route::get('/', "CurrencyController@getAllCurrency");
    });
    Route::prefix('/orders')->group(function () {
        Route::post('/', "OrderController@createOrder");
        Route::post('/user', "OrderController@getOrderByUserId");
    });
    Route::prefix('/auth')->group(function () {
        Route::post('/register', "Auth\AuthController@register");
        Route::post('/login', "Auth\AuthController@login");
        Route::post('/verify', "Auth\AuthController@verify");
    });
    Route::middleware('auth:api')->group(function () {
        Route::get('/user', 'Auth\AuthController@user');
        Route::post('/logout', 'Auth\AuthController@logout');
    });
});
Route::view('/{path?}', 'app');
