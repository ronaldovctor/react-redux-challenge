import { createSlice } from '@reduxjs/toolkit'

const createAsyncSlice = (config) => {
	const slice = createSlice({
		name: config.name,
		initialState: {
			loading: false,
			data: null,
			error: null,
			...config.initialState,
		},
		reducers: {
			fetchStart(state) {
				state.loading = true
			},
			fetchSuccess(state, action) {
				state.loading = false
				state.data = action.payload
				state.error = null
			},
			fetchError(state, action) {
				state.loading = false
				state.data = null
				state.error = action.payload
			},
			...config.reducers,
		},
	})

	const { fetchStart, fetchError, fetchSuccess } = slice.actions

	const asyncAction = (payload) => async (dispatch) => {
		try {
			dispatch(fetchStart())
			const { url, options } = config.fetchConfig(payload)
			const data = await fetch(url, options).then((r) => r.json())
			return dispatch(fetchSuccess(data))
		} catch (error) {
			return dispatch(fetchError(error.message))
		}
	}

	return {
		...slice,
		asyncAction,
	}
}

export default createAsyncSlice
