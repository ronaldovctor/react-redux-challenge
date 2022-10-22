import React from 'react'
import { useSelector } from 'react-redux'
import { Loading } from '../../helper/Loading'
import store from '../../store/configureStore'
import { Login } from '../Login/Login'
import { Photos } from '../Photos/Photos'

export function Content() {
	const { data } = useSelector((state) => state.login.user)
	if (data) console.log('user connected')
	const { token, user } = store.getState().login
	const tokenLoading = token.loading
	const userLoading = user.loading

	return (
		<section className={`content max-width`}>
			{tokenLoading || userLoading ? <Loading /> : data ? <Photos /> : <Login />}
		</section>
	)
}
