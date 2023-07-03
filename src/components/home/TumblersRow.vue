<template>
  <div class="flex justify-between p-2 bg-[--black-middle]">
    <v-btn
      v-for="tumbler in tumblers"
      :key="tumbler.id"
      class="text-none text-white tumb"
      color="#2D2E33"
      height="49"
      padding-left="0"
      padding-right="0"
      @click="active = !active"
      >{{ tumbler.name }}: {{ tumbler.value }}
      <img
        class="pl-2 pt-1"
        v-if="active"
        src="@/assets/img/icon-arrow-up.svg"
      />
      <img class="pl-2 pt-1" v-else src="@/assets/img/icon-arrow-down.svg" />
    </v-btn>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const active = ref(false);

const tumblers = reactive([
  { link: "#", name: "Открытые порты", value: 1, id: 0 },
  { link: "#", name: "Найдено CVE", value: 10, id: 1 },
  { link: "#", name: "Найдено exploit", value: 1, id: 2 },
  { link: "#", name: "Поддомены", value: 1, id: 3 },
  { link: "#", name: "Vhost", value: 1, id: 4 },
  { link: "#", name: "Связанные IP адреса", value: 1, id: 5 },
  { link: "#", name: "Связанные URL", value: 1, id: 6 },
]);

const onTumbler = (id) => {
  active.value = !active.value;
};
</script>

<style lang="scss">
.tumb .v-btn__content {
  font-size: 12px;
  @media (min-width: 1568px) {
    font-size: 14px;
  }
}
</style>
