<template>
  <div>
    <div class="flex items-center justify-between pt-[30px] pb-[20px]">
      <div class="flex gap-4">
        <img class="w-10" src="@/assets/img/icon-scanning.svg" />
        <p class="font-medium text-2xl">Сканирование</p>
      </div>
      <v-btn
        variant="outlined"
        size="small"
        height="37"
        class="text-none scan-btn"
        @click="overlay = !overlay"
        >Сканировать
      </v-btn>
    </div>
    <ScanningPopup v-model="overlay" @click="closePopup" />
    <div
      v-for="(item, idx) in scanningResults"
      :key="idx"
      class="p-4 flex justify-between items-center bg-[#1E1F23] rounded-[3px] border-[1px] border-[#2D2E33] mb-[20px]"
    >
      <div class="flex flex-col gap-2 justify-center">
        <p class="font-medium">Угроза</p>
        <RatingCard :rating="item.rating" />
      </div>
      <div
        class="flex flex-col py-[10px] px-4 rounded-[3px] border-[1px] border-[#2D2E33]"
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
      <v-btn
        variant="outlined"
        height="37"
        width="182"
        class="text-none watch-btn"
        >Просмотреть результаты
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import ScanningPopup from "@/components/popups/ScanningPopup.vue";
import RatingCard from "@/components/base/RatingCard.vue";
import { reactive } from "vue";
import { ref } from "vue";

const overlay = ref(false);

const closePopup = () => {
  overlay.value = !overlay.value;
};

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

<style lang="scss" scoped>
.watch-btn {
  font-size: 11px;
  font-weight: 400;
  color: white;
  border-color: #23a04d;
}

.scan-btn {
  font-size: 14px;
  font-weight: 400;
  color: white;
  border-color: #e09423;
}
</style>
