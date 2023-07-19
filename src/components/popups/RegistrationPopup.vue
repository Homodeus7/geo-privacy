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
      <div class="flex flex-col items-center gap-[15px] pb-[16px]">
        <div class="font-medium text-[20px] text">Регистрация</div>

        <v-text-field
          v-model="valid.email.value"
          :error-messages="valid.eError.value"
          theme="dark"
          bg-color="#27282D"
          density="compact"
          variant="solo"
          placeholder="Email адрес"
          hide-details="auto"
          class="w-full field"
        ></v-text-field>
        <v-text-field
          v-model="valid.password.value"
          :error-messages="valid.pError.value"
          theme="dark"
          bg-color="#27282D"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          variant="solo"
          placeholder="Пароль"
          hide-details="auto"
          class="w-full field"
          @click:append-inner="visible = !visible"
        ></v-text-field>
        <p class="text-[#828282] text-[12px] leading-[15px]">
          Сайт защищен с помощью reCAPTCHA и вы принимаете
          <a
            class="text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            >политику конфиденциальности</a
          >
          и
          <a
            class="text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
            >условия предоставления услуг</a
          >
          Google.
        </p>
        <div class="flex">
          <div class="-left-2 -top-3 z-10">
            <v-checkbox v-model="terms" color="#424242"></v-checkbox>
          </div>
          <p class="text-[#828282] text-[12px] leading-[15px] pl-6">
            Я принимаю условия
            <a
              class="text-decoration-none text-blue"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
              >Пользовательского соглашения</a
            >
            и даю свое согласие Яндексу на обработку моей персональной
            информации на условиях, определенных
            <a
              class="text-decoration-none text-blue"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
              >Политикой конфиденциальности.</a
            >
          </p>
        </div>
      </div>
      <v-btn
        :loading="loading"
        :disabled="!isValid || terms === false"
        theme="dark"
        size="large"
        height="40"
        rounded="sx"
        class="text-none z-10 w-full btn-text"
        color="#C74B24"
        @click="login"
        >Создать аккаунт
        <template>
          <v-progress-linear indeterminate></v-progress-linear>
        </template>
      </v-btn>
      <div class="flex items-center justify-between pt-10">
        <div class="border-t-[1px] border-[--grey] w-full"></div>
        <div
          class="h-[37px] border-[1px] border-[--grey] w-full rounded-sm flex items-center justify-center"
        >
          <span class="text-[#828282] font-medium text-[14px]">или</span>
        </div>
        <div class="border-t-[1px] border-[--grey] w-full"></div>
      </div>
      <SocialIcons @openToQr="enterQrPopup" />
      <p class="text-center">
        У вас есть аккаунт?
        <span
          class="text-[--yellow-plus] cursor-pointer"
          rel="noopener noreferrer"
          @click="enterAnotherPopup"
        >
          Войти
        </span>
      </p>
    </div>
  </v-overlay>
</template>

<script setup>
import SocialIcons from "../base/SocialIcons.vue";
import { useValidationFields } from "@/use/validation-fields";
import { ref, computed } from "vue";

const visible = ref(false);
const terms = ref(false);
const loading = ref(false);
const valid = { ...useValidationFields() };

const clickOnButton = () => {
  emit("click");
};

const enterAnotherPopup = () => {
  emit("onEnter");
};

const enterQrPopup = () => {
  emit("onQrPopup");
};

const login = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    emit("onQrSuccess");
  }, 1000);
};

const emit = defineEmits(["click", "onEnter", "onQrPopup", "onQrSuccess"]);

const isValid = computed(
  () =>
    !!valid.email.value &&
    !!valid.password.value &&
    !valid.eError.value &&
    !valid.pError.value
);
</script>
