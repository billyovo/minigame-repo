import DOMPurify from 'dompurify'
import { defineStore } from 'pinia'
import type { NewsItemDetailed, NewsList } from '~/@types/news'
import { useBaseFetch } from '~/composables/useBaseFetch'
import { constructQueryString } from '~/utils/query'

export const useNewsStore = defineStore('news', () => {
	const newsList: Ref<NewsList | null> = ref({ rows: [], total: 0 })
	const newsItem: Ref<NewsItemDetailed | null> = ref(null)

	async function fetchNewsList (page? : number) {
		const query = constructQueryString({ page })

		const data : NewsList | null = await useBaseFetch(`/news${query}`)
		newsList.value = data
	}

	async function fetchNewsByID (id: string) {
		const data : NewsItemDetailed | null = await useBaseFetch(`/news/${id}`)
		newsItem.value = data
	}

	const getNewsListFormatted = computed(() => {
		if (!newsList.value) { return { rows: [], total: 0 } }

		return {
			total: newsList.value.total,
			rows: newsList.value.rows.map(item => ({
				...item,
				publish_date: item.publish_date.replaceAll('-', '.')
			}))
		}
	})

	const getNewsItemPurified = computed(() => {
		if (!newsItem.value) { return null }
		return {
			...newsItem.value,
			content: DOMPurify.sanitize(newsItem.value.content)
		}
	})

	return {
		getNewsListFormatted,
		getNewsItemPurified,
		fetchNewsList,
		fetchNewsByID
	}
})
