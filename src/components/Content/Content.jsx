import React from 'react'
import { Login } from '../Login/Login'
import { Photos } from '../Photos/Photos'

export function Content() {
	return (
		<section className={`content max-width`}>
			<Login />
			<Photos />
		</section>
	)
}
