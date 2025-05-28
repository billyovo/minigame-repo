<template>
  <v-container>
    <v-row
      class="mt-2"
      style="{{ overflow: 'auto' }}"
    >
      <v-col v-if="!display.mobile.value" cols="2">
        <div :style="{position: 'sticky', top: 0}">
          <h2>篩選</h2>
          <v-divider class="my-2" />
          <RecordFilterList />
        </div>
      </v-col>
      <div v-else>
        <v-bottom-sheet :max-height="'65vh'">
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              icon="mdi:mdi-menu"
              :color="theme.current.value.colors.secondary"
              :style="{position: 'fixed', bottom: 0, right: '30px', 'margin-bottom': '60px', 'z-index': 999999}"
            />
          </template>
          <v-card
            title="篩選"
          >
            <RecordFilterList class="ma-5" />
          </v-card>
        </v-bottom-sheet>
      </div>
      <v-col>
        <span>找到 {{ urlParams.mode === RecordMode.RECORD ? recordStore.getRecords.total : recordStore.getCount.total }}個紀錄</span>
        <div class="d-flex flex-wrap flex-row w-100 justify-center">
          <v-skeleton-loader v-if="stateStore.isLoading" type="avatar, text, text, text" width="250" height="180" class="ma-3" />
          <div v-if="urlParams.mode === RecordMode.RECORD" class="d-flex flex-wrap flex-row w-100 justify-center">
            <RecordCard
              v-for="record in recordStore.getRecords.rows"
              :key="record._id"
              :data="record"
              class="ma-2 mx-5"
            />
          </div>
          <div v-else class="d-flex flex-wrap flex-row w-100 justify-center">
            <RecordCountCard
              v-for="(record, index) in recordStore.getCount.rows"
              :key="index"
              :data="record"
              class="ma-2 mx-5"
            />
          </div>
          <v-btn
            v-show="urlParams.mode === RecordMode.RECORD ?
              recordStore.getRecords.total !== recordStore.getRecords.rows.length :
              recordStore.getCount.total !== recordStore.getCount.rows.length"
            class="loading-button w-100"
            :loading="stateStore.isLoading"

            size="large"
            @click="loadMore"
          >
            查看更多
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay, useTheme } from 'vuetify'
import debounce from 'debounce'
import { RecordMode, Server } from '~/enums/record'
import { useRecordStore } from '~/stores/records.store'
import { useEventsStore } from '~/stores/events.store'
import { useApplicationStateStore } from '~/stores/state.store'
import type { fetchRecordOptions } from '~/@types/record'
import { useObserver } from '~/composables/useObserver'

const route = useRoute()
const display = useDisplay()
const theme = useTheme()
const eventsStore = useEventsStore()
const recordStore = useRecordStore()
const stateStore = useApplicationStateStore()

const page = ref(1)
const isFirstLoad = ref(true)

/*
  why scroller doesn't support multiple items in a row... :(
*/
await eventsStore.fetchEventsData()

const urlParams = computed(() => {
	return {
		mode: (route.query.type as RecordMode) ?? RecordMode.RECORD,
		type: (route.query.type as RecordMode) ?? RecordMode.RECORD,
		server: (route.query.server as Server) ?? Server.ALL,
		event: (route.query.event as string) ?? 'all',
		name: (route.query.name as string) ?? ''
	}
})

const urlSearch = computed(() => {
	const commonData: fetchRecordOptions = {
		limit: 30,
		dateBefore: (route.query.date as string) ?? null
	}

	if (urlParams.value.type === RecordMode.RECORD) {
		if (recordStore.getRecords.rows[recordStore.getRecords.rows.length - 1]?._id) {
			commonData.before = recordStore.getRecords.rows[recordStore.getRecords.rows.length - 1]._id
		}
	}

	return {
		...commonData,
		page: page.value
	}
})

const debouncedSearch = debounce(async () => {
	page.value = 1
	recordStore.resetData()
	window.scrollTo(0, 0)
	await recordStore.fetchRecords(urlParams.value, urlSearch.value)
}, 500)

watch(() => route.fullPath, async () => {
	if (isFirstLoad.value) {
		isFirstLoad.value = false
		await recordStore.fetchRecords(urlParams.value, urlSearch.value)
		return
	}
	debouncedSearch()
}, { deep: true, immediate: true })

useObserver('.loading-button', loadMore)

async function loadMore () {
	page.value++
	await recordStore.fetchRecords(urlParams.value, urlSearch.value, true)
}
</script>
