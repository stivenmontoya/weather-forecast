import { useState } from 'react'
import { setLoading, setAlert, setCurrent, setForecast } from 'store'
import { requestHandler } from 'utils/requestHandler'
export default function Form() {
	const [city, setCity] = useState('')
	const [countryCode, setCountryCode] = useState('')
	const getCurrentDay = async () => {
		if (!city) {
			setAlert({ message: 'Por favor ingrese una ciudad' })
			return
		}
		if (!countryCode) {
			setAlert({ message: 'Por favor ingrese un código de país' })
			return
		}
		setLoading(true)
		const result = await requestHandler('current', { city, countryCode })
		setLoading(false)
		if (result.status !== true) {
			setAlert({ message: result.data.message })
			return
		}
		setCurrent(result.data)
	}
	const getForecast = async () => {
		if (!city) {
			setAlert({ message: 'Por favor ingrese una ciudad' })
			return
		}
		if (!countryCode) {
			setAlert({ message: 'Por favor ingrese un código de país' })
			return
		}
		setLoading(true)
		const result = await requestHandler('forecast', { city, countryCode })
		setLoading(false)
		if (result.status !== true) {
			setAlert({ message: result.data.message })
			return
		}
		setForecast(result.data)
	}
	const clearData = e => {
		e.preventDefault()
		setCity('')
		setCountryCode('')
		setCurrent(null)
		setForecast(null)
	}

	return (
		<div className="p-4 mb-7">
			<h1 className="mb-5 text-3xl">Weather Forescat</h1>
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
					Ciudad
				</label>
				<input
					id="city"
					type="text"
					placeholder="Ej. Buenos Aires"
					value={city}
					onChange={e => setCity(e.target.value)}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
			</div>
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
					Código de país (2 dígitos)
				</label>
				<input
					id="country"
					type="text"
					value={countryCode}
					onChange={e => setCountryCode(e.target.value)}
					placeholder="Ej. AR"
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
			</div>
			<div className="flex aling-items-center">
				<button
					onClick={() => getForecast()}
					className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
					Obtener Pronóstico
				</button>
				<button
					onClick={() => getCurrentDay()}
					className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
					Obtener clima actual
				</button>
			</div>
			<div className="text-center mt-5">
				<a
					href="#"
					className="font-medium text-blue dark:text-blue-500 hover:underline text-center d-block"
					onClick={clearData}>
					Limpiar
				</a>
			</div>
		</div>
	)
}
