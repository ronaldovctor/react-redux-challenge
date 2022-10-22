import createAsyncSlice from './helper/createAsyncSlice'

const photo = createAsyncSlice({
	name: 'photo',
	initialState: {
		page: 0,
		list: [],
		infinite: true,
	},
	fetchConfig: (page) => ({
		url: `https://dogsapi.origamid.dev/json/api/photo/?_page=${page}&_total=3&_user=0`,
		options: {
			method: 'GET',
			cache: 'no-store',
		},
	}),
	reducers: {
		addPhotos: (state, action) => {
			state.page++
			state.list.push(...action.payload)
			if (action.payload.length === 0) state.infinite = false
		},
		removePhotos: (state) => {
			state.page = 0
			state.data = null
			state.list = []
			state.infinite = true
		},
	},
})

export const { addPhotos, removePhotos } = photo.actions

export const loadNewPhotos = (page) => async (dispatch) => {
	try {
		const { payload } = await dispatch(fetchPhotos(page))
		console.log(payload)
		return dispatch(addPhotos(payload))
	} catch (error) {
		throw new Error(error.message)
	}
}

export const fetchPhotos = photo.asyncAction
const reducer = photo.reducer
export default reducer
