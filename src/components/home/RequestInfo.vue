<template>
  <div
    class="flex flex-col gap-7 min-w-[440px] p-5 bg-[--black-middle] rounded-md border-[1px] border-[#2D2E33]"
  >
    <div
      class="p-4 bg-[--black-middle] rounded-sm border-[1px] border-[#2D2E33]"
    >
      <div class="flex justify-between">
        <div class="flex flex-col">
          <p class="font-medium lowercase">https://geoprivacy.com</p>
          <p class="font-medium text-[--grey]">192.168.1.12</p>
        </div>
        <div class="flex gap-5">
          <div class="flex items-start gap-1">
            <img class="w-5" src="@/assets/img/icon-danger.svg" />
            <img class="w-5" src="@/assets/img/icon-exploit.svg" />
          </div>
          <v-btn
            density="compact"
            icon="mdi-plus"
            class="self-center"
            variant="plain"
            @click="active = !active"
          >
            <img class="pt-1" src="@/assets/img/icon-arrow-down.svg" />
          </v-btn>
        </div>
      </div>
    </div>
    <RequestItems v-if="active" />
  </div>
</template>

<script setup>
import RequestItems from "./RequestItems.vue";

import { ref } from "vue";

const active = ref(false);
</script>
