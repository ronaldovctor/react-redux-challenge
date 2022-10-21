import React from 'react'
import styles from './Header.module.scss'

export function Header() {
	return (
		<section className={styles.header}>
			<div className={'content'}>
				<h1>Mini Dogs</h1>
				<i>icon</i>
			</div>
		</section>
	)
}
