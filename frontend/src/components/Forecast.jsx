import { useSelector } from 'react-redux'
import Icons from 'components/Icons'
export default function WeatherDays() {
	const forecast = useSelector(state => state.weather.forecast)
	if (!forecast) return null
	return (
		<div className="flex flex-col space-y-6 w-full max-w-screen-sm bg-white p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40">
			<span className="text-2xl font-semibold mb-2">Pronóstico para {forecast.city}</span>
			{Object.keys(forecast.days).map((day, index) => (
				<div key={day}>
					<div className="flex justify-between mb-7">
						<div className="flex flex-col">
							<span className="font-semibold text-lg">{forecast.days[day].date}</span>
							<span className="text-2xl font-bold">{forecast.days[day].temperature}</span>
							<span className="font-semibold mt-1 text-gray-500">{forecast.days[day].description}</span>
							<span className="font-semibold mt-1 text-gray-500">Humedad: {forecast.days[day].humidity}</span>
						</div>
						<div className="text-center">{Icons[forecast.days[day].weather] || Icons.Clouds}</div>
					</div>
					{index < Object.keys(forecast.days).length - 1 && <hr />}
				</div>
			))}
		</div>
	)
}
