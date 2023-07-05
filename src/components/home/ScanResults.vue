<template>
  <div class="flex justify-between pb-14">
    <div class="flex flex-col items-center">
      <div class="flex items-center gap-10">
        <v-btn
          density="compact"
          icon="mdi-plus"
          class="self-center"
          variant="plain"
          @click="active = !active"
        >
          <img src="@/assets/img/icon-left-arrow.svg" />
        </v-btn>

        <p class="font-medium text-3xl">Результаты сканирования</p>
      </div>
      <div class="flex items-center gap-2">
        <img src="@/assets/img/icon-refresh.svg" />
        <p class="font-medium text-[--grey] lowercase">последнее обновление</p>
        <p class="font-medium">18.12.2023</p>
      </div>
    </div>
    <div class="flex gap-8 items-end">
      <div class="flex gap-2">
        <p class="font-medium text-[--grey] lowercase">Сохранить отчет</p>
        <a href="#" download>
          <p class="font-medium bg-[--black-middle] px-2">PDF</p>
        </a>
        <a href="#" download>
          <p class="font-medium bg-[--black-middle] px-2">XLS</p>
        </a>
        <a href="#" download>
          <p class="font-medium bg-[--black-middle] px-2">HTML</p>
        </a>
      </div>
      <div class="flex flex-col items-end gap-2">
        <div class="bg-[--blue-lighten] py-1 px-4 rounded">geoprivacy.com</div>
        <div class="flex gap-2">
          <img src="@/assets/img/icon-result-status.svg" />
          <p class="font-medium text-[--grey] lowercase">статус сканирования</p>
          <p class="font-medium lowercase">выполнено</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
