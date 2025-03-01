<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ContactRequestTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test Create Contact
     */
    public function testCreateContact()
    {
        $contactForm = [
            'name' => 'zobir',
            'email' => 'zobirofkir19@gmail.com',
            'message' => 'testing Message'
        ];

        $response = $this->postJson('/contact', $contactForm);
        $response->assertStatus(201);
    }
}
