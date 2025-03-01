<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class BlogRequestTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test Get Blogs
     *
     * @return void
     */
    public function testGetBlogs()
    {
        $response = $this->getJson('/blogs');
        $response->assertStatus(200);
    }
}
