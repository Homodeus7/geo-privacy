<template>
  <div class="pt-[50px] flex gap-12 justify-end">
    <v-btn
      variant="outlined"
      color="#E09423"
      class="text-none font-medium hover:text-[--green]"
      @click="overlay = !overlay"
      >Вход
    </v-btn>
    <v-btn
      variant="outlined"
      color="#E09423"
      class="text-none font-medium hover:text-[--green]"
      @click="overlay = !overlay"
      >Регистрация
    </v-btn>
  </div>
  <div
    class="flex flex-col gap-[50px] max-w-[675px] pt-[75px] flex-auto relative"
  >
    <img class="absolute -left-8 top-12" src="@/assets/img/pattern.svg" />
    <h1 class="font-medium text-[48px] leading-[58px]">
      Инновационная технология глубокого изучения геоданных
    </h1>
    <p class="font-normal text-[20px] leading-[28px]">
      Теоретические и методические основы разработки и внедрения инноваций GIS-
      технологий при визуализации и геопространственном моделировании базы
      данных объектов недвижимости
    </p>
    <div>
      <v-btn
        theme="dark"
        height="52"
        rounded="xs"
        class="text-none z-10"
        color="#C74B24"
        >Провести сканирование</v-btn
      >
    </div>
    <div class="flex justify-between w-[251px]">
      <v-btn theme="dark" rounded="0" height="36" width="36" icon="mdi"></v-btn>
      <v-btn theme="dark" rounded="0" height="36" width="36" icon="mdi"></v-btn>
      <v-btn theme="dark" rounded="0" height="36" width="36" icon="mdi"></v-btn>
      <v-btn theme="dark" rounded="0" height="36" width="36" icon="mdi"></v-btn>
    </div>
    <div class="flex items-center gap-2">
      <img class="w-6" src="@/assets/img/icon-warning.svg" />
      <p class="text-[--grey]">Предупреждение об ответственности</p>
    </div>
  </div>

  <div class="h-[80px] flex items-center justify-between">
    <div class="text-[--grey]">Geo Privacy, 2023</div>
    <div class="text-[--grey]">Geo Privacy, 2023</div>
  </div>
  <!-- <v-sheet
      min-width="300"
      class="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
    >
      <v-card color="eeeeee" class="w-[360px] h-[300px]">
        <v-progress-circular
          v-if="isLoading"
          indeterminate
          :size="100"
          :width="10"
          color="primary"
          class="ml-[130px] mt-[90px]"
        ></v-progress-circular>
        <v-form
          v-else
          class="w-[300px] h-[220px] mx-auto mt-10"
          validate-on="submit lazy"
          @submit.prevent="log"
        >
          <v-text-field
            v-model="valid.email.value"
            :error-messages="valid.eError.value"
            label="Login"
          ></v-text-field>
          <v-text-field
            v-model="valid.password.value"
            :error-messages="valid.pError.value"
            label="Password"
          ></v-text-field>
          <v-btn
            :disabled="!isValid"
            type="submit"
            elevated
            block
            class="text-none mt-4"
            color="primary"
            text="Login"
          ></v-btn>
        </v-form>
      </v-card>
    </v-sheet> -->
</template>

<script setup>
import { useRouter } from "vue-router";
import { useLoginForm } from "@/use/login-form";
import { ref, computed } from "vue";

const overlay = ref(false);
const router = useRouter();
const isLoading = ref(false);
const valid = { ...useLoginForm() };

const isValid = computed(
  () =>
    !!valid.email.value &&
    !!valid.password.value &&
    !valid.eError.value &&
    !valid.pError.value
);

const log = () => {
  if (isValid.value) {
    isLoading.value = true;
    setTimeout(() => {
      isLoading.value = false;
      router.push("/");
    }, 2000);
  }
};
</script>
