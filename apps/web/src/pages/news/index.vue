<template>
  <h1 class="text-h2 text-center font-weight-bold wand">
    通知
  </h1>
  <v-container :style="{ 'max-width': '1000px' }">
    <div v-if="isLoading">
      <v-skeleton-loader
        v-for="n in 10"
        :key="n"
        type="list-item"
        :height="70"
      />
    </div>
    <NewsItem v-for="news in getNewsListFormatted.rows" v-else :key="news._id" :news="news" />
  </v-container>

  <v-pagination
    v-model="currentPage"
    :length="numberOfPage"
    :disabled="isLoading"
    :total-visible="5"
    density="comfortable"
    class="mt-6"
  />
</template>

<script setup lang="ts">
import { useNewsStore } from '~/stores/news.store'
import { useApplicationStateStore } from '~/stores/state.store'

const newsStore = useNewsStore()
const stateStore = useApplicationStateStore()
const { getNewsListFormatted } = storeToRefs(newsStore)
const { isLoading } = storeToRefs(stateStore)

const currentPage = ref(1)

const numberOfPage = computed(() => {
	const itemPerPage = 15
	return getNewsListFormatted.value?.total ? Math.ceil(getNewsListFormatted.value.total / itemPerPage) : 0
})

watch(currentPage, async (page) => {
	await newsStore.fetchNewsList(page)
})

await newsStore.fetchNewsList()

</script>
