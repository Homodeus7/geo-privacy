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
          theme="dark"
          density="compact"
          variant="solo"
          label="Email адрес"
          hide-details="auto"
          class="w-full text-green"
        ></v-text-field>
        <v-text-field
          theme="dark"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          variant="solo"
          label="Пароль"
          hide-details="auto"
          class="w-full text-green"
          @click:append-inner="visible = !visible"
        ></v-text-field>
        <p class="text-[#828282] text-[12px] leading-[15px]">
          Сайт защищен с помощью reCAPTCHA и вы принимаете политику
          конфиденциальности и условия предоставления услуг Google.
        </p>
        <div class="flex">
          <div class="-left-2 -top-3 z-10">
            <v-checkbox v-model="terms" color="#424242"></v-checkbox>
          </div>
          <p class="text-[#828282] text-[12px] leading-[15px] pl-6">
            Я принимаю условия Пользовательского соглашения и даю свое согласие
            Яндексу на обработку моей персональной информации на условиях,
            определенных Политикой конфиденциальности.
          </p>
        </div>
      </div>
      <v-btn
        theme="dark"
        size="large"
        height="40"
        rounded="sx"
        class="text-none z-10 w-full"
        color="#C74B24"
        >Создать аккаунт
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
      <div class="flex justify-between w-fulls py-5">
        <v-btn
          theme="dark"
          rounded="0"
          height="36"
          width="36"
          icon="mdi"
        ></v-btn>
        <v-btn
          theme="dark"
          rounded="0"
          height="36"
          width="36"
          icon="mdi"
        ></v-btn>
        <v-btn
          theme="dark"
          rounded="0"
          height="36"
          width="36"
          icon="mdi"
        ></v-btn>
        <v-btn
          theme="dark"
          rounded="0"
          height="36"
          width="36"
          icon="mdi"
        ></v-btn>
      </div>
      <p class="text-center">У вас есть аккаунт? <span>Войти</span></p>
    </div>
  </v-overlay>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useLoginForm } from "@/use/login-form";
import { ref, computed } from "vue";

const router = useRouter();
const visible = ref(false);
const terms = ref(false);
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

const active = ref(false);
const emit = defineEmits(["click"]);

const clickOnButton = () => {
  emit("click");
};
</script>

<style lang="scss"></style>
