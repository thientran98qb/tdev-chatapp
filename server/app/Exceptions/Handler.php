<?php

namespace App\Exceptions;

use App\Http\Resources\ErrorResource;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->renderable(function (AuthenticationException $e, $request) {
            return $this->makeErrorResponse(401, $e->getMessage(), null);
        });

        $this->renderable(function (ApiException $e, $request) {
            return $this->makeErrorResponse($e->getCode(), $e->getMessage(), null, $e->getData());
        });

        $this->renderable(function (NotFoundHttpException $e, $request) {
            return $this->makeErrorResponse(404, $e->getMessage(), null);
        });

        $this->renderable(function (ValidationException $e, $request) {
            $errors = $e->errors();
            return $this->makeErrorResponse(422, __('入力が無効です。'), $errors);
        });
    }

    protected function makeErrorResponse(int $code, string $message, ?array $errors = null, $data = null)
    {
        return (new ErrorResource($code, $message, $errors, $data))->response()->setStatusCode($code);
    }
}
