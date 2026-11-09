<?php

namespace App\Modules\Identity\Console;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class CreateAdminCommand extends Command
{
    protected $signature = 'zhk:admin {email} {--name=Администратор} {--password= : если не задан — сгенерируется и будет показан один раз}';

    protected $description = 'Создать или сбросить пароль менеджера CRM';

    public function handle(): int
    {
        $password = $this->option('password') ?: Str::password(14, symbols: false);
        User::query()->updateOrCreate(['email' => $this->argument('email')], [
            'name' => $this->option('name'), 'password' => Hash::make($password),
        ]);
        $this->info('Менеджер: '.$this->argument('email'));
        if (! $this->option('password')) {
            $this->warn('Пароль (показывается один раз): '.$password);
        }

        return self::SUCCESS;
    }
}
