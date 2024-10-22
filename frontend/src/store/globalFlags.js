import { createSlice } from '@reduxjs/toolkit'
export const globalFlagsSlice = createSlice({
	name: 'globalFlags',
	initialState: {
		alert: null,
		loading: false
	},
	reducers: {
		setAlert: (state, action) => {
			state.alert = action.payload
			return state
		},
		setLoading: (state, action) => {
			state.loading = action.payload
			return state
		}
	}
})
export default globalFlagsSlice
