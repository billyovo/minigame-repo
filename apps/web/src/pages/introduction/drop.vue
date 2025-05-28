<template>
  <h1 class="text-h3 text-center font-weight-bold wand">
    高空墜落
  </h1>
  <v-container
    class="d-flex align-center flex-column"
  >
    <EventSelector />

    <div class="container mt-5 w-100">
      <img src="/images/events/drop/drop_arena.png" alt="高空墜落遊戲場地" class="w-100">
    </div>

    <v-row
      class="mt-4 w-100 text-container"
    >
      <v-col cols="2" class="text-secondary">
        <h2>遊戲規則</h2>
      </v-col>
      <v-col cols="10" class="d-flex flex-column ga-4">
        <p>每回合有10秒時間尋找合適的位置往下跳</p>
        <p>倒數結束後平台的地板會消失</p>
        <p>只能降落在白色混凝土上, 否則會被淘汰</p>
        <p>成功降落時會將附近地板填色</p>
        <p>所有人都墜落完成會開始新一回合, 最後一人為勝者</p>
      </v-col>

      <v-col cols="2" class="text-secondary">
        <h2>勝利獎勵</h2>
      </v-col>
      <v-col cols="10" class="d-flex align-center">
        <img src="/images/events/drop/drop_winner.png" alt="高空墜落 勝出者獎勵" class="w-100">
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import EventSelector from '~/components/introduction/EventSelector.vue'

useHead({
	title: 'DC 築夢物語 - 高空墜落'
})
</script>
