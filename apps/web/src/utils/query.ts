export function constructQueryString (query: Object) : string {
	const queryParams = new URLSearchParams()

	for (const [key, value] of Object.entries(query)) {
		if (value !== null && value !== undefined) {
			queryParams.set(key, value.toString())
		}
	}

	return (queryParams.size === 0) ? '' : `?${queryParams.toString()}`
}
