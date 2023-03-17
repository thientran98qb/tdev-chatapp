<?php

namespace App\Http\Resources;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use JsonSerializable;

class ErrorResource extends Resource
{
    /**
     * @param int $code
     * @param string $message
     * @param null $errors
     * @param null $resource
     */
    public function __construct(int $code, string $message = 'Bad request', $errors = null, $resource = null)
    {
        parent::__construct($resource, new MetaResource($code, $message, $errors));
    }

    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array|Arrayable|JsonSerializable
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}
