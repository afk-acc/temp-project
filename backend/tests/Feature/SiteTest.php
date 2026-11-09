<?php

namespace Tests\Feature;

use App\Modules\Site\Application\SiteContentImporter;
use App\Modules\Site\Models\SiteContent;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class SiteTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        Storage::fake('local');
    }

    private function import(bool $force = false): array
    {
        return app(SiteContentImporter::class)->handle(resource_path('site'), $force);
    }

    public function test_site_is_unavailable_until_content_is_imported(): void
    {
        $this->getJson('/api/site')->assertStatus(503);
    }

    public function test_content_comes_from_database_in_visitor_language(): void
    {
        $this->import();
        $this->getJson('/api/site?lang=uz')->assertOk()
            ->assertJsonPath('lang', 'uz')
            ->assertJsonPath('langs', ['ru', 'uz'])
            ->assertJsonPath('content.hero.title1', 'Hali qurilmagan')
            ->assertJsonPath('content.features.items.0.image', '/api/site/media/map.webp')
            ->assertJsonPath('contacts', []);
        $this->getJson('/api/site?lang=xx')->assertJsonPath('lang', 'ru');
    }

    public function test_contacts_are_set_by_command_and_empty_ones_are_hidden(): void
    {
        $this->import();
        $this->artisan('spliti:site-set', ['key' => 'contacts.telegram', 'value' => 'https://t.me/spliti_uz'])->assertSuccessful();
        $this->artisan('spliti:site-set', ['key' => 'contacts.phone', 'value' => '+998 90 000 00 00'])->assertSuccessful();
        $this->artisan('spliti:site-set', ['key' => 'contacts.phone', 'value' => ''])->assertSuccessful();
        $this->artisan('spliti:site-set', ['key' => 'password', 'value' => 'x'])->assertFailed();
        $this->getJson('/api/site')->assertJsonPath('contacts', ['telegram' => 'spliti_uz']);
    }

    public function test_reimport_keeps_edits_unless_forced(): void
    {
        $this->import();
        $row = SiteContent::query()->where('lang', 'ru')->first();
        $content = $row->content;
        $content['hero']['title1'] = 'Правка в базе';
        $row->update(['content' => $content]);

        $this->import();
        $this->getJson('/api/site')->assertJsonPath('content.hero.title1', 'Правка в базе');
        $this->import(force: true);
        $this->getJson('/api/site')->assertJsonPath('content.hero.title1', 'Покажите дом,');
    }

    public function test_site_images_are_served_from_backend_storage(): void
    {
        $this->import();
        $this->get('/api/site/media/map.webp')->assertOk()->assertHeader('Content-Type', 'image/webp');
        $this->get('/api/site/media/nope.webp')->assertNotFound();
        $this->get('/api/site/media/..%2F.env')->assertNotFound();
    }
}
