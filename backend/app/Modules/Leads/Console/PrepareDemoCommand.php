<?php

namespace App\Modules\Leads\Console;

use App\Models\User;
use App\Modules\Catalog\Models\Project;
use App\Modules\Catalog\Models\Unit;
use App\Modules\Leads\Models\Lead;
use App\Modules\Parking\Models\ParkingSpot;
use App\Modules\Sales\Domain\UnitStatus;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

/**
 * Подготовка к показу застройщику: демо-менеджер CRM с известным паролем и несколько заявок в каждом ЖК,
 * чтобы CRM на встрече не была пустой. Только локально — на проде (APP_ENV=production) команда ничего не делает.
 * Заявки помечены source=demo: повторный запуск заменяет их, заявки покупателей не трогает.
 *   php artisan spliti:demo              # демо-менеджер + заявки во всех ЖК
 *   php artisan spliti:demo --clear      # убрать демо-заявки и демо-менеджера
 */
class PrepareDemoCommand extends Command
{
    public const EMAIL = 'demo@spliti.local';

    public const PASSWORD = 'spliti-demo';

    public const SOURCE = 'demo';

    protected $signature = 'spliti:demo {slugs?* : ЖК (по умолчанию все в базе)} {--clear : только убрать демо-данные}';

    protected $description = 'Демо-менеджер CRM и стартовые заявки для показа (не для прода)';

    /** Имя, телефон, комментарий, статус заявки, сколько часов назад, на что — квартира или машино-место */
    private const LEADS = [
        ['Азиз Каримов', '+998901234501', 'Хотим посмотреть в субботу, с женой', 'new', 1, 'unit'],
        ['Дилноза Юсупова', '+998935550142', 'Интересует рассрочка на 24 месяца', 'new', 5, 'unit'],
        ['Тимур Ахмедов', '+998977001133', null, 'new', 9, 'parking'],
        ['Мадина Рахимова', '+998909876512', 'Нужен вид во двор, не на дорогу', 'in_progress', 26, 'unit'],
        ['Шерзод Ташпулатов', '+998946603344', 'Перезвонить после 18:00', 'in_progress', 30, 'unit'],
        ['Нигора Алиева', '+998999112200', 'Купили в другом ЖК, закрыли', 'done', 52, 'unit'],
    ];

    public function handle(): int
    {
        if (app()->environment('production')) {
            $this->error('На проде демо-данные не создаются: APP_ENV=production.');

            return self::FAILURE;
        }
        $projects = Project::query()->when($this->argument('slugs'), fn ($q, $s) => $q->whereIn('slug', $s))->orderBy('id')->get();
        $removed = Lead::query()->where('source', self::SOURCE)->whereIn('project_id', $projects->pluck('id'))->delete();
        if ($this->option('clear')) {
            User::query()->where('email', self::EMAIL)->delete();
            $this->info("Убрано демо-заявок: $removed, демо-менеджер удалён.");

            return self::SUCCESS;
        }

        // пароль перехешируется, только если он другой: иначе Laravel разлогинит уже открытую на встрече CRM
        $user = User::query()->firstOrNew(['email' => self::EMAIL]);
        $user->name = 'Менеджер (демо)';
        if (! $user->exists || ! Hash::check(self::PASSWORD, $user->password)) {
            $user->password = Hash::make(self::PASSWORD);
        }
        $user->save();
        foreach ($projects as $p) {
            $this->line("{$p->slug}: заявок ".$this->seedLeads($p));
        }
        $this->info('Вход в CRM: '.self::EMAIL.' / '.self::PASSWORD.' (кнопка «Войти как демо-менеджер» на localhost)');

        return self::SUCCESS;
    }

    private function seedLeads(Project $p): int
    {
        // квартиры в продаже с верхних этажей — их и смотрят на показе; одна на заявку, без повторов
        $units = Unit::query()->where('project_id', $p->id)->where('status', UnitStatus::Available)
            ->orderByDesc('floor')->orderBy('block')->orderBy('number')->limit(40)->get()->values();
        $spot = ParkingSpot::query()->where('project_id', $p->id)->where('status', UnitStatus::Available)->orderBy('code')->first();
        $n = 0;
        foreach (self::LEADS as $i => [$name, $phone, $comment, $status, $hoursAgo, $what]) {
            $unit = $what === 'unit' && $units->isNotEmpty() ? $units[($i * 7) % $units->count()] : null;
            $spotId = $what === 'parking' ? $spot?->id : null;
            if (! $unit && ! $spotId) {
                continue;
            }
            $at = now()->subHours($hoursAgo)->subMinutes(($i * 17) % 50);
            $lead = new Lead([
                'project_id' => $p->id, 'unit_id' => $unit?->id, 'parking_spot_id' => $spotId,
                'name' => $name, 'phone' => $phone, 'comment' => $comment, 'status' => $status, 'source' => self::SOURCE,
            ]);
            $lead->created_at = $at;
            $lead->updated_at = $at;
            $lead->save();
            $n++;
        }

        return $n;
    }
}
