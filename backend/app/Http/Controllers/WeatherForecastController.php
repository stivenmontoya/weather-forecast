<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

use Illuminate\Http\Request;

class WeatherForecastController extends Controller
{

    private $endpoint = 'https://api.openweathermap.org/data/2.5/';
    private $options = ['verify' => false]; // Localmente no tenemos certificado SSL
    private $appid;
    public function __construct()
    {
        $this->appid = env('OPENWEATHER_API_KEY');
    }

    function getCurrent(Request $request)
    {
        $city = $request->city;
        $countryCode = $request->countryCode;
        $response = Http::withOptions($this->options)->get($this->endpoint . 'weather?q=' . $city . ',' . $countryCode . '&units=metric&lang=es&appid=' . $this->appid);
        if ($response->failed()) {
            return response()->json([
                'status' => false,
                'data' => $response->json()
            ], 500);
        }
        $data = $response->json();
        return response()->json([
            'status' => true,
            'data' => [
                'city' => $data['name'] . ' (' . $data['sys']['country'] . ')',
                "date" => date('Y/m/d', $data['dt'] + $data['timezone']),
                'time' => date('h:i a', $data['dt'] + $data['timezone']),
                'weather' => $data['weather'][0]['main'],
                'description' => $data['weather'][0]['description'],
                'temperature' => $data['main']['temp'] . '°C',
                'humidity' => $data['main']['humidity'] . '%',
            ]
        ]);
    }

    function getForecast(Request $request)
    {
        $city = $request->city;
        $countryCode = $request->countryCode;
        $response = Http::withOptions($this->options)->get($this->endpoint . 'forecast?q=' . $city . ',' . $countryCode . '&units=metric&lang=es&appid=' . $this->appid);
        if ($response->failed()) {
            return response()->json([
                'status' => false,
                'data' => $response->json()
            ], 500);
        }
        $result = $response->json();
        $data = [
            'city' => $result['city']['name'] . ' (' . $result['city']['country'] . ')',
            'days' => []
        ];
        foreach ($result['list'] as $item) {
            $day = date('Y-m-d', $item['dt'] + $result['city']['timezone']);
            if (!isset($data['days'][$day])) {
                $date = \Carbon\Carbon::createFromTimestamp($item['dt'] + $result['city']['timezone']);
                $date->locale('es');
                $dateFormatted = $date->translatedFormat('d \d\e F');
                $data['days'][$day] = [
                    'date' => $dateFormatted,
                    'weather' => $item['weather'][0]['main'],
                    'temperature' => $item['main']['temp'] . '°C',
                    'humidity' => $item['main']['humidity'] . '%',
                    'description' => $item['weather'][0]['description'],
                ];
            }
        }
        return response()->json([
            'status' => true,
            'data' => $data
        ]);
    }
}
