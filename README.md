# Frontend weather forecast
- permite obtener el clima actual de una ciudad
- permite obtener el pronóstico del clima de una ciudad

# Pasos para configurar el proyecto en un entorno local
1. Descargar el repositorio
2. Instalar dependencias de los proyectos: `cd backend && composer install && cd ../frontend && npm i && cd ..`
3. Asegurarse de tener el `API_KEY` configurado en el .env del backend, para que el front se comunique con el back (esta api key la proporciono yo)
4. Asegurarse de tener el archivo `frontend\src\utils\apiKey.json` para la comunicación con el backend (Este archivo lo proporciono yo)
5. Asegurarse de tener el `OPENWEATHER_API_KEY` configurado en el .env del backend (se debe registrar en openweathermap.org y generar un api key gratuita)

# Pasos para correr el proyecto
1. correr el frontend: `cd frontend && npm start`
2. correr el backend: `cd backend && php artisan serve`
