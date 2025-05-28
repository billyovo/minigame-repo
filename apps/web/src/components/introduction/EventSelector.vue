<template>
  <v-row v-if="!display.mobile.value" class="w-100 mt-1">
    <v-col cols="12" class="d-flex justify-center">
      <NuxtLink to="/introduction" active-class="current-link">
        <v-chip :ripple="false" size="large" :color="route.path === '/introduction' ? theme.current.value.colors['secondary-lighten'] : ''">
          <span class="font-weight-bold">簡介</span>
        </v-chip>
      </NuxtLink>
    </v-col>
    <v-col cols="12" class="d-flex justify-center flex-wrap mt-1">
      <NuxtLink v-for="event in chipsEvents" :key="event.id" :to="event.toLink" active-class="current-link" class="mt-2">
        <v-chip size="large" :ripple="false" class="mx-2" :color="route.path === event.toLink ? theme.current.value.colors.secondary : ''">
          <template #prepend>
            <img :alt="event.title" :src="event.img" :height="30" :width="30">
          </template>
          <span class="ml-2">{{ event.title }}</span>
        </v-chip>
      </NuxtLink>
    </v-col>
  </v-row>

  <v-bottom-sheet v-else :max-height="'50vh'">
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
        icon="mdi:mdi-menu"
        :color="theme.current.value.colors.secondary"
        :style="{position: 'fixed', bottom: 0, right: '30px', 'margin-bottom': '60px'}"
      />
    </template>

    <v-card
      title="選擇活動簡介"
    >
      <div class="d-flex justify-center flex-wrap">
        <NuxtLink to="/introduction">
          <v-card class="ma-6" :elevation="5">
            <img alt="小遊戲大廳" src="/images/events/lobby.png" :height="150">
            <v-card-text class="d-flex align-center">
              <span>活動簡介</span>
            </v-card-text>
          </v-card>
        </NuxtLink>
        <NuxtLink v-for="event in chipsEvents" :key="event.id" :to="event.toLink">
          <v-card class="ma-6" :elevation="5">
            <img :alt="event.title" :src="event.arenaImg" :height="150">
            <v-card-text class="d-flex align-center">
              <img :alt="event.title" :src="event.img" class="mr-2" :height="30">
              <span>{{ event.title }}</span>
            </v-card-text>
          </v-card>
        </NuxtLink>
      </div>
    </v-card>
  </v-bottom-sheet>
</template>

<script setup lang="ts">
import { useTheme, useDisplay } from 'vuetify'
import type { EventData } from '~/@types/events'

const display = useDisplay()
const theme = useTheme()
const route = useRoute()
const config = useRuntimeConfig()

const { data } = await useFetch(() => `${config.public.baseURL}/events`)
const events = computed<EventData[]>(() => (data.value ?? []) as EventData[])

const chipsEvents = computed(() => {
	const existingEvents = events.value.map((event) => {
		return {
			id: event.id,
			title: event.title,
			img: `/images/events/${event.id}/${event.id}.png`,
			arenaImg: `/images/events/${event.id}/${event.id}_arena.png`,
			toLink: `/introduction/${event.id}`
		}
	})
	existingEvents.push({
		id: 'maze',
		title: '赤翠迷蹤',
		img: '/images/events/maze/maze.png',
		arenaImg: '/images/events/maze/maze_arena.png',
		toLink: '/introduction/maze'
	})
	return existingEvents
})
</script>

<style scoped>
    .v-chip:hover{
        cursor: pointer;
    }

</style>
