<?php

namespace App\Providers\Filament;

use App\Filament\Widgets\Overview\BlogChart;
use App\Filament\Widgets\Overview\CategoryChart;
use App\Filament\Widgets\Overview\ProjectChart;
use App\Filament\Widgets\Overview\Table\BlogTable;
use App\Filament\Widgets\Overview\Table\CategoryTable;
use App\Filament\Widgets\Overview\Table\ProjectTable;
use App\Filament\Widgets\Overview\Table\TagTable;
use App\Filament\Widgets\Overview\TagChart;
use App\Filament\Widgets\OverviewWidget;
use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\AuthenticateSession;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Pages;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;

class AdminPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('admin')
            ->path('admin')
            ->login()
            ->colors([
                'primary' => Color::Stone,
            ])
            ->discoverResources(in: app_path('Filament/Resources'), for: 'App\\Filament\\Resources')
            ->discoverPages(in: app_path('Filament/Pages'), for: 'App\\Filament\\Pages')
            ->pages([
                Pages\Dashboard::class,
            ])
            ->widgets([
                /**
                 * Overview Widget
                 */
                OverviewWidget::class,

                /**
                 * Chart Widgets
                 */
                BlogChart::class,
                CategoryChart::class,
                TagChart::class,
                ProjectChart::class,

                /**
                 * Table Widgets
                 */
                BlogTable::class,
                CategoryTable::class,
                ProjectTable::class,
                TagTable::class
            ])
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ]);
    }
}
