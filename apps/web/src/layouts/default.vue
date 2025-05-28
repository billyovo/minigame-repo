<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useApplicationStateStore } from '../stores/state.store'

const stateStore = useApplicationStateStore()
const { errorMessage } = storeToRefs(stateStore)

const shouldRenderErrorMessage = computed(() => {
	return !!errorMessage.value
})
</script>

<template>
  <v-layout>
    <v-main class="mt-2">
      <NavigationBar />
      <slot />
      <FooterBar />
    </v-main>

    <v-snackbar
      v-model="shouldRenderErrorMessage"
      :timeout="3000"
      top
      color="error"
      location="top right"
      class="mt-2"
    >
      {{ errorMessage }}

      <template #actions>
        <v-btn
          color="white"
          variant="text"
          @click="stateStore.setError('')"
        >
          <v-icon color="white">
            mdi:mdi-close
          </v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-layout>
</template>
