<template>
  <h1 class="text-h3 text-center font-weight-bold wand">
    七彩羊駝保衛戰
  </h1>
  <v-container
    class="d-flex align-center flex-column"
  >
    <EventSelector />

    <div class="container mt-5 w-100">
      <img src="/images/events/boat/boat_arena.png" alt="七彩羊駝保衛戰遊戲場地" class="w-100">
    </div>

    <v-row
      class="mt-4 w-100 text-container"
    >
      <v-col cols="2" class="text-secondary">
        <h2>遊戲規則</h2>
      </v-col>
      <v-col cols="10" class="d-flex flex-column ga-4">
        <p>右鍵魔法棒向草泥馬發射魔咒, 每10秒可以發射8次魔咒</p>
        <p>☆不能同時移動和發射魔咒, 請慎重決定每一步行動☆</p>
        <p>保護自己的草泥馬, 把別人的全部殺死, 最後一人為勝者</p>
        <p>⟁ 建議遊玩時全程拿著魔法棒, 以免坐上草泥馬 ⟁</p>
      </v-col>

      <v-col cols="2" class="text-secondary">
        <h2>勝利獎勵</h2>
      </v-col>
      <v-col cols="10" class="d-flex align-center">
        <img src="/images/events/boat/boat_winner.png" alt="七彩羊駝保衛戰 勝出者獎勵" class="w-100">
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import EventSelector from '~/components/introduction/EventSelector.vue'

useHead({
	title: 'DC 築夢物語 - 七彩羊駝保衛戰'
})
</script>
