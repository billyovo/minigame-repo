import type { WinnerCountResponse, WinnerRecordResponse, fetchCountOptions, fetchRecordOptions, fetchRecordParams } from '~/@types/record'
import { RecordMode } from '~/enums/record'
export const useRecordStore = defineStore('records', () => {
	const records : Ref<WinnerRecordResponse> = ref({
		total: 0,
		rows: []
	})

	const count : Ref<WinnerCountResponse> = ref({
		total: 0,
		rows: []
	})

	const fetchRecords = async (options: fetchRecordParams, fetchOptions : fetchCountOptions | fetchRecordOptions, isAppend : boolean = false) => {
		const URL = `/${options.mode}/${options.server}/${options.event}${options.name ? `/${options.name}` : ''}`
		const query = constructQueryString(fetchOptions)

		const data = await useBaseFetch(URL + query)

		if (options.mode === RecordMode.RECORD) {
			if (isAppend) {
				records.value.rows = records.value.rows.concat(data.rows)
			} else {
				records.value = data as WinnerRecordResponse
			}
		}

		if (options.mode === RecordMode.COUNT) {
			if (isAppend) {
				count.value.rows = count.value.rows.concat(data.rows)
			} else {
				count.value = data as WinnerCountResponse
			}
		}
	}

	const getRecords = computed(() => records.value ?? {
		total: 0,
		rows: []
	})

	const getCount = computed(() => count.value ?? {
		total: 0,
		rows: []
	})

	function resetData () {
		records.value = {
			total: 0,
			rows: []
		}

		count.value = {
			total: 0,
			rows: []
		}
	}
	return {
		fetchRecords,
		resetData,
		getRecords,
		getCount
	}
})
