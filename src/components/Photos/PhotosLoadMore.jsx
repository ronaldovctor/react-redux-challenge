import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadNewPhotos } from '../../store/photo'
import { Loading } from '../../helper/Loading'
import styles from './PhotosLoadMore.module.scss'

export function PhotosLoadMore() {
	const { page, infinite, loading } = useSelector((state) => state.photo)
	const dispatch = useDispatch()

	function handleNewPhoto() {
		dispatch(loadNewPhotos(page + 1))
	}

	return infinite ? (
		!loading ? (
			<button className={styles.button} onClick={handleNewPhoto}>
				+
			</button>
		) : (
			<Loading />
		)
	) : null
}
