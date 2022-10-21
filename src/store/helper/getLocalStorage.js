const getLocalStorage = (key, initial) => {
	if (window.localStorage.getItem(key)) return window.localStorage.getItem(key)
	return initial
}

export default getLocalStorage
