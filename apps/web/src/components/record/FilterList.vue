<template>
  <v-form>
    <v-row>
      <v-col>
        <h3 class="text-h5">
          類別
        </h3>
        <v-chip-group
          v-model="type"
          mandatory
          selected-class="text-secondary"
        >
          <v-chip
            :value="RecordMode.RECORD"
            @click="type = RecordMode.RECORD"
          >
            勝利紀錄
          </v-chip>
          <v-chip
            :value="RecordMode.COUNT"
            @click="type = RecordMode.COUNT"
          >
            勝利次數
          </v-chip>
        </v-chip-group>
        <v-divider class="my-2" />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h3 class="text-h5">
          伺服器
        </h3>
        <v-chip-group
          v-model="server"
          mandatory
          selected-class="text-secondary"
        >
          <v-chip
            :value="Server.ALL"
            @click="server = Server.ALL"
          >
            全部
          </v-chip>
          <v-chip
            :value="Server.SURVIVAL"
            @click="server = Server.SURVIVAL"
          >
            生存
            <template #prepend>
              <img alt="生存" :src="'/images/server/survival.png'" :height="25" :width="25" class="mr-2">
            </template>
          </v-chip>
          <v-chip
            :value="Server.SKYBLOCK"
            @click="server = Server.SKYBLOCK"
          >
            空島
            <template #prepend>
              <img alt="空島" :src="'/images/server/skyblock.png'" :height="25" :width="25" class="mr-2">
            </template>
          </v-chip>
        </v-chip-group>
        <v-divider class="my-2" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h3 class="text-h5">
          活動
        </h3>
        <v-chip-group
          v-model="event"
          mandatory
          selected-class="text-secondary"
        >
          <v-chip
            v-for="eventData in events"
            :key="eventData.id"
            :value="eventData.id"
            @click="event = eventData.id"
          >
            {{ eventData.title }}
            <template v-if="eventData.emote" #prepend>
              <img :alt="eventData.title" :src="`/images/events/${eventData.id}/${eventData.id}.png`" :height="25" :width="25" class="mr-2">
            </template>
          </v-chip>
        </v-chip-group>
        <v-divider class="my-2" />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h3 class="text-h5">
          日期之前
        </h3>
        <VueDatePicker
          v-model="date"
          :dark="theme.current.value.dark"
          :max-date="new Date()"
          :min-date="new Date(2020,7,12)"
          format="yyyy-MM-dd"
          model-type="yyyy-MM-dd"
          position="right"
          select-text="選取"
          cancel-text="取消"
          locale="zh-tw"
          :day-names="['日','一','二','三','四','五','六']"
          :show-now-button="true"
          now-button-label="今天"
          :hide-navigation="['time', 'calendar']"
          :clearable="false"
        />
      </v-col>
      <v-divider class="my-2" />
    </v-row>

    <v-row>
      <v-col>
        <h3 class="text-h5">
          玩家名稱
        </h3>
        <v-text-field
          v-model="name"
          outlined
          dense
          placeholder="輸入完整玩家名稱..."
        />
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
import VueDatePicker from '@vuepic/vue-datepicker'
import { useRouter } from 'vue-router'
import type { EventData } from '~/@types/events'
import { RecordMode, Server } from '~/enums/record'

import '@vuepic/vue-datepicker/dist/main.css'

const route = useRoute()
const router = useRouter()
const config = useRuntimeConfig()
const theme = useTheme()

const { data } = await useFetch(() => `${config.public.baseURL}/events`)
const events = computed<EventData[]>(() => {
	const value : EventData[] = (data.value ?? []) as EventData[]
	return [{
		id: 'all',
		title: '全部',
		emote: '',
		rrule: ''
	}, ...value]
})

const type : Ref<RecordMode | ''> = ref('')
const server : Ref<Server | ''> = ref('')
const event = ref('')
const date : Ref<string | null> = ref(null)
const name : Ref<string> = ref('')

onMounted(() => {
	type.value = (route.query.type as RecordMode) ?? RecordMode.RECORD
	server.value = (route.query.server as Server) ?? Server.ALL
	event.value = (route.query.event as string) ?? 'all'
	date.value = (route.query.date as string) ?? null
	name.value = (route.query.name as string) ?? ''
})

watch([type, server, event, date, name], () => {
	router.push({
		query: { type: type.value, server: server.value, event: event.value, date: date.value, name: name.value }
	})
})
</script>

<style>
    div > .dp__action_button {
        display: flex;
        justify-content: center;
        width: 50px;
    }
</style>
