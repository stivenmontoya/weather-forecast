import { createSlice } from '@reduxjs/toolkit'
export const weatherSlice = createSlice({
	name: 'weather',
	initialState: {
		city: null,
		countryCode: null,
		current: null,
		forecast: null
	},
	reducers: {
		setCity: (state, action) => {
			state.city = action.payload
			return state
		},
		setCountryCode: (state, action) => {
			state.countryCode = action.payload
			return state
		},
		setCurrent: (state, action) => {
			state.current = action.payload
			return state
		},
		setForecast: (state, action) => {
			state.forecast = action.payload
			return state
		}
	}
})
export default weatherSlice
