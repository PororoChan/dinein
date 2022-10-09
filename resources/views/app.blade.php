<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        <link rel="stylesheet" href="../../css/core.css" type="text/css">
        <link rel="stylesheet" href="../../css/auth.css">
        <link rel="stylesheet" href="../../css/demo.css">
        <link rel="stylesheet" href="../../css/perfect-scroll.css">
        <link rel="stylesheet" href="../../css/style.css">
        <link rel="stylesheet" href="../../css/theme-default.css">
        <link rel="stylesheet" href="../../css/boxicons.css">
        <link rel="stylesheet" href="https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">


        <script src="../../js/helpers.js"></script>
        <script src="../../js/config.js"></script>
        <!-- Scripts -->
        @routes
        <script src="{{ mix('js/app.js') }}" defer></script>
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia

        <script src="../../js/jquery.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
        <script src="../../js/bs.js"></script>
        <script src="../../js/main.js"></script>
        <script src="../../js/menu.js"></script>
        <script src="../../js/perfect-scroll.js"></script>
        <script src="../../js/popper.js"></script>
    </body>
</html>
