import { configureStore, combineReducers } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import login from './login'
import photo from './photo'
import localStorage from './middleware/localStorage'

const reducer = combineReducers({ login, photo })
const store = configureStore({
	reducer,
	middleware: [thunk, localStorage],
})

export default store
