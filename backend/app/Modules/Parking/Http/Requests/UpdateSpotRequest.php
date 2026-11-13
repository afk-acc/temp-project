<?php

namespace App\Modules\Parking\Http\Requests;

use App\Modules\Sales\Domain\UnitStatus;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateSpotRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user() !== null;
    }

    public function rules(): array
    {
        return [
            'status' => ['sometimes', Rule::enum(UnitStatus::class)],
            'price' => ['sometimes', 'nullable', 'integer', 'min:0', 'max:1000000000000'],
            'comment' => ['sometimes', 'nullable', 'string', 'max:500'],
        ];
    }
}
