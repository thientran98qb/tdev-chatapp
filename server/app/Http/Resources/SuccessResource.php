<?php

namespace App\Http\Resources;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Request;
use JsonSerializable;

class SuccessResource extends Resource
{
    /**
     * SuccessResource constructor.
     * @param null $resource
     * @param int $code
     * @param string $message
     */
    public function __construct($resource = null, $code = 200, string $message = "Successful")
    {
        parent::__construct($resource, new MetaResource($code, $message, null));
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
