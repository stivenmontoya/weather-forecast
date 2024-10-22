<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WeatherForecastController;


Route::middleware('validateApiKey')->group(function () {
    Route::post('/weather/current', [WeatherForecastController::class, 'getCurrent']);
    Route::post('/weather/forecast', [WeatherForecastController::class, 'getForecast']);
});
