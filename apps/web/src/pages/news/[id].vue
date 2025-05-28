<template>
  <v-container>
    <v-row>
      <div v-if="!isLoading">
        <v-col cols="12">
          <span class="text-secondary text-h6 font-weight-black">{{ getNewsItemPurified?.publish_date }}</span>
          <h1>{{ getNewsItemPurified?.title }}</h1>
        </v-col>
        <v-col cols="12">
          <!-- eslint-disable vue/no-v-html -->
          <div v-html="getNewsItemPurified?.content" />
        </v-col>
      </div>
      <NewsListItemSkeleton v-else />

      <v-col
        cols="12"
        :style="{'border-top': '2px dotted rgb(var(--v-theme-secondary))'}"
        class="mt-4 align-center justify-center d-flex"
      >
        <NuxtLink to="/news">
          <v-btn size="x-large">
            回到通知列表
          </v-btn>
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useNewsStore } from '../../stores/news.store'
import { useApplicationStateStore } from '~/stores/state.store'
import NewsListItemSkeleton from '~/components/loaders/news/NewsListItemSkeleton.vue'

const newsStore = useNewsStore()
const stateStore = useApplicationStateStore()
const { getNewsItemPurified } = storeToRefs(newsStore)
const { isLoading } = storeToRefs(stateStore)

const route = useRoute()
await newsStore.fetchNewsByID(route.params.id.toString())

useHead({
	title: getNewsItemPurified.value?.title,
	meta: [
		{
			hid: 'description',
			name: 'description',
			content: getNewsItemPurified.value?.content
		}
	]
})
</script>
