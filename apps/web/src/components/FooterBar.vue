<template>
  <v-footer
    class="bg-primary mt-12 text-center d-flex flex-column"
  >
    <div class="my-3">
      <NuxtLink
        v-for="social in socials"
        :key="social.icon"
        :to="social.link"
        aria-label="social.name"
        class="text-white"
      >
        <v-btn
          variant="text"
          class="mx-4"
          size="large"
          rounded
        >
          <v-icon size="x-large">
            {{ social.icon }}
          </v-icon>
        </v-btn>
      </NuxtLink>
    </div>

    <div class="pt-0">
      <NuxtLink to="https://minigame-api.letsdream.today/specs" class="ma-4 text-secondary">
        <span>小遊戲資訊API</span>
      </NuxtLink>
      <NuxtLink to="https://crafatar.com/" class="ma-4 text-secondary">
        <span>遊戲頭像使用</span>
      </NuxtLink>
      <NuxtLink to="http://azukifont.com/font/azuki.html" class="ma-4 text-secondary">
        <span>字體使用1</span>
      </NuxtLink>
      <NuxtLink to="https://github.com/max32002/pop-gothic" class="ma-4 text-secondary">
        <span>字體使用2</span>
      </NuxtLink>
    </div>

    <v-divider class="ma-3" />

    <div class="pa-3">
      <strong>Copyright © DreamCrafter {{ new Date().getFullYear() }}</strong>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
import '@fortawesome/fontawesome-free/css/all.css'
const socials = computed(() => [
	{
		icon: 'mdi:mdi-facebook',
		link: 'https://dcraft.org/facebook',
		name: '築夢物語Facebook連結'
	},
	{
		icon: 'mdi:mdi-twitter',
		link: 'https://twitter.com/DreamCrafter_MC',
		name: '築夢物語Twitter連結'
	},
	{
		icon: 'fa-brands fa-discord',
		link: 'https://dcraft.org/discord',
		name: '築夢物語Discord連結'
	},
	{
		icon: 'mdi:mdi-instagram',
		link: 'https://www.instagram.com/mc.dreamcrafter/',
		name: '築夢物語Instagram連結'
	}
])
</script>
