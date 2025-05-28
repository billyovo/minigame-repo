<script setup lang="ts">
import { useDisplay, useTheme } from 'vuetify'
import { useApplicationStateStore } from '~/stores/state.store'

const display = useDisplay()
const theme = useTheme()
const stateStore = useApplicationStateStore()
const { isSwipingDown } = storeToRefs(stateStore)

const { transparent, iconColor } = defineProps({
	transparent: {
		type: Boolean,
		default: false
	},

	iconColor: {
		type: String
	}
})

function toggleTheme () {
	const switchToTheme = theme.global.current.value.dark ? 'light' : 'dark'
	theme.global.name.value = switchToTheme

	localStorage.setItem('theme', switchToTheme)
}

onBeforeMount(() => {
	const themeName = localStorage.getItem('theme')
	if (themeName) {
		theme.global.name.value = themeName
	}
})

const themeIcon = computed(() => {
	return theme.global.current.value.dark ? 'mdi:mdi-white-balance-sunny' : 'mdi:mdi-moon-waning-crescent'
})

const isNavBarTransparent = computed(() => {
	return transparent || display.mobile.value
})

const computedIconColor = computed(() => {
	return iconColor || (isNavBarTransparent ? theme.current.value.colors['on-background'] : 'white')
})

</script>
<template>
  <v-app-bar
    :elevation="0"
    :color="isNavBarTransparent ? 'transparent' : theme.current.value.colors.primary"
  >
    <v-app-bar-title v-if="!display.mobile.value">
      <NuxtLink to="/">
        <img :src="'/images/logo/brand.png'" alt="築夢物語" :height="50" class="py-2">
      </NuxtLink>
    </v-app-bar-title>
    <v-spacer />

    <NuxtLink v-if="!display.mobile.value" to="/introduction" class="text-decoration-none text-white">
      <v-btn size="x-large">
        活動介紹
      </v-btn>
    </NuxtLink>

    <NuxtLink v-if="!display.mobile.value" to="/news" class="text-white">
      <v-btn size="x-large">
        通知
      </v-btn>
    </NuxtLink>

    <NuxtLink v-if="!display.mobile.value" to="/calendar" class="text-white">
      <v-btn size="x-large">
        時間表
      </v-btn>
    </NuxtLink>

    <NuxtLink v-if="!display.mobile.value" to="/record" class="text-white">
      <v-btn size="x-large">
        優勝記錄
      </v-btn>
    </NuxtLink>
    <v-btn aria-label="切換網頁顏色">
      <v-icon
        size="x-large"
        :color="computedIconColor"
        :icon="themeIcon"
        @click="toggleTheme"
      />
    </v-btn>
  </v-app-bar>

  <Transition name="fade">
    <v-bottom-navigation
      v-show="isSwipingDown && display.mobile.value"
      grow
      rounded
      :style="{position: 'fixed'}"
      :bg-color="theme.current.value.colors.primary"
    >
      <NuxtLink to="/introduction" class="text-white">
        <v-btn>
          <v-icon size="large" icon="mdi:mdi-text-box-outline" />
          <span>活動介紹</span>
        </v-btn>
      </NuxtLink>

      <NuxtLink to="/news" class="text-white">
        <v-btn>
          <v-icon size="large" icon="mdi:mdi-bell" />
          <span>通知</span>
        </v-btn>
      </NuxtLink>

      <NuxtLink to="/" class="text-white">
        <v-btn>
          <v-icon size="large" icon="mdi:mdi-home" />
          <span>首頁</span>
        </v-btn>
      </NuxtLink>

      <NuxtLink to="/calendar" class="text-white">
        <v-btn>
          <v-icon size="large" icon="mdi:mdi-calendar" />
          <span>時間表</span>
        </v-btn>
      </NuxtLink>

      <NuxtLink to="/record" class="text-white">
        <v-btn>
          <v-icon size="large" icon="mdi:mdi-trophy" />
          <span>優勝記錄</span>
        </v-btn>
      </NuxtLink>
    </v-bottom-navigation>
  </Transition>
</template>
