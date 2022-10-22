import React from 'react'
import { useSelector } from 'react-redux'
import Image from '../../helper/Image'
import styles from './PhotosContent.module.scss'

export function PhotosContent() {
	const { list } = useSelector((state) => state.photo)
	console.log(list)

	return (
		<ul>
			{list.map((photo) => (
				<li key={photo.id}>
					<Image src={photo.src} alt={photo.title} />
					<p className={styles.title}>{photo.title}</p>
					<p className={styles.acessos}>{photo.acessos}</p>
				</li>
			))}
		</ul>
	)
}
