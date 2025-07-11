<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Project;
use Illuminate\Http\Response;

class SitemapController extends Controller
{
    public function index()
    {
        $sitemap = '<?xml version="1.0" encoding="UTF-8"?>';
        $sitemap .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
        
        // Static pages
        $staticPages = [
            ['url' => url('/'), 'priority' => '1.0', 'changefreq' => 'weekly'],
            ['url' => url('/abouts'), 'priority' => '0.8', 'changefreq' => 'monthly'],
            ['url' => url('/services'), 'priority' => '0.8', 'changefreq' => 'monthly'],
            ['url' => url('/projects'), 'priority' => '0.9', 'changefreq' => 'weekly'],
            ['url' => url('/blogs'), 'priority' => '0.9', 'changefreq' => 'daily'],
            ['url' => url('/contacts'), 'priority' => '0.7', 'changefreq' => 'monthly'],
        ];
        
        foreach ($staticPages as $page) {
            $sitemap .= '<url>';
            $sitemap .= '<loc>' . $page['url'] . '</loc>';
            $sitemap .= '<changefreq>' . $page['changefreq'] . '</changefreq>';
            $sitemap .= '<priority>' . $page['priority'] . '</priority>';
            $sitemap .= '</url>';
        }
        
        // Blog posts
        $blogs = Blog::latest()->get();
        foreach ($blogs as $blog) {
            $sitemap .= '<url>';
            $sitemap .= '<loc>' . url('/blog/' . $blog->slug) . '</loc>';
            $sitemap .= '<lastmod>' . $blog->updated_at->toAtomString() . '</lastmod>';
            $sitemap .= '<changefreq>weekly</changefreq>';
            $sitemap .= '<priority>0.8</priority>';
            $sitemap .= '</url>';
        }
        
        // Projects
        $projects = Project::latest()->get();
        foreach ($projects as $project) {
            $sitemap .= '<url>';
            $sitemap .= '<loc>' . url('/project/' . $project->slug) . '</loc>';
            $sitemap .= '<lastmod>' . $project->updated_at->toAtomString() . '</lastmod>';
            $sitemap .= '<changefreq>monthly</changefreq>';
            $sitemap .= '<priority>0.7</priority>';
            $sitemap .= '</url>';
        }
        
        $sitemap .= '</urlset>';
        
        return response($sitemap, 200, [
            'Content-Type' => 'application/xml'
        ]);
    }
}