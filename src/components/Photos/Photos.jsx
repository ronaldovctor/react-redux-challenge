import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from '../../helper/Image'
import { loadNewPhotos } from '../../store/photo'
import { PhotosContent } from './PhotosContent'
import { PhotosLoadMore } from './PhotosLoadMore'

export function Photos() {
	const { data } = useSelector((state) => state.photo)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(loadNewPhotos(1))
	}, [dispatch])

	return (
		<>
			{data && <PhotosContent />}
			<PhotosLoadMore />
		</>
	)
}
