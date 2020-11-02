<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Auth;
use Hash;
use Illuminate\Http\Request;
use Validator;


class AuthController extends Controller
{
    /**
     * API Register
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $credentials = $request->only('name', 'surname', 'phoneNumber', 'email', 'password');
        $tokenCredentials = $request->only('email', 'password');

        $rules = [
            'name' => ['required', 'string', 'max:255'],
            'surname' => ['required', 'string', 'max:255'],
            'phoneNumber' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
        ];

        $validator = Validator::make($credentials, $rules);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->messages()], 400);
        }

        $name = $request->name;
        $surname = $request->surname;
        $phoneNumber = $request->phoneNumber;
        $email = $request->email;
        $password = $request->password;

        $user = User::create(['name' => $name, 'surname' => $surname, 'phoneNumber' => $phoneNumber, 'email' => $email, 'password' => Hash::make($password)]);
        $token = $this->guard()->attempt($tokenCredentials);
        return response()->json([
            'data' => [
                'id' => $user->id,
                'name' => $user->name,
                'surname' => $user->surname,
                'phoneNumber' => $user->phoneNumber,
                'email' => $user->email,
            ],
            'message' => 'Thanks for signing up!'
        ])->header('Authorization', $token);
    }

    public function login(Request $request){
        $tokenCredentials = $request->only('email', 'password');
        $user = User::where('email', $request->email)->first();
        $unHashedPassword = Hash::check($request->password, $user->password);
        if (!$unHashedPassword) {
            return response()->json(["message" => 'Password is wrong'], 401);
        }
        $token = $this->guard()->attempt($tokenCredentials);
        return response()->json([
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'surname' => $user->surname,
                'phoneNumber' => $user->phoneNumber,
                'email' => $user->email,
            ],
            'message' => 'Thanks for signing up!'
        ])->header('Authorization', $token);
    }

    /**
     * Logout User
     */
    public function logout()
    {
        $this->guard()->logout();
        return response()->json([
            'status' => 'success',
            'msg' => 'Logged out Successfully.'
        ], 200);
    }

    public function verify(Request $request)
    {
        $token = $request->token;
        $data = $this->guard()->authenticate($token);
        if (!$data) {
            return response()->json(["message" => "Invalid token"], 401);
        } else {
            $refreshToken = $this->guard()->refresh($token);
            $user = [
                "id" => $data->id,
                "email" => $data->email,
                "name" => $data->name,
                "surname" => $data->surname,
                "phoneNumber" => $data->phoneNumber,
            ];
            return response()->json(["user"=>$user])->header('Authorization', $refreshToken);
        }
    }

    public function user(Request $request)
    {
        $user = User::find(Auth::user()->id);
        return response()->json([
            'status' => 'success',
            'data' => $user
        ]);
    }

    public function refresh()
    {
        if ($token = $this->guard()->refresh()) {
            return response()
                ->json(['status' => 'success'], 200)
                ->header('Authorization', $token);
        }
        return response()->json(['error' => 'refresh_token_error'], 401);
    }
    private function guard()
    {
        return Auth::guard();
    }
}
