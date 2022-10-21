import React from 'react'
import styles from './Login.module.scss'

export function Login() {
	function handleSubmit(event) {
		event.preventDefault()
	}

	return (
		<section className={styles.login}>
			<div className={`${styles.form} content`}>
				<form onSubmit={handleSubmit}>
					<label htmlFor="user">Usuário</label>
					<input type="text" name="user" id="user" />
					<label htmlFor="password">Senha</label>
					<input type="password" name="password" id="password" />
					<button type="submit">Entrar</button>
				</form>
			</div>
		</section>
	)
}
