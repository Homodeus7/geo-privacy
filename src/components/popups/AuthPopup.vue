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
      <div class="flex flex-col items-center pb-[16px]">
        <div class="font-medium text-[20px] text pb-[15px]">Авторизация</div>

        <v-text-field
          v-model="valid.email.value"
          :error-messages="valid.eError.value"
          theme="dark"
          bg-color="#27282D"
          density="compact"
          variant="solo"
          label="Email адрес"
          hide-details="auto"
          class="w-full field"
          content-class="elevation-0"
        ></v-text-field>
        <div
          class="py-1 w-full text-subtitle-1 text-medium-emphasis d-flex align-center justify-end"
        >
          <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Забыли пароль?</a
          >
        </div>
        <v-text-field
          dense
          v-model="valid.password.value"
          :error-messages="valid.pError.value"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          @click:append-inner="visible = !visible"
          @keyup.enter="login"
          theme="dark"
          density="compact"
          bg-color="#27282D"
          variant="solo"
          label="Пароль"
          hide-details="auto"
          class="w-full pb-[15px] field"
          content-class="elevation-0"
        ></v-text-field>
        <p class="text-[#828282] text-[14px] leading-[17px] text-center">
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
      </div>
      <div class="text-center">
        <v-btn
          :loading="loading"
          :disabled="!isValid"
          theme="dark"
          size="large"
          height="47"
          rounded="sx"
          class="text-none z-10 w-full btn-text"
          color="#23A04D"
          @click="login"
          >Войти
          <template>
            <v-progress-linear indeterminate></v-progress-linear>
          </template>
        </v-btn>
      </div>
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
        Нет аккаунта?
        <span
          class="text-[--yellow-plus] cursor-pointer"
          rel="noopener noreferrer"
          @click="enterAnotherPopup"
          >Регистрация</span
        >
      </p>
    </div>
  </v-overlay>
</template>

<script setup>
import SocialIcons from "@/components/base/SocialIcons.vue";
import { useRouter } from "vue-router";
import { useValidationFields } from "@/use/validation-fields";
import { ref, computed, watch } from "vue";

const router = useRouter();
const visible = ref(false);
const valid = { ...useValidationFields() };
const loading = ref(false);
const isValid = computed(
  () =>
    !!valid.email.value &&
    !!valid.password.value &&
    !valid.eError.value &&
    !valid.pError.value
);

const login = () => {
  if (isValid.value) {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      router.push("/home");
    }, 2000);
  }
};

const emit = defineEmits(["click", "onEnter", "onQrPopup"]);

const clickOnButton = () => {
  emit("click");
};

const enterAnotherPopup = () => {
  emit("onEnter");
};

const enterQrPopup = () => {
  emit("onQrPopup");
};
</script>

<style lang="scss">
.v-text-field label {
  font-size: 16px;
  color: var(--grey);
}
.btn-text {
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
}
</style>
