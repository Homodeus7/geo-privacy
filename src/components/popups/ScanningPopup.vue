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
        variant="underlined"
        placeholder="192.168.255.255"
        class="max-w-[190px] text"
      ></v-text-field>
      <div
        class="flex item-center gap-2 mb-5 px-2 py-[10px] border-[1px] border-[--green] max-w-[190px]"
      >
        <v-btn
          theme="dark"
          density="compact"
          icon="mdi-plus"
          class="z-10"
          color="#1d2926"
          @click="active = !active"
        ></v-btn>
        <p class="lowercase font-medium text-[14px] pt-1">расширенный скан</p>
      </div>
      <v-expand-transition>
        <div v-if="active" class="flex flex-col gap-4 pb-[16px]">
          <v-text-field
            bg-color="#27282D"
            theme="dark"
            density="compact"
            variant="solo"
            placeholder="Домен"
            hide-details="auto"
            class="max-w-[190px] field-scanning"
          ></v-text-field>
          <v-text-field
            bg-color="#27282D"
            theme="dark"
            density="compact"
            variant="solo"
            placeholder="IP"
            hide-details="auto"
            class="max-w-[190px] field-scanning"
          ></v-text-field>
          <v-text-field
            bg-color="#27282D"
            theme="dark"
            density="compact"
            variant="solo"
            placeholder="Ссылка"
            hide-details="auto"
            class="max-w-[190px] field-scanning"
          ></v-text-field>
          <v-text-field
            bg-color="#27282D"
            theme="dark"
            density="compact"
            variant="solo"
            placeholder="Логин"
            hide-details="auto"
            class="max-w-[190px] field-scanning"
          ></v-text-field>
          <v-text-field
            bg-color="#27282D"
            theme="dark"
            density="compact"
            variant="solo"
            placeholder="Пароль"
            hide-details="auto"
            class="max-w-[190px] field-scanning pb-1"
          ></v-text-field>
        </div>
      </v-expand-transition>
      <v-btn
        theme="dark"
        rounded="0"
        height="47"
        width="190"
        class="text-none z-10 btn-text"
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

<style lang="scss">
.text input::placeholder {
  color: white;
  opacity: 1;
  font-size: 20px;
  text-align: center;
}

.field-scanning input::placeholder {
  color: var(--grey);
  opacity: 1;
  font-size: 16px;
  text-align: center;
}
.btn-text {
  font-size: 16px;
  letter-spacing: normal;
  font-weight: 400;
  letter-spacing: normal;
}
</style>
