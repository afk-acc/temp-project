<?php

namespace App\Modules\Catalog\Console;

use App\Modules\Catalog\Application\PublicCatalog;
use App\Modules\Parking\Application\LoadParking;
use App\Modules\Parking\Http\Resources\ParkingResource;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

/**
 * Статическая копия публичного API из базы — для выкладки демо без бэкенда (Nginx отдаёт файлы .json).
 * Источник — база (статусы и цены из CRM на момент выгрузки), а не файлы конвейера.
 *   php artisan zhk:export nrg-mirzo-ulugbek --to=../deploy/nrg-bi/api
 */
class ExportStaticCommand extends Command
{
    protected $signature = 'zhk:export {slugs* : ЖК для выгрузки} {--to= : каталог, куда писать (будет очищен)}';

    protected $description = 'Выгрузить публичный API выбранных ЖК файлами для статической выкладки';

    public function handle(PublicCatalog $catalog, LoadParking $parking): int
    {
        $to = rtrim((string) $this->option('to'), '/');
        if ($to === '') {
            $this->error('Укажите --to=каталог');

            return self::INVALID;
        }
        $slugs = $this->argument('slugs');
        File::deleteDirectory($to);
        $write = function (string $rel, mixed $data) use ($to) {
            File::ensureDirectoryExists(dirname("$to/$rel"));
            File::put("$to/$rel", json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR));
        };
        $write('projects/index.json', $catalog->index($slugs));
        foreach ($slugs as $slug) {
            $p = $catalog->find($slug);
            $write("projects/$slug.json", $catalog->project($p));
            $write("projects/$slug/units.json", $catalog->units($p));
            $write("projects/$slug/context.json", $catalog->context($p));
            foreach ($p->blockLayouts as $b) {
                $write("projects/$slug/blocks/{$b->key}.json", $b->payload);
            }
            foreach ($p->floorTypes as $f) {
                $write("projects/$slug/floor-types/{$f->key}.json", $f->payload);
            }
            if ($p->apartmentTypes()->exists()) {
                $write("projects/$slug/apartment-types.json", $catalog->apartmentTypes($p));
            }
            $levels = $parking($p);
            if ($levels->isNotEmpty()) {
                $write("projects/$slug/parking.json", (new ParkingResource($levels))->resolve());
            }
            $this->copyDir("media/projects/$slug/types", "$to/projects/$slug/types");
            $this->info("$slug: {$p->units()->count()} квартир");
        }
        $this->copyDir('media/brands', "$to/brands");
        $this->info("Готово: $to");

        return self::SUCCESS;
    }

    private function copyDir(string $from, string $to): void
    {
        foreach (Storage::disk('local')->files($from) as $f) {
            File::ensureDirectoryExists($to);
            File::copy(Storage::disk('local')->path($f), "$to/".basename($f));
        }
    }
}
