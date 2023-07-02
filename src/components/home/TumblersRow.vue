<template>
  <div class="flex justify-between p-2 bg-[--black-middle]">
    <v-btn
      v-for="tumbler in tumblers"
      class="text-none text-white"
      color="#2D2E33"
      height="49"
      append-icon="mdi-triangle"
      padding-left="0"
      padding-right="0"
      >{{ tumbler.name }}: {{ tumbler.value }}
    </v-btn>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const tumblers = reactive([
  { link: "#", name: "Открытые порты", value: 1 },
  { link: "#", name: "Найдено CVE", value: 10 },
  { link: "#", name: "Найдено exploit", value: 1 },
  { link: "#", name: "Поддомены", value: 1 },
  { link: "#", name: "Vhost", value: 1 },
  { link: "#", name: "Связанные IP адреса", value: 1 },
  { link: "#", name: "Связанные URL", value: 1 },
]);
</script>

<style lang="scss">
.v-btn__content {
  font-size: 12px;
}
</style>
