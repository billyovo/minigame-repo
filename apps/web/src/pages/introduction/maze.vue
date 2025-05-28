<template>
  <h1 class="text-h3 text-center font-weight-bold wand">
    赤翠迷蹤
  </h1>
  <v-container
    class="d-flex align-center flex-column"
  >
    <EventSelector />

    <div class="container mt-5 w-100">
      <img src="/images/events/maze/maze_arena.png" alt="赤翠迷蹤遊戲場地" class="w-100">
    </div>

    <v-row
      class="mt-4 w-100 text-container"
    >
      <v-col cols="2" class="text-secondary">
        <h2>遊玩須知</h2>
      </v-col>
      <v-col cols="10" class="d-flex align-center">
        <ul>
          <li>
            進入迷宮前記得向入口處右邊的智慧樹莓拿裝備
          </li>
          <li>
            迷宮共有五層, 給予飄浮效果前往下一層的東西有機會在牆壁上, 在地上找不到就要抬頭找找看了
          </li>
          <li>
            到達迷宮終點能領取參加獎
          </li>
        </ul>
      </v-col>
      <v-col cols="2" class="text-secondary">
        <h2>迷宮記錄點須知</h2>
      </v-col>
      <v-col cols="10" class="d-flex align-center">
        <ul>
          <li>
            迷宮内設有6個記錄點, 可以在死亡或重返迷宮時找入口處右邊的智慧藍莓傳送至已解鎖的記錄點
          </li>
          <li>
            記錄點會與迷宮同時重置
          </li>
        </ul>
      </v-col>

      <v-col cols="2" class="text-secondary">
        <h2>獎勵兌換</h2>
      </v-col>
      <v-col cols="10" class="d-flex align-center">
        <ul>
          <li>
            每個玩家在一個周期内總共可以點擊 8 個莓果叢, 到達上限之後再點其他莓果叢也不會有反應
          </li>
          <li>
            迷宮重置時只會重置每周期點8個莓果叢的限制, 不會清除沒有兌換完的莓果粒
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import EventSelector from '~/components/introduction/EventSelector.vue'

useHead({
	title: 'DC 築夢物語 - 赤翠迷蹤'
})
</script>

<style>
    .container{
        max-width: 1000px;
    }
    .container img {
        object-fit: cover;
    }
    .text-container{
        max-width: 1200px;
    }
</style>
