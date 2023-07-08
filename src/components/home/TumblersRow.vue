<template>
  <div class="flex justify-between p-2 bg-[--black-middle]">
    <v-btn
      v-for="tumbler in tumblers"
      :key="tumbler.id"
      class="text-none text-white tumb"
      :class="{
        'active-tumb': tumbler.active,
        'inactive-tumb': !tumbler.active,
      }"
      height="49"
      padding-left="0"
      padding-right="0"
      @click="tumbler.active = !tumbler.active"
      >{{ tumbler.name }}: {{ tumbler.value }}
      <div class="w-[21px]">
        <img
          class="pl-2 pt-1"
          v-if="tumbler.active"
          src="@/assets/img/icon-arrow-up.svg"
        />
        <img class="pl-2 pt-1" v-else src="@/assets/img/icon-arrow-down.svg" />
      </div>
    </v-btn>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const tumblers = reactive([
  { link: "#", name: "Открытые порты", value: 1, id: 0, active: false },
  { link: "#", name: "Найдено CVE", value: 10, id: 1, active: false },
  { link: "#", name: "Найдено exploit", value: 1, id: 2, active: false },
  { link: "#", name: "Поддомены", value: 1, id: 3, active: false },
  { link: "#", name: "Vhost", value: 1, id: 4, active: false },
  { link: "#", name: "Связанные IP адреса", value: 1, id: 5, active: false },
  { link: "#", name: "Связанные URL", value: 1, id: 6, active: false },
]);
</script>

<style lang="scss">
.tumb .v-btn__content {
  font-size: 12px;
  @media (min-width: 1568px) {
    font-size: 14px;
  }
}
.active-tumb {
  background-color: #c74b24;
}

.inactive-tumb {
  background-color: #2d2e33;
}
</style>
