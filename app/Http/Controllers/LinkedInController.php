<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\URL;

class LinkedInController extends Controller
{
    public function redirectToLinkedIn()
    {
        $queryParams = http_build_query([
            'response_type' => 'code',
            'client_id' => config('services.linkedin.client_id'),
            'redirect_uri' => config('services.linkedin.redirect'),
            'scope' => 'r_liteprofile r_emailaddress w_member_social',
        ]);

        return redirect('https://www.linkedin.com/oauth/v2/authorization?' . $queryParams);
    }

    public function handleLinkedInCallback(Request $request)
    {
        $client = new Client();

        try {
            // Exchange authorization code for access token
            $response = $client->post('https://www.linkedin.com/oauth/v2/accessToken', [
                'form_params' => [
                    'grant_type' => 'authorization_code',
                    'code' => $request->code,
                    'redirect_uri' => config('services.linkedin.redirect'),
                    'client_id' => config('services.linkedin.client_id'),
                    'client_secret' => config('services.linkedin.client_secret'),
                ],
            ]);

            $data = json_decode($response->getBody()->getContents(), true);
            $accessToken = $data['access_token'];

            // Get user profile to find the author URN
            $profileResponse = $client->get('https://api.linkedin.com/v2/me', [
                'headers' => [
                    'Authorization' => 'Bearer ' . $accessToken,
                ],
            ]);

            $profileData = json_decode($profileResponse->getBody()->getContents(), true);
            $authorUrn = $profileData['id'];

            // Store the credentials
            $this->updateEnvFile('LINKEDIN_ACCESS_TOKEN', $accessToken);
            $this->updateEnvFile('LINKEDIN_AUTHOR', $authorUrn);

            return redirect('/admin')->with('status', 'LinkedIn connected successfully!');

        } catch (\Exception $e) {
            return redirect('/admin')->with('error', 'Failed to connect to LinkedIn: ' . $e->getMessage());
        }
    }

    private function updateEnvFile($key, $value)
    {
        $path = base_path('.env');

        if (File::exists($path)) {
            $content = File::get($path);
            $newContent = preg_replace(
                "/^{$key}=.*/m",
                "{$key}={$value}",
                $content
            );

            if ($newContent === null || $newContent === $content) {
                // Key not found, so append it
                $newContent .= "\n{$key}={$value}\n";
            }

            File::put($path, $newContent);
        }
    }
}