import getLocalStorage from './helper/getLocalStorage'
import createAsyncSlice from './helper/createAsyncSlice'
import { combineReducers } from '@reduxjs/toolkit'
import { removePhotos } from './photo'

const token = createAsyncSlice({
	name: 'token',
	initialState: {
		data: {
			token: getLocalStorage('token', null),
		},
	},
	fetchConfig: (user) => ({
		url: 'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		},
	}),
	reducers: {
		fetchSuccess: {
			reducer(state, action) {
				state.loading = false
				state.data = action.payload
				state.error = null
			},
			prepare(payload) {
				return {
					payload,
					meta: {
						localStorage: {
							key: 'token',
							value: payload.token,
						},
					},
				}
			},
		},
		removeToken(state) {
			state.loading = false
			state.data = null
			state.error = null
		},
	},
})

const user = createAsyncSlice({
	name: 'user',
	fetchConfig: (token) => ({
		url: 'https://dogsapi.origamid.dev/json/api/user',
		options: {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		},
	}),
	reducers: {
		removeUser(state) {
			state.data = null
		},
	},
})

const fetchToken = token.asyncAction
const fetchUser = user.asyncAction
const reducer = combineReducers({ token: token.reducer, user: user.reducer })
export default reducer

const { removeToken } = token.actions
const { removeUser } = user.actions

export const login = (user) => async (dispatch) => {
	// Action creator
	try {
		const { payload } = await dispatch(fetchToken(user)) // payload inside Action
		if (payload.token) await dispatch(fetchUser(payload.token))
	} catch (error) {
		throw new Error(error.message)
	}
}

export const autoLogin = () => async (dispatch, getState) => {
	try {
		const state = getState()
		console.log(state)
		if (state.login.token.data) {
			const { token } = state.login.token.data
			if (token) await dispatch(fetchUser(token))
		}
	} catch (error) {
		throw new Error(error.message)
	}
}

export const logout = () => async (dispatch) => {
	try {
		window.localStorage.removeItem('token')
		dispatch(removePhotos())
		dispatch(removeToken())
		dispatch(removeUser())
	} catch (error) {}
}
