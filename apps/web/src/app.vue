<template>
  <NuxtPwaManifest/>
  <v-app
    v-touch="{
      up: () => setIsSwipingDown(false),
      down: () => setIsSwipingDown(true)
    }"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>

<script setup lang="ts">
import { useApplicationStateStore } from '~/stores/state.store'
const stateStore = useApplicationStateStore()
const { setIsSwipingDown } = stateStore
</script>
