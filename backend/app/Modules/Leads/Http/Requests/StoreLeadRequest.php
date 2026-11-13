<?php

namespace App\Modules\Leads\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreLeadRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'project' => ['required', 'string', 'exists:projects,slug'],
            'unit_id' => ['nullable', 'integer'],
            'parking_spot_id' => ['nullable', 'integer'],
            'name' => ['required', 'string', 'min:2', 'max:120'],
            // узбекские номера: +998 и 9 цифр (пробелы, скобки и дефисы допускаются)
            'phone' => ['required', 'string', 'regex:/^\+?(998)?[\s\-()]*(\d[\s\-()]*){9}$/'],
            'comment' => ['nullable', 'string', 'max:500'],
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Укажите имя',
            'name.min' => 'Имя слишком короткое',
            'name.max' => 'Имя слишком длинное',
            'phone.required' => 'Укажите телефон',
            'phone.regex' => 'Номер в формате +998 XX XXX XX XX',
            'comment.max' => 'Комментарий длиннее 500 символов',
        ];
    }
}
