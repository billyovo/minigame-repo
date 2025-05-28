import { useApplicationStateStore } from '~/stores/state.store'

export const useBaseFetch = async (url : string, options?: any) => {
	const stateStore = useApplicationStateStore()
	const config = useRuntimeConfig()

	stateStore.setError(null)
	stateStore.setLoading(true)
	try {
		const res = await fetch(`${config.public.baseURL}${url}`, { ...options })
		const data = await res.json()
		if (!res.ok) {
			stateStore.setError(data.message || res.statusText || 'Unknown error')
			return null
		}
		return data
	} catch (err) {
		if (err instanceof ErrorEvent) {
			stateStore.setError(err.message || 'Unknown error')
		}
		return null
	} finally {
		stateStore.setLoading(false)
	}
}
