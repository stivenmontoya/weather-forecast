import Form from 'components/Form'
import CurrentWeather from 'components/CurrentWeather'
import Forecast from 'components/Forecast'
import Loader from 'components/Loader'
import Alert from 'components/Alert'
function App() {
	return (
		<div className="flex flex-col items-center justify-center w-screen min-h-screen text-gray-700 p-10 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 ">
			<Loader />
			<Alert />
			<Form />
			<CurrentWeather />
			<Forecast />
		</div>
	)
}
export default App
