<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        {{-- Vite + React --}}
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia

        {{-- Template JS dari public/template/game-warrior-gh-pages/js --}}
        <script src="/template/game-warrior-gh-pages/js/jquery-3.2.1.min.js"></script>
        <script src="/template/game-warrior-gh-pages/js/bootstrap.min.js"></script>
        <script src="/template/game-warrior-gh-pages/js/owl.carousel.min.js"></script>
        <script src="/template/game-warrior-gh-pages/js/jquery.marquee.min.js"></script>
        <script src="/template/game-warrior-gh-pages/js/map.js"></script>
        <script src="/template/game-warrior-gh-pages/js/main.js"></script>
        <script src="/template/Electro-Bootstrap-1.0.0/js/mainShop.js"></script>
    </body>
</html>
