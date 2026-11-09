<?php

namespace App\Modules\Sales\Domain;

/** Статус квартиры в продаже. Значения совпадают с контрактом API 3D-сайта. */
enum UnitStatus: string
{
    case Available = 'available';
    case Booked = 'booked';
    case Sold = 'sold';
    case Unavailable = 'unavailable';

    /** Цена видна покупателю только у квартир, которые можно купить или забронировать */
    public function priceIsPublic(): bool
    {
        return $this === self::Available || $this === self::Booked;
    }

    public function label(): string
    {
        return match ($this) {
            self::Available => 'В продаже',
            self::Booked => 'Бронь',
            self::Sold => 'Продана',
            self::Unavailable => 'Снята с продажи',
        };
    }
}
