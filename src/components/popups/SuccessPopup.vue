<template>
  <v-overlay class="flex items-center justify-center">
    <div class="p-8 bg-[--black-middle] flex-col relative rounded-md w-[360px]">
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
      <div class="flex flex-col items-center gap-4 pt-6">
        <div class="font-medium text-[20px] text">
          Регистрация прошла успешно
        </div>
        <div>
          <p class="font-medium text-[--grey] text-center pb-5">
            Ваши регистрационные данные дублированы на вашу почту
          </p>
        </div>
      </div>
      <v-btn
        :loading="loading"
        theme="dark"
        size="large"
        height="40"
        rounded="sx"
        class="text-none z-10 w-full btn-text"
        color="#0066FF"
        @click="login"
        >Вернуться на сайт
        <template>
          <v-progress-linear indeterminate></v-progress-linear>
        </template>
      </v-btn>
    </div>
  </v-overlay>
</template>

<script setup>
import { useRouter } from "vue-router";

import { ref } from "vue";

const router = useRouter();
const loading = ref(false);

const login = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    router.push("/home");
  }, 2000);
};

const emit = defineEmits(["click"]);

const clickOnButton = () => {
  emit("click");
};
</script>
