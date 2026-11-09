<?php

namespace App\Modules\Inquiries\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreInquiryRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'min:2', 'max:120'],
            'company' => ['nullable', 'string', 'max:160'],
            // застройщик может быть и не из Узбекистана: + и 9–15 цифр, пробелы, скобки и дефисы допускаются
            'phone' => ['required', 'string', 'max:32', 'regex:/^\+?[\s\-()]*(\d[\s\-()]*){9,15}$/'],
            'message' => ['nullable', 'string', 'max:1000'],
            'lang' => ['nullable', 'in:ru,uz'],
            'website' => ['nullable', 'string', 'max:200'],   // ловушка для ботов: человек это поле не видит
        ];
    }

    public function messages(): array
    {
        $uz = $this->input('lang') === 'uz';

        return [
            'name.required' => $uz ? 'Ismingizni kiriting' : 'Укажите имя',
            'name.min' => $uz ? 'Ism juda qisqa' : 'Имя слишком короткое',
            'phone.required' => $uz ? 'Telefon raqamini kiriting' : 'Укажите телефон',
            'phone.regex' => $uz ? 'Raqam +998 XX XXX XX XX koʻrinishida boʻlsin' : 'Номер в формате +998 XX XXX XX XX',
            'message.max' => $uz ? 'Xabar 1000 belgidan oshmasin' : 'Сообщение длиннее 1000 символов',
        ];
    }
}
