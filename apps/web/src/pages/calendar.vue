<template>
  <h1 class="text-h2 text-center font-weight-bold wand">
    時間表
  </h1>
  <v-container
    class="d-flex justify-center"
    :style="{height: '100vh'}"
  >
    <FullCalendar
      :options="calendarOption"
      class="w-100 h-75"
      :style="{ 'min-height': '600px'}"
    >
      <template #eventContent="arg">
        <v-btn
          class="h-100"
          :style="{background: 'transparent'}"
          block
          @click="clickedEvent = { title: arg.event.title, emote: arg.event.extendedProps.emote }"
        >
          <div
            class="d-flex align-center flex-column"
          >
            <span
              v-if="!display.mobile.value"
              class="d-block text-h6"
              :style="{'font-size': 'clamp(1rem, 1.5vw, 2rem)'}"
            >
              {{ arg.event.title }}
            </span>
            <div class="w-100 h-100">
              <img
                :src="`${config.public.baseURL}/logo/events/${arg.event.extendedProps.eventID}/${arg.event.extendedProps.eventID}.png`"
                :alt="arg.event.title"
                :style="{height: 'clamp(1rem, 7vw, 3rem)', width: 'clamp(1rem, 7vw, 3rem)'}"
              >
            </div>
          </div>
        </v-btn>
      </template>
    </FullCalendar>

    <v-snackbar
      v-model="shouldShowEventDetail"
      :timeout="3000"
      top
      color="info"
      location="top right"
      class="mt-2"
    >
      <span class="text-h5">{{ `${clickedEvent.emote} ${clickedEvent.title} ${clickedEvent.emote}` }}</span>

      <template #actions>
        <v-btn
          color="white"
          variant="text"
          @click="clickedEvent = { title: '', emote: '' }"
        >
          <v-icon color="white">
            mdi:mdi-close
          </v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import rrulePlugin from '@fullcalendar/rrule'
import zhLocale from '@fullcalendar/core/locales/zh-tw'
import { useEventsStore } from '~/stores/events.store'

const config = useRuntimeConfig()
const display = useDisplay()
const eventsStore = useEventsStore()
const { events } = storeToRefs(eventsStore)
const clickedEvent = ref({
	title: '',
	emote: ''
})

const shouldShowEventDetail = computed(() => {
	return !!clickedEvent.value.emote
})

const eventsSource = computed(() => {
	if (!events.value?.length) { return [] }

	return events.value.map((event) => {
		return {
			title: event.title,
			rrule: event.rrule,
			emote: event.emote,
			eventID: event.id

		}
	})
})

const calendarOption = ref({
	initialView: 'dayGridMonth',
	plugins: [dayGridPlugin, rrulePlugin],
	showNonCurrentDates: false,
	events: eventsSource,
	validRange: {
		start: new Date()
	},
	eventColor: 'transparent',
	locale: zhLocale
})

await eventsStore.fetchEventsData()
</script>

<style>
     :root{
        --fc-today-bg-color: transparent;
     }

     .fc-day-today > div > div > a {
      color: red;
      font-weight: bold;
     }

</style>
