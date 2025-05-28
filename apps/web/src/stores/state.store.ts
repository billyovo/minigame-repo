import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useApplicationStateStore = defineStore('state', () => {
	const errorMessage : Ref<string| null> = ref(null)
	const isLoading : Ref<boolean> = ref(true)
	const isSwipingDown : Ref<boolean> = ref(true)

	function setError (error: string | null) {
		errorMessage.value = error
	}

	function setLoading (loading: boolean) {
		isLoading.value = loading
	}

	function setIsSwipingDown (swipingDown: boolean) {
		isSwipingDown.value = swipingDown
	}

	return {
		errorMessage,
		isLoading,
		isSwipingDown,

		setError,
		setLoading,
		setIsSwipingDown
	}
})
