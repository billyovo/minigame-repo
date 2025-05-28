<template>
  <v-card
    :elevation="10"
    :width="250"
    class="pa-2"
  >
    <template #prepend>
      <img v-if="data.UUID === 'draw_result'" :src="imagePath" :height="30" :width="30" alt="平手圖示" />
      <NuxtImg v-else placeholder="/images/record/steve.jpg" :src="imagePath" :height="30" :width="30" :alt="`${data.name}玩家頭像`" />
    </template>
    <template #title>
      {{ data.name }}
    </template>
    <template #text>
      <v-row>
        <v-col cols="12" class="d-flex align-center">
          <span>勝利次數: {{ data.total }}</span>
        </v-col>
      </v-row>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import type { WinnerCountItem } from '~/@types/record'

const { data } = defineProps<{data: WinnerCountItem}>()

const imagePath = computed(() => {
	if (data.UUID === 'draw_result') {
		return '/images/record/draw.png'
	} else {
		return `https://crafatar.com/avatars/${data.UUID}?overlay=true`
	}
})
</script>
