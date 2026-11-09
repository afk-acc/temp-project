<?php

namespace App\Modules\Identity\Http;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

/** Вход в CRM: сессия Sanctum (httpOnly-кука), фронт токенов не хранит. */
class AuthController extends Controller
{
    public function login(Request $request): JsonResponse
    {
        $credentials = $request->validate(['email' => ['required', 'email'], 'password' => ['required', 'string']]);
        if (! Auth::guard('web')->attempt($credentials, remember: true)) {
            throw ValidationException::withMessages(['email' => 'Неверная почта или пароль']);
        }
        $request->session()->regenerate();

        return $this->me($request);
    }

    public function me(Request $request): JsonResponse
    {
        $u = $request->user();

        return response()->json(['id' => $u->id, 'name' => $u->name, 'email' => $u->email]);
    }

    public function logout(Request $request): JsonResponse
    {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['ok' => true]);
    }
}
