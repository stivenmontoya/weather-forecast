import { useSelector } from 'react-redux'
import Icons from 'components/Icons'
export default function WeatherCard() {
	const current = useSelector(state => state.weather.current)
	if (!current) return null
	return (
		<div className="w-full max-w-screen-sm bg-white p-10 rounded-xl ring-8 ring-white ring-opacity-40">
			<span className="text-2xl font-semibold mb-2">Clima actual</span>
			<div className="flex justify-between">
				<div className="flex flex-col">
					<span className="text-6xl font-bold">{current.temperature}</span>
					<span className="font-semibold mt-1 text-gray-500">{current.city}</span>
					<span className="font-semibold mt-1 text-gray-500">Humedad: {current.humidity}</span>
					<span className="font-semibold mt-1 text-gray-500">Fecha: {current.date}</span>
					<span className="font-semibold mt-1 text-gray-500">Hora: {current.time}</span>
				</div>
				<div className='text-center'>
					{Icons[current.weather] || Icons.Clouds}
					<span className="font-semibold mt-1 text-gray-500">{current.description}</span>
				</div>
			</div>
		</div>
	)
}
