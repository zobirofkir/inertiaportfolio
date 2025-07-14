<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;

class LinkedInController extends Controller
{
    public function redirect()
    {
        $queryParams = http_build_query([
            'response_type' => 'code',
            'client_id' => config('services.linkedin.client_id'),
            'redirect_uri' => config('services.linkedin.redirect'),
            'scope' => 'openid profile email w_member_social',
        ]);

        return redirect('https://www.linkedin.com/oauth/v2/authorization?' . $queryParams);
    }

    public function callback(Request $request)
    {
        Log::info('LinkedIn Callback Request:', $request->all());

        if ($request->has('error')) {
            Log::error('LinkedIn callback error.', ['error' => $request->input('error'), 'error_description' => $request->input('error_description')]);
            return 'LinkedIn returned an error: ' . e($request->input('error_description'));
        }

        if (!$request->has('code')) {
            Log::error('LinkedIn callback missing code.', ['request' => $request->all()]);
            return 'Error: The "code" parameter is missing. After authorizing on LinkedIn, you should be redirected to a page that provides an authorization code. Please copy that code and visit this URL again, adding the code to the end like this: /linkedin/callback?code=YOUR_AUTHORIZATION_CODE';
        }

        $client = new Client();

        try {
            $response = $client->post('https://www.linkedin.com/oauth/v2/accessToken', [
                'form_params' => [
                    'grant_type' => 'authorization_code',
                    'code' => $request->code,
                    'client_id' => config('services.linkedin.client_id'),
                    'client_secret' => config('services.linkedin.client_secret'),
                    'redirect_uri' => config('services.linkedin.redirect'),
                ],
            ]);

            $data = json_decode($response->getBody()->getContents(), true);
            $accessToken = $data['access_token'];

            // Log the new access token so it can be manually updated in the .env file
            Log::info('New LinkedIn Access Token: ' . $accessToken);

            return 'New access token has been logged. Please update your .env file.';

        } catch (\Exception $e) {
            Log::error('Failed to get LinkedIn access token.', ['error' => $e->getMessage()]);
            return 'Failed to get access token. Check the logs for details.';
        }
    }

    public function sharePost(Request $request)
    {
        $accessToken = config('services.linkedin.access_token');

        if (!$accessToken) {
            return 'Access token is not set. Please authenticate first.';
        }

        $client = new Client();

        try {
            // Get user's profile information to get their person URN
            $profileResponse = $client->get('https://api.linkedin.com/v2/me', [
                'headers' => [
                    'Authorization' => 'Bearer ' . $accessToken,
                ],
            ]);

            $profileData = json_decode($profileResponse->getBody()->getContents(), true);
            $personUrn = $profileData['id'];

            $response = $client->post('https://api.linkedin.com/v2/ugcPosts', [
                'headers' => [
                    'Authorization' => 'Bearer ' . $accessToken,
                    'Content-Type' => 'application/json',
                    'X-Restli-Protocol-Version' => '2.0.0',
                ],
                'json' => [
                    'author' => 'urn:li:person:' . $personUrn,
                    'lifecycleState' => 'PUBLISHED',
                    'specificContent' => [
                        'com.linkedin.ugc.ShareContent' => [
                            'shareCommentary' => [
                                'text' => 'Hello, this is a test post from my Laravel application!',
                            ],
                            'shareMediaCategory' => 'NONE',
                        ],
                    ],
                    'visibility' => [
                        'com.linkedin.ugc.MemberNetworkVisibility' => 'PUBLIC',
                    ],
                ],
            ]);

            return 'Post shared successfully!';

        } catch (\Exception $e) {
            Log::error('Failed to share post on LinkedIn.', ['error' => $e->getMessage()]);
            return 'Failed to share post. Check the logs for details.';
        }
    }
}