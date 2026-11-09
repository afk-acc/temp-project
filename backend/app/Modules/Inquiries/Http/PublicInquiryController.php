<?php

namespace App\Modules\Inquiries\Http;

use App\Http\Controllers\Controller;
use App\Modules\Inquiries\Http\Requests\StoreInquiryRequest;
use App\Modules\Inquiries\Models\Inquiry;
use App\Support\Phone;
use Illuminate\Http\JsonResponse;

/** Форма «Обсудить проект» на сайте Spliti. */
class PublicInquiryController extends Controller
{
    public function store(StoreInquiryRequest $request): JsonResponse
    {
        $data = $request->validated();
        // бот заполнил скрытое поле — отвечаем как обычно, но не сохраняем
        if (! empty($data['website'])) {
            return response()->json(['ok' => true], 201);
        }
        Inquiry::query()->create([
            'name' => trim($data['name']), 'company' => isset($data['company']) ? trim($data['company']) : null,
            'phone' => Phone::normalize($data['phone']), 'message' => $data['message'] ?? null,
            'lang' => $data['lang'] ?? 'ru', 'status' => 'new',
        ]);

        return response()->json(['ok' => true], 201);
    }
}
