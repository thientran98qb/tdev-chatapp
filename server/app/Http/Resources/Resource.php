<?php

namespace App\Http\Resources;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use JsonSerializable;

abstract class Resource extends JsonResource
{
    /**
     * @var MetaResource
     */
    private MetaResource $meta;
    /**
     * Create a new resource instance.
     *
     * @param  mixed  $resource
     * @param MetaResource $meta
     * @return void
     */
    public function __construct($resource, MetaResource $meta)
    {
        $this->meta = $meta;
        parent::__construct($resource);
    }

    public function getMeta(): MetaResource
    {
        return $this->meta;
    }

    /**
     * Get additional data that should be returned with the resource array.
     *
     * @param Request $request
     * @return array
     */
     public function with($request): array
     {
        return [
            'meta' => $this->meta->toArray($request),
        ];
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
