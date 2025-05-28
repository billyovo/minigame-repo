<template>
  <h1 class="text-h3 text-center font-weight-bold wand">
    忘掉那 無形鎖
  </h1>
  <v-container
    class="d-flex align-center flex-column"
  >
    <EventSelector />

    <div class="container mt-5 w-100">
      <img src="/images/events/boat/boat_arena.png" alt="忘掉那 無形鎖遊戲場地" class="w-100">
    </div>

    <v-row
      class="mt-4 w-100 text-container"
    >
      <v-col cols="2" class="text-secondary">
        <h2>遊戲規則</h2>
      </v-col>
      <v-col cols="10" class="d-flex flex-column ga-4">
        <p>以弓或弩射出炸彈箭, 箭矢會定時增加, 最多8根</p>

        <p>金色箭矢會隨機從天而降, 射出的炸彈威力更強</p>

        <p>把所有人炸下暗海磷石平台, 最後一人為勝者</p>

        <p>苦力怕掉下來會炸掉地板喔(☉д⊙)</p>
      </v-col>

      <v-col cols="2" class="text-secondary">
        <h2>勝利獎勵</h2>
      </v-col>
      <v-col cols="10" class="d-flex align-center">
        <img src="/images/events/cannon/cannon_winner.png" alt="忘掉那 無形鎖 勝出者獎勵" class="w-100">
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import EventSelector from '~/components/introduction/EventSelector.vue'

useHead({
	title: 'DC 築夢物語 - 忘掉那 無形鎖'
})
</script>
