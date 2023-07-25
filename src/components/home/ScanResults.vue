<template>
  <div class="flex justify-between pb-3">
    <div class="flex gap-10 pt-2">
      <v-btn
        density="compact"
        icon="mdi-plus"
        variant="plain"
        @click="active = !active"
      >
        <img src="@/assets/img/icon-left-arrow.svg" />
      </v-btn>
      <div class="flex flex-col gap-2">
        <h1 class="font-medium text-2xl">Результаты сканирования</h1>
        <div class="flex gap-2">
          <img src="@/assets/img/icon-refresh.svg" />
          <p class="text-sm font-medium text-[--grey] lowercase">
            последнее обновление
          </p>
          <p class="text-sm font-medium">18.12.2023</p>
        </div>
      </div>
    </div>
    <div class="flex gap-8 items-end">
      <div class="flex gap-2">
        <p class="text-sm font-medium text-[--grey] lowercase">
          Сохранить отчет
        </p>
        <v-btn
          v-for="button in buttons"
          theme="dark"
          size="small"
          class="tumb"
          color="#2D2E33"
        >
          {{ button.name }}
        </v-btn>
      </div>
      <div class="flex flex-col items-end gap-2">
        <div class="bg-[--blue-lighten] py-1 px-4 rounded">geoprivacy.com</div>
        <div class="flex gap-2">
          <img src="@/assets/img/icon-result-status.svg" />
          <p class="text-sm font-medium text-[--grey] lowercase">
            статус сканирования
          </p>
          <p class="text-sm font-medium lowercase">выполнено</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const buttons = ref([
  { name: "pdf", link: "#" },
  { name: "xls", link: "#" },
  { name: "html", link: "#" },
]);
</script>
<style lang="scss" scoped>
.tumb {
  font-size: 16px;
}
</style>
