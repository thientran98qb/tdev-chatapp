<?php
namespace App\Services;

use App\Exceptions\ApiException;
use App\Repositories\UserRepository;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class  UserService {
    /**
     * @var mixed
     */
    private $user;
    /**
     * @var UserRepository
     */
    private UserRepository $userRepository;

    /**
     * @param UserRepository $userRepository
     */
    public function __construct(UserRepository $userRepository)
    {
        $this->user = auth('api')->user();
        $this->userRepository = $userRepository;
    }

    public function login(array $requestData): array
    {
        $email = $requestData['email'];
        $user = $this->userRepository->findByEmailLoginAccess($email);

        if ($user && $user->deleted_at) {
            throw ApiException::badRequest('User has deleted');
        }
        $attempt = Auth::attempt([
            'email' => $email,
            'password' => $requestData['password']
        ]);
        if (!$attempt) {
            throw ApiException::unauthorized('User or email wrong !');
        }

        $user = Auth::user();

        $accessToken = $user->createToken(env('SANCTUM_SECRET'))->accessToken;
        if (!$accessToken) {
            throw ApiException::unauthorized();
        }

        return $this->createNewToken($accessToken);
    }

    public function registerUser(array $requestData): array
    {
        $requestData['password'] = Hash::make($requestData['password']);
        $user = $this->userRepository->save($requestData);

        return [
            'access_token' => $user->createToken(env('SANCTUM_SECRET'))->accessToken,
            'user' => $user
        ];
    }

    /**
     * Get the token array structure.
     *
     * @param string $token
     * @return array
     */
    protected function createNewToken(string $token): array
    {
        return [
            'access_token' => $token,
            'user' => auth()->user()
        ];
    }
}
