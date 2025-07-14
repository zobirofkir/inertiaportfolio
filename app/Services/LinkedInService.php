<?php

namespace App\Services;

use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;

class LinkedInService
{
    protected $client;
    protected $accessToken;
    protected $author;

    public function __construct()
    {
        $this->client = new Client(['base_uri' => 'https://api.linkedin.com/v2/']);
        $this->accessToken = config('services.linkedin.access_token');
        $this->author = config('services.linkedin.author');
    }

    public function createPost($blog)
    {
        if (!$this->accessToken || !$this->author) {
            Log::error('LinkedIn API credentials are not configured.');
            return false;
        }

        try {
            $response = $this->client->post('ugcPosts', [
                'headers' => [
                    'Authorization' => 'Bearer ' . $this->accessToken,
                    'Content-Type' => 'application/json',
                    'X-Restli-Protocol-Version' => '2.0.0',
                ],
                'json' => [
                    'author' => $this->author,
                    'lifecycleState' => 'PUBLISHED',
                    'specificContent' => [
                        'com.linkedin.ugc.ShareContent' => [
                            'shareCommentary' => [
                                'text' => $blog->title . "\n\n" . $blog->description,
                            ],
                            'shareMediaCategory' => 'ARTICLE',
                            'media' => [
                                [
                                    'status' => 'READY',
                                    'description' => [
                                        'text' => $blog->description,
                                    ],
                                    'originalUrl' => config('app.url') . '/blogs/' . $blog->slug,
                                    'title' => [
                                        'text' => $blog->title,
                                    ],
                                ],
                            ],
                        ],
                    ],
                    'visibility' => [
                        'com.linkedin.ugc.MemberNetworkVisibility' => 'PUBLIC',
                    ],
                ],
            ]);

            Log::info('Successfully posted to LinkedIn.', ['response' => json_decode($response->getBody()->getContents())]);
            return true;
        } catch (\Exception $e) {
            Log::error('Failed to post to LinkedIn.', ['error' => $e->getMessage()]);
            return false;
        }
    }

}