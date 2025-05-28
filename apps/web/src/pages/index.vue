<template>
  <div>
    <NavigationBar transparent icon-color="white" />
    <section class="landing d-flex flex-column-reverse align-center">
      <div class="w-100 h-50 d-flex justify-center">
        <v-tooltip location="top" height="60" width="200" :open-on-click="true">
          <template #activator="{ props }">
            <img
              src="/images/background/avatar.png"
              alt="小遊戲小妹"
              class="w-100 h-100 mascot"
              v-bind="props"
            >
          </template>
          <span class="text-h3 text-white">你好嗎</span>
        </v-tooltip>
      </div>
      <div class="w-75 d-flex align-center flex-column appear">
        <h1 class="style-font mb-10 text-yellow-darken-2 text-h1">
          小遊戲
        </h1>
        <h2 class="style-font text-h3 text-white">
          星期一、三、五、六晚上舉行
        </h2>
      </div>
    </section>

    <section class="pa-12">
      <v-container :style="{ 'max-width': '1000px' }">
        <h1 class="text-h2 text-center font-weight-bold wand">
          通知
        </h1>
        <NewsItem v-for="news in getNewsListFormatted.rows" :key="news._id" :news="news" />

        <div class="d-flex justify-center">
          <NuxtLink to="/news">
            <v-btn size="x-large" class="mt-12" color="secondary">
              查看更多
            </v-btn>
          </NuxtLink>
        </div>
      </v-container>
    </section>
    <FooterBar />
  </div>
</template>

<script setup lang="ts">
import { useNewsStore } from '../stores/news.store'

const newsStore = useNewsStore()

const { getNewsListFormatted } = storeToRefs(newsStore)
await newsStore.fetchNewsList()

definePageMeta({
	layout: false
})
</script>

<style scoped>
    .landing{
        background-image: url("~/public/images/background/landing.webp");
        background-size: cover;
        background-repeat: no-repeat;
        width: 100vw;
        height: 100vh;
    }
    .mascot {
      max-width: 1000px;
      min-height: 350px;
      animation: pop-up-from-bottom 1s cubic-bezier(0.2, 0.575, 0.7, 1) forwards;
    }

    .appear{
      animation: cinematic-appear 1s cubic-bezier(0.2, 0.575, 0.7, 1) forwards;
      animation-delay: 0.8s;

      opacity: 0;
    }

    @keyframes pop-up-from-bottom {
      0% {
        transform: translateY(100%);
      }
      100% {
        transform: translateY(0);
      }
    }

    @keyframes cinematic-appear{
      0%{
        opacity: 0;
      }
      100%{
        opacity: 1;
      }
    }

</style>
