<script setup lang="ts">
import type { NewsItemBrief } from '~/@types/news'

const { news } = defineProps<{news: NewsItemBrief}>()

const dateFormatted = computed(() => {
	return news.publish_date.replaceAll('-', '.')
})

const newsLink = computed(() => {
	return `/news/${news._id}`
})
</script>

<template>
  <nuxt-link
    :to="newsLink"
    class="w-100 text text-decoration-none "
  >
    <v-row
      class="pa-7 animate-border highlight"
    >
      <v-col sm="3" md="2" class="text-secondary font-weight-bold">
        {{ dateFormatted }}
      </v-col>
      <v-col class="font-weight-medium ellipsis">
        {{ news.title }}
      </v-col>
    </v-row>
  </nuxt-link>
</template>

<style scopd>
.highlight:hover, .highlight:active{
  color: rgb(var(--v-theme-secondary));
  transition: color .25s cubic-bezier(.2,.575,.7,1);
}

.animate-border{
  position: relative;
  border-bottom: solid 1px rgba(var(--v-theme-secondary), 0.7);
  box-sizing: border-box;
}

.animate-border::before{
	content: '';
	position: absolute;
	left: 0;
	bottom: -1px;
	width: 0;
	border-bottom: solid 1px rgb(var(--v-theme-secondary));
  box-sizing: border-box;
}

.animate-border:hover::before,.animate-border:active::before{
  animation: draw-border 0.5s linear forwards;
}

.animate-border:hover, .animate-border:active{
  border-color: transparent;
}

.ellipsis{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
@keyframes draw-border {
	0%{
		width: 0%;
	}
	100%{
		width: 100%;
	}
}
</style>
