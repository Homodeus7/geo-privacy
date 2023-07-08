<template>
  <v-overlay class="flex items-center justify-center">
    <div class="p-8 bg-[--black-middle] flex-col gap-4 relative rounded-md">
      <div class="absolute right-5 top-5">
        <v-btn
          theme="dark"
          density="compact"
          icon="mdi-plus"
          class="rotate-45 z-10"
          color="#E02A23"
          @click="clickOnButton"
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

<script setup>
import { ref } from "vue";

const active = ref(false);
const emit = defineEmits(["click"]);

const clickOnButton = () => {
  emit("click");
};
</script>
