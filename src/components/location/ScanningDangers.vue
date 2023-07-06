<template>
  <div class="flex items-center justify-between">
    <div class="flex gap-4">
      <img class="w-10" src="@/assets/img/icon-scanning.svg" />
      <p class="font-medium text-2xl">Сканирование</p>
    </div>
    <v-btn
      variant="outlined"
      color="#E09423"
      class="text-none font-medium hover:text-[--green]"
      @click="overlay = !overlay"
      >Сканировать
    </v-btn>
  </div>
  <template>
    <v-overlay v-model="overlay" class="flex items-center justify-center">
      <div class="p-8 bg-[--black-middle] flex-col gap-4 relative rounded-md">
        <div class="absolute right-5 top-5">
          <v-btn
            theme="dark"
            density="compact"
            icon="mdi-plus"
            class="rotate-45 z-10"
            color="#E02A23"
            @click="overlay = !overlay"
          ></v-btn>
        </div>
        <v-text-field
          theme="dark"
          variant="solo"
          placeholder="192.168.255.255"
          class="min-w-[190px] pt-8"
        ></v-text-field>
        <div
          class="flex item-center gap-2 mb-5 px-4 py-[10px] border-[1px] border-[--green]"
        >
          <v-btn
            theme="dark"
            density="compact"
            icon="mdi-plus"
            class="z-10"
            color="#1d2926"
            @click="active = !active"
          ></v-btn>
          <p class="lowercase font-medium">расширенный скан</p>
        </div>
        <v-expand-transition>
          <div v-if="active" class="flex flex-col gap-4 pb-[16px]">
            <v-text-field
              theme="dark"
              density="compact"
              variant="solo"
              label="Домен"
              hide-details="auto"
              class="min-w-[190px]"
            ></v-text-field>
            <v-text-field
              theme="dark"
              density="compact"
              variant="solo"
              label="IP"
              hide-details="auto"
              class="min-w-[190px]"
            ></v-text-field>
            <v-text-field
              theme="dark"
              density="compact"
              variant="solo"
              label="Ссылка"
              hide-details="auto"
              class="min-w-[190px]"
            ></v-text-field>
            <v-text-field
              theme="dark"
              density="compact"
              variant="solo"
              label="Логин"
              hide-details="auto"
              class="min-w-[190px]"
            ></v-text-field>
            <v-text-field
              theme="dark"
              density="compact"
              variant="solo"
              label="Пароль"
              hide-details="auto"
              class="min-w-[190px]"
            ></v-text-field>
          </div>
        </v-expand-transition>
        <v-btn
          theme="dark"
          size="large"
          rounded="0"
          class="text-none z-10"
          color="#23A04D"
          >Начать сканирование</v-btn
        >
      </div>
    </v-overlay>
  </template>
  <div
    v-for="(item, idx) in scanningResults"
    :key="idx"
    class="p-4 flex justify-between items-center bg-[#1E1F23] rounded-[3px] border-[1px] border-[#2D2E33]"
  >
    <div class="flex flex-col gap-2 justify-center">
      <p class="font-medium">Угроза</p>
      <RatingCard :rating="item.rating" />
    </div>
    <div
      class="flex flex-col gap-2 py-[10px] px-4 rounded-[3px] border-[1px] border-[#2D2E33]"
    >
      <p class="font-medium text-[--grey]">Цель:</p>
      <p class="font-medium">{{ item.aim }}</p>
    </div>
    <div class="flex flex-col gap-2 items-center">
      <p class="font-medium text-[--grey]">Открытые порты</p>
      <p class="font-medium w-min py-1 px-2 rounded-[3px] bg-[#2D2E33]">
        {{ item.openPorts }}
      </p>
    </div>
    <div class="flex flex-col gap-2 items-center">
      <p class="font-medium text-[--grey]">Поддоменов</p>
      <p class="font-medium w-min py-1 px-2 rounded-[3px] bg-[#2D2E33]">
        {{ item.subdomains }}
      </p>
    </div>
    <div class="flex flex-col gap-2 items-center">
      <p class="font-medium text-[--grey]">Vhosts</p>
      <p class="font-medium w-min py-1 px-2 rounded-[3px] bg-[#2D2E33]">
        {{ item.vhosts }}
      </p>
    </div>
    <div class="flex flex-col gap-2 items-center">
      <p class="font-medium text-[--grey]">Сязанные IP</p>
      <p class="font-medium w-min py-1 px-2 rounded-[3px] bg-[#2D2E33]">
        {{ item.ips }}
      </p>
    </div>
    <div class="flex flex-col gap-2 items-center">
      <p class="font-medium text-[--grey]">Сязанные URL</p>
      <p class="font-medium w-min py-1 px-2 rounded-[3px] bg-[#2D2E33]">
        {{ item.urls }}
      </p>
    </div>
    <div class="flex flex-col gap-2 items-center">
      <p class="font-medium text-[--grey]">Последнее сканирование</p>
      <p class="font-medium w-min py-1 px-2 rounded-[3px] bg-[#2D2E33]">
        {{ item.lastScan }}
      </p>
    </div>
    <v-btn variant="outlined" color="#23A04D" class="text-none font-[12px]"
      >Просмотреть результаты
    </v-btn>
  </div>
</template>

<script setup>
import RatingCard from "@/components/base/RatingCard.vue";
import { reactive } from "vue";
import { ref } from "vue";

const overlay = ref(false);
const active = ref(false);

const scanningResults = reactive([
  {
    rating: 1,
    aim: "geoprivacy.com",
    openPorts: 17,
    subdomains: 20,
    vhosts: 4,
    ips: 6,
    urls: 4,
    lastScan: "22.12.2023",
  },
  {
    rating: 5,
    aim: "geoprivacy.com",
    openPorts: 1,
    subdomains: 123,
    vhosts: 2,
    ips: 2,
    urls: 10,
    lastScan: "22.12.2023",
  },
  {
    rating: 3,
    aim: "geoprivacy.com",
    openPorts: 2,
    subdomains: 10,
    vhosts: 2,
    ips: 3,
    urls: 2,
    lastScan: "22.10.2023",
  },
]);
</script>
