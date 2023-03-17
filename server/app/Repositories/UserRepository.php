<?php
namespace App\Repositories;

use App\Models\User;
use Illuminate\Support\Collection;

class UserRepository extends BaseRepository {

    /**
     * @param User $user
     */
    public function __construct(User $model)
    {
        $this->model = $model;
    }

    /**
     * @param array data
     */
    public function save(array $data)
    {
        return $this->model::query()->create($data);
    }

    public function findByEmailLoginAccess(string $email, array $relation = [])
    {
        return $this->model::withTrashed()->with($relation)->where('email',$email)->first();
    }
}
