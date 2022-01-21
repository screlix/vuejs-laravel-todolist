<?php

namespace App\Http\Controllers;

use App\Models\User;
use GuzzleHttp\Promise\Create;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class authController extends Controller
{
    public function register(Request $request)
    {
        //validate fields
        $fields = $request->validate([
            "name" => "required|string",
            "email" => "email|unique:users|string|required",
            "password" => "required|string|min:8|max:15|confirmed",
        ]);
        //create the new user with given credentials
        $user = User::create([
            "name" => $fields['name'],
            "email" => $fields['email'],
            "password" => bcrypt($fields['password']),
        ]);
        //session
        Session::put("user_id", "hello");
        ///create token for that user
        $token = $user->createToken('tokenn')->plainTextToken;
        //create http response we will return then
        $response = [
            'user' => $user,
            'token' => $token,
        ];
        return response($response, 201);
    }
    public function logout(Request $request)
    {
        Session::forget("user_id");
        Auth::user()->tokens->each(function ($token, $key) {
            $token->delete();
        });
        return [
            'message' => 'logged out',
        ];
    }
    public function login(Request $request)
    {
        $fields = $request->validate([
            "email" => "email|required|string",
            "password" => "required|string",
        ]);
        $user = User::where('email', $fields['email'])->first();
        if (!$user) {
            return response([
                "message" => "user doesn't exist",
            ], 401);
        } elseif (!Hash::check($fields["password"], $user->password)) {
            return response([
                "message" => "password incorrect",
            ], 401);
        } else {
            $token = $user->createToken('tokenn')->plainTextToken;
            //session
            Session::put("user_id", $user->id);
            return response([
                "user" => $user,
                "token" => $token,
            ], 201);
        }
    }
}
