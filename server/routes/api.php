<?php

use App\Http\Controllers\Api\AuthController;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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

Route::group(['middleware' => "auth:api"], function() {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::get('/messages', function() {
        return Message::query()->with('user')->get();
    });
    Route::post('/messages', function() {
        $user = Auth::user();

        $message = new App\Models\Message();
        $message->message = request()->get('message', '');
        $message->user_id = $user->id;
        $message->save();

        return ['message' => $message->load('user')];
    });
});
Route::post("/login", [AuthController::class, 'login'])->name('api.login');
Route::post("/register", [AuthController::class, 'register'])->name('api.register');
