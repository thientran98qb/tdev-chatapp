<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MetaResource extends JsonResource
{
    /**
     * @var string
     */
    private string $message;

    /**
     * @var array | null
     */
    private ?array $errors;

    /**
     * @var int
     */
    private int $code;

    public function __construct(int $code, string $message, $errors = null)
    {
        $this->code = $code;
        $this->message = $message;
        $this->errors = $errors;
        parent::__construct($errors);
    }

    /**
     * @param mixed $request
     * @param int $code
     * @param string $message
     * @param null $errors
     * @return array
     */
    public static function makeResponse($request, int $code, string $message, $errors = null): array
    {
        $meta = new MetaResource($code, $message, $errors);
        return $meta->toArray($request);
    }

    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request): array
    {
        $arr = [
            'code' => $this->code,
            'message' => $this->message
        ];

        if ($this->errors !== null) {
            $arr['errors'] = $this->errors;
        }

        return $arr;
    }
}
