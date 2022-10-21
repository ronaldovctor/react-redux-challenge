import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { autoLogin, login } from '../../store/login'
import styles from './Login.module.scss'

export function Login() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const dispatch = useDispatch()

	function handleSubmit(event) {
		event.preventDefault()
		dispatch(login({ username, password }))
	}

	useEffect(() => {
		dispatch(autoLogin())
	}, [dispatch])

	return (
		<section className={styles.login}>
			<div className={`${styles.form} content`}>
				<form onSubmit={handleSubmit}>
					<label htmlFor="user">Usuário</label>
					<input
						type="text"
						name="user"
						id="user"
						value={username}
						onChange={({ target }) => setUsername(target.value)}
					/>
					<label htmlFor="password">Senha</label>
					<input
						type="password"
						name="password"
						id="password"
						value={password}
						onChange={({ target }) => setPassword(target.value)}
					/>
					<button type="submit">Entrar</button>
				</form>
			</div>
		</section>
	)
}
