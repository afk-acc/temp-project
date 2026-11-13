<?php

namespace App\Modules\Parking\Domain;

/** Тип машино-места. Значения совпадают с контрактом API. */
enum SpotKind: string
{
    case Standard = 'standard';
    case Wide = 'wide';
    case Ev = 'ev';
    case Mgn = 'mgn';

    public function label(): string
    {
        return match ($this) {
            self::Standard => 'Обычное',
            self::Wide => 'Широкое',
            self::Ev => 'С зарядкой для электромобиля',
            self::Mgn => 'Для маломобильных',
        };
    }
}
