<template>
  <h1 class="text-h3 text-center font-weight-bold wand">
    活動介紹
  </h1>
  <v-container
    class="d-flex align-center flex-column"
  >
    <EventSelector />

    <div class="container mt-5 w-100">
      <img src="/images/events/lobby.png" alt="小遊戲大廳" class="w-100">
    </div>

    <v-row
      class="mt-4 w-100 text-container"
    >
      <v-col cols="2" class="text-secondary">
        <h2>參加方法</h2>
      </v-col>
      <v-col cols="10" class="d-flex align-center">
        <p>築夢物語的小遊戲目前恆常舉行，玩家可以在伺服器的重生點點擊 小遊戲魔法使NPC 前往小遊戲大廳，往右走就可以根據指示前往小遊戲伺服器了。</p>
      </v-col>
      <v-col cols="2" class="text-secondary">
        <h2>遊戲獎勵</h2>
      </v-col>
      <v-col cols="10" class="d-flex align-center">
        <p>小遊戲結束後所有參加的玩家都可以得到參加獎勵 - 幻夢之碎片</p>
      </v-col>

      <v-col cols="2" class="text-secondary">
        <h2>獎勵兌換</h2>
      </v-col>
      <v-col cols="10" class="d-flex align-center">
        <p>
          玩家可以在小遊戲大廳的 小妹NPC 和 小遊戲大禮盒使用幻夢之碎片
          而獲勝的玩家在小遊戲結束的24小時後可以找小遊戲大廳的 小妹的朋友NPC 領取優勝獎勵。結合幻夢之碎片可以與 小妹的新朋友NPC 兌換更厲害的優勝物品喔
        </p>
      </v-col>

      <v-col cols="2" class="text-secondary">
        <h2>製作人員</h2>
      </v-col>
      <v-col cols="10" class="d-flex align-center">
        <p>billyovo, deadfish12, KnowledgeBerry</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import EventSelector from '~/components/introduction/EventSelector.vue'
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
