const localStorage = (store) => (next) => (action) => {
	const result = next(action)
	const { meta } = action
	if (meta && meta.localStorage !== undefined) {
		const { key, value } = meta.localStorage
		window.localStorage.setItem(key, value)
	}
	return result
}

export default localStorage
