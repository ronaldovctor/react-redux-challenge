import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/login'
import styles from './Header.module.scss'

export function Header() {
	const { token, user } = useSelector((state) => state.login)
	const tokenLoading = token.loading
	const userLoading = user.loading

	const dispatch = useDispatch()

	function handleLogout() {
		dispatch(logout())
	}

	return (
		<section className={styles.header}>
			<div className={`content ${styles.content}`}>
				<h1>Mini Dogs</h1>
				<button
					onClick={handleLogout}
					aria-label="logout"
					className={tokenLoading || (userLoading ? styles.loading : null)}
				></button>
			</div>
		</section>
	)
}
