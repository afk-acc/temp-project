<?php

namespace App\Modules\Inquiries\Console;

use App\Modules\Inquiries\Models\Inquiry;
use Illuminate\Console\Command;

class ListInquiriesCommand extends Command
{
    protected $signature = 'spliti:inquiries {--limit=20}';

    protected $description = 'Последние обращения застройщиков с сайта Spliti';

    public function handle(): int
    {
        $rows = Inquiry::query()->latest()->limit((int) $this->option('limit'))->get()
            ->map(fn (Inquiry $i) => [$i->created_at?->timezone('Asia/Tashkent')->format('d.m H:i'), $i->name, $i->company, $i->phone, mb_strimwidth((string) $i->message, 0, 60, '…'), $i->status]);
        $this->table(['Когда', 'Имя', 'Компания', 'Телефон', 'Сообщение', 'Статус'], $rows);

        return self::SUCCESS;
    }
}
