<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('LandingPage');
});

Route::get('/shop', function () {
    return Inertia::render('ShopPage');
});

Route::get('/single', function () {
    return Inertia::render('SinglePage');
});

Route::get('/cart', function () {
    return Inertia::render('CartPage');
});

Route::get('/checkout', function () {
    return Inertia::render('CheckOutPage');
});

Route::get('/payment', function () {
    return Inertia::render('PaymentPage');
});

Route::get('/succes', function () {
    return Inertia::render('PaymentSuccesPage');
});

Route::get('/momment', function () {
    return Inertia::render('MommentPage');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/test-bootstrap', function () {
    return Inertia::render('TestBootstrap');
});


require __DIR__.'/settings.php';
