<template>
  <v-card
    :elevation="10"
    :width="250"
    class="pa-2"
  >
    <template #prepend>
      <img v-if="data.UUID === 'draw_result'" :src="imagePath" :height="30" :width="30" alt="平手圖示" />
      <NuxtImg v-else placeholder="/images/record/steve.jpg" :src="imagePath" :height="30" :width="30" :alt="`${data.name}玩家頭像`" />
      <div
        class="ribbon"
        :style="{backgroundColor: data.server === ServerChinese.SURVIVAL ? ServerColour.SURVIVAL : ServerColour.SKYBLOCK}"
      >
        {{ data.server }}
      </div>
    </template>
    <template #title>
      {{ data.name }}
    </template>
    <template #text>
      <v-row>
        <v-col cols="12" class="d-flex align-center">
          <img :alt="data.event" :src="`${config.public.baseURL}/logo/events/${eventID}/${eventID}.svg`" :height="25" :width="25">
          <span class="ml-1">{{ data.event }}</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex align-center">
          <v-icon size="large" class="mr-2" icon="mdi:mdi-calendar" />
          <span>{{ data.date }}</span>
        </v-col>
      </v-row>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import type { WinnerRecordItem } from '~/@types/record'
import { ServerChinese, ServerColour } from '~/enums/record'
import { useEventsStore } from '~/stores/events.store'
const config = useRuntimeConfig()

const eventsStore = useEventsStore()
const { data } = defineProps<{data: WinnerRecordItem}>()

const eventID = computed(() => {
	return eventsStore.getEventIDFromName(data.event)
})

const imagePath = computed(() => {
	if (data.UUID === 'draw_result') {
		return '/images/record/draw.png'
	} else {
		return `https://crafatar.com/avatars/${data.UUID}?overlay=true`
	}
})
</script>

<style scoped>
  .ribbon {
    position: absolute;
    left: -30px;
    top: 10px;
    width: 40px;
    background-color: #ff4081;
    color: white;
    padding: 5px;
    font-size: 14px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .v-card{
    overflow: visible;
  }
</style>
