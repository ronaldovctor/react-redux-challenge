import React from 'react'
import { useState } from 'react'
import styles from './Image.module.scss'

function Image({ src, alt }) {
	const [skeleton, setSkeleton] = useState(true)

	function handleLoad({ target }) {
		target.style.opacity = 1
		setSkeleton(false)
	}

	return (
		<div className={styles.wrapper}>
			{skeleton && <div className={styles.skeleton}></div>}
			<img src={src} alt={alt} onLoad={handleLoad} />
		</div>
	)
}

export default Image
