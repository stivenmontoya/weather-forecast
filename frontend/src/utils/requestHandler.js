const URL = 'http://localhost:8000/api/weather'
const { API_KEY } = require('utils/apiKey.json')
export async function requestHandler(action, data) {
    try {
        const response = await fetch(`${URL}/${action}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                Authorization: API_KEY,
                'Content-Type': 'application/json'
            }
        })
        const dataResponse = await response.json()
        return dataResponse
    } catch (error) {
        console.error('Error en la petición', error)
        return {
            status: false,
            data: 'Ocurrió un error no majenado'
        }
    }
}