<?php

use App\Http\Controllers\authController;
use App\Http\Controllers\itemController;
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

// Route::get('/items', [itemController::class, 'index']);
// Route::get('/item/{id}', [itemController::class, 'show']);
// Route::post('item/store', [itemController::class, 'store']);
// Route::put('item/{id}', [itemController::class, 'update']);
// Route::delete('item/{id}', [itemController::class, 'destroy']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post("/logout", [authController::class, 'logout']);
    Route::get('/items', [itemController::class, 'index']);
    Route::prefix("/item")->group(function () {
        //post
        Route::post("/store", [itemController::class, "store"]);
        //put
        Route::put("/{id}", [itemController::class, "update"]);
        //delete
        Route::delete("/{id}", [itemController::class, "destroy"]);
    });
});
Route::post('/login', [authController::class, "login"]);
Route::post('/register', [authController::class, 'register']);
