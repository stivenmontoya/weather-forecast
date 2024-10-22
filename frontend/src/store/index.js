import { configureStore } from '@reduxjs/toolkit'
import globalFlagsSlice from './globalFlags'
import weatherSlice from './weather'
const store = configureStore({
	reducer: {
		globalFlags: globalFlagsSlice.reducer,
		weather: weatherSlice.reducer
	}
})
const d = store.dispatch
const storeManager = {
	// Global Flags
	setAlert: data => d(globalFlagsSlice.actions.setAlert(data)),
	setLoading: data => d(globalFlagsSlice.actions.setLoading(data)),
	// Weather
	setCity: data => d(weatherSlice.actions.setCity(data)),
	setCountryCode: data => d(weatherSlice.actions.setCountryCode(data)),
	setCurrent: data => d(weatherSlice.actions.setCurrent(data)),
	setForecast: data => d(weatherSlice.actions.setForecast(data))
}
export const {
	// Global Flags
	setAlert,
	setLoading,
	// Weather
	setCity,
	setCountryCode,
	setCurrent,
	setForecast
} = storeManager
export default store
