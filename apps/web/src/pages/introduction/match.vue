<template>
  <h1 class="text-h3 text-center font-weight-bold wand">
    記憶極限
  </h1>
  <v-container
    class="d-flex align-center flex-column"
  >
    <EventSelector />

    <div class="container mt-5 w-100">
      <img src="/images/events/match/match_arena.png" alt="記憶極限遊戲場地" class="w-100">
    </div>

    <v-row
      class="mt-4 w-100 text-container"
    >
      <v-col cols="2" class="text-secondary">
        <h2>遊戲規則</h2>
      </v-col>
      <v-col cols="10" class="d-flex flex-column ga-4">
        <p>每回合開始時把地板的顔色記起來</p>
        <p>牆上顯示顔色後地板將不會有顔色</p>
        <p>憑記憶站到正確的顔色上, 最後一人為勝者</p>
        <p>畫面上方的BOSS血條代表各階段的時間</p>
      </v-col>

      <v-col cols="2" class="text-secondary">
        <h2>勝利獎勵</h2>
      </v-col>
      <v-col cols="10" class="d-flex align-center">
        <img src="/images/events/match/match_winner.png" alt="記憶極限 勝出者獎勵" class="w-100">
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import EventSelector from '~/components/introduction/EventSelector.vue'

useHead({
	title: 'DC 築夢物語 - 記憶極限'
})
</script>
