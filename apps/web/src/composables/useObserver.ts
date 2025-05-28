export const useObserver = (target: string, onIntersect: ()=>{}) => {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) { return }
			onIntersect()
		})
	})

	onMounted(() => {
		observer.observe(document.querySelector(target)!)
	})

	onBeforeUnmount(() => {
		observer.disconnect()
	})
}
