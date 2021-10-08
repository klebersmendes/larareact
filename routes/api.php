<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('products', [App\Http\Controllers\ProductsController::class, 'index'])->name('home');
Route::get('products/save', [App\Http\Controllers\ProductsController::class, 'store'])->name('save');
Route::get('products/delete/{id}', [App\Http\Controllers\ProductsController::class, 'destroy'])->name('delete');
Route::get('products/motherfucker', [App\Http\Controllers\ProductsController::class, 'truncate'])->name('truncate');

Route::get('/test', function () {
    return response()->json(
        [
            'message' => 'Jobs API', 'status' => 'Connected'
        ],[
            'message' => 'Jobs API', 'status' => 'Connected'
        ],
    );
});