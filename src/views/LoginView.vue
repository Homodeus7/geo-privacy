<template>
  <div class="pt-[50px] flex gap-12 justify-end">
    <v-btn
      variant="outlined"
      color="#E09423"
      class="text-none font-medium hover:text-[--green]"
      @click="authOverlay = !authOverlay"
      >Вход
    </v-btn>
    <AuthPopup
      v-model="authOverlay"
      @click="closeAuthPopup"
      @onEnter="enterToRegistration"
    />
    <v-btn
      variant="outlined"
      color="#E09423"
      class="text-none font-medium hover:text-[--green]"
      @click="registrationOverlay = !registrationOverlay"
      >Регистрация
    </v-btn>
    <RegistrationPopup
      v-model="registrationOverlay"
      @click="closePopup"
      @onEnter="enterToAuth"
    />
  </div>
  <div class="flex">
    <div class="flex flex-col gap-[50px] max-w-[675px] pt-[75px] flex-auto relative">
      <img class="absolute -left-8 top-12" src="@/assets/img/pattern.svg" />
      <h1 class="font-medium text-[48px] leading-[58px]">
        Инновационная технология глубокого изучения геоданных
      </h1>
      <p class="font-normal text-[20px] leading-[28px]">
        Теоретические и методические основы разработки и внедрения инноваций GIS-
        технологий при визуализации и геопространственном моделировании базы данных
        объектов недвижимости
      </p>
      <div class="flex flex-col gap-[50px] max-w-[258px]">
        <v-btn
          theme="dark"
          height="52"
          rounded="xs"
          class="text-none z-10"
          color="#C74B24"
          @click="scanningOverlay = !scanningOverlay"
          >Провести сканирование</v-btn
        >

        <ScanningPopup v-model="scanningOverlay" @click="closeScanningPopup" />
        <SocialIcons />
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
      <a href="#" rel="noopener noreferrer" target="_blank">
        <div class="flex items-center gap-2">
          <img class="w-6" src="@/assets/img/icon-warning.svg" />
          <p class="text-[--grey] hover:text-[#929395]">
            Предупреждение об ответственности
          </p>
        </div>
      </a>
    </div>
    <div class="relative">
      <img src="@/assets/img/glob.svg" class="w-full" />
      <GlobImage class="absolute -top-20 left-0 w-[95%]" />
    </div>
  </div>

  <div class="h-[80px] flex items-center justify-between">
    <div class="text-[--grey]">Geo Privacy, 2023</div>
    <div class="text-[--grey]">Geo Privacy, 2023</div>
  </div>
</template>

<script setup>
import SocialIcons from "@/components/base/SocialIcons.vue";
import ScanningPopup from "@/components/popups/ScanningPopup.vue";
import RegistrationPopup from "@/components/popups/RegistrationPopup.vue";
import AuthPopup from "@/components/popups/AuthPopup.vue";
import { useRouter } from "vue-router";
import { useLoginForm } from "@/use/login-form";
import { ref, computed } from "vue";
import GlobImage from "@/components/base/GlobImage.vue";


const router = useRouter();

const registrationOverlay = ref(false);
const authOverlay = ref(false);
const scanningOverlay = ref(false);

const closePopup = () => {
  registrationOverlay.value = false;
};

const closeScanningPopup = () => {
  scanningOverlay.value = false;
};

const closeAuthPopup = () => {
  authOverlay.value = false;
};

const enterToAuth = () => {
  registrationOverlay.value = false;
  authOverlay.value = true;
};
const enterToRegistration = () => {
  authOverlay.value = false;
  registrationOverlay.value = true;
};

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
