<?php

namespace App\Support;

/** Телефон к виду +998XXXXXXXXX: 9 цифр без кода страны считаются узбекским номером. */
final class Phone
{
    public static function normalize(string $raw): string
    {
        $digits = preg_replace('/\D+/', '', $raw);
        if (strlen($digits) === 9) {
            $digits = '998'.$digits;
        }

        return '+'.$digits;
    }
}
