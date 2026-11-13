<?php

namespace App\Modules\Parking\Http\Requests;

use App\Modules\Sales\Domain\UnitStatus;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class BulkSpotsRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user() !== null;
    }

    public function rules(): array
    {
        return [
            'project' => ['required', 'string', 'exists:projects,slug'],
            'ids' => ['required', 'array', 'min:1', 'max:500'],
            'ids.*' => ['integer'],
            'status' => ['required', Rule::enum(UnitStatus::class)],
            'comment' => ['nullable', 'string', 'max:500'],
        ];
    }
}
