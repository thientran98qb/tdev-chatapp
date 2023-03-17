<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\LoginRequest;
use App\Http\Requests\Api\RegisterRequest;
use App\Http\Resources\AuthResource;
use App\Http\Resources\SuccessResource;
use App\Models\User;
use App\Services\UserService;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
     * @var UserService
     */
    private UserService $userService;

    public function __construct(UserService $userService)
    {
        $this->middleware('auth:api', ['except' => ['login', 'register', 'refresh']]);
        $this->userService = $userService;
    }

    /**
     * Login user
     *
     * @param LoginRequest $request
     * @return AuthResource
     */
    public function login(LoginRequest $request): AuthResource
    {
        $result = $this->userService->login($request->onlyFields());

        return AuthResource::make($result);
    }

    /**
     * Login user
     *
     * @param RegisterRequest $request
     * @return SuccessResource
     */
    public function register(RegisterRequest $request): SuccessResource
    {
        return SuccessResource::make($this->userService->registerUser($request->validated()));
    }
}
