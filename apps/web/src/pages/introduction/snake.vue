<template>
  <h1 class="text-h3 text-center font-weight-bold wand">
    繽紛飛天蛇
  </h1>
  <v-container
    class="d-flex align-center flex-column"
  >
    <EventSelector />

    <div class="container mt-5 w-100">
      <img src="/images/events/snake/snake_arena.png" alt="繽紛飛天蛇遊戲場地" class="w-100">
    </div>

    <v-row
      class="mt-4 w-100 text-container"
    >
      <v-col cols="2" class="text-secondary">
        <h2>遊戲規則</h2>
      </v-col>
      <v-col cols="10" class="d-flex  flex-column ga-4">
        <p>遊戲開始前跳到飛天蛇上</p>
        <p>遊戲開始後飛天蛇會開始移動</p>
        <p>想辦法繼續留在蛇上, 最後一人為勝者</p>
      </v-col>

      <v-col cols="2" class="text-secondary">
        <h2>勝利獎勵</h2>
      </v-col>
      <v-col cols="10" class="d-flex align-center">
        <img src="/images/events/snake/snake_winner.png" alt="繽紛飛天蛇 勝出者獎勵" class="w-100">
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import EventSelector from '~/components/introduction/EventSelector.vue'

useHead({
	title: 'DC 築夢物語 - 繽紛飛天蛇'
})
</script>
