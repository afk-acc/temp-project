<?php

namespace Tests\Feature;

use App\Modules\Inquiries\Models\Inquiry;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class InquiryTest extends TestCase
{
    use RefreshDatabase;

    public function test_inquiry_is_stored_with_normalized_phone(): void
    {
        $this->postJson('/api/inquiries', ['name' => 'Азиз', 'company' => 'ЖК Пример', 'phone' => '90 123-45-67', 'lang' => 'ru'])
            ->assertCreated();
        $this->assertDatabaseHas('inquiries', ['name' => 'Азиз', 'company' => 'ЖК Пример', 'phone' => '+998901234567', 'status' => 'new']);
    }

    public function test_validation_speaks_the_visitor_language(): void
    {
        $this->postJson('/api/inquiries', ['name' => 'A', 'phone' => '12', 'lang' => 'uz'])
            ->assertUnprocessable()
            ->assertJsonPath('errors.phone.0', 'Raqam +998 XX XXX XX XX koʻrinishida boʻlsin')
            ->assertJsonPath('errors.name.0', 'Ism juda qisqa');
    }

    public function test_honeypot_is_not_stored(): void
    {
        $this->postJson('/api/inquiries', ['name' => 'Bot', 'phone' => '+998901234567', 'website' => 'http://spam.example'])->assertCreated();
        $this->assertSame(0, Inquiry::query()->count());
    }
}
