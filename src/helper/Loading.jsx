import React from 'react'
import styles from './Loading.module.scss'

export function Loading() {
	return (
		<div className={styles.loading}>
			<i className={styles.bar}></i>
		</div>
	)
}
