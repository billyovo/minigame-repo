import type { EventData } from '~/@types/events'

export const useEventsStore = defineStore('events', () => {
	const events : Ref<EventData[] | []> = ref([])
	const eventsNameMap : Ref<Record<string, string>> = ref({})
	async function fetchEventsData () {
		const data : EventData[] | [] = await useBaseFetch('/events')
		events.value = data

		for (const event of data) {
			eventsNameMap.value[event.title] = event.id
		}
	}

	function getEventIDFromName (name: string) {
		return eventsNameMap.value[name]
	}

	return {
		events,

		fetchEventsData,
		getEventIDFromName
	}
})
