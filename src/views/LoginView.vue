<template>
  <div class="flex flex-col justify-between h-[100vh]">
    <div class="pt-[40px] flex gap-12 justify-end items-center">
      <div @click="authOverlay = true" class="hover:opacity-80 cursor-pointer">
        <p class="dashed">Вход</p>
      </div>

      <v-btn
        variant="outlined"
        rounded="xl"
        width="158"
        height="47"
        color="#e09423"
        class="text-none reg-btn"
        @click="registrationOverlay = true"
        >Регистрация
      </v-btn>
    </div>

    <div class="flex items-center">
      <div class="flex items-center h-full">
        <div class="flex flex-col gap-[30px] relative">
          <img class="absolute -left-8 -top-4" src="@/assets/img/pattern.svg" />
          <h1 class="font-medium text-[40px] leading-[50px]">
            Инновационная технология глубокого изучения геоданных
          </h1>
          <p class="font-normal max-w-[450px] pb-[20px]">
            Теоретические и методические основы разработки и внедрения инноваций
            GIS- технологий при визуализации и геопространственном моделировании
            базы данных объектов недвижимости
          </p>
          <div class="flex flex-col gap-[30px] max-w-[240px]">
            <v-btn
              theme="dark"
              height="45"
              size="small"
              rounded="xs"
              class="text-none z-10"
              color="#C74B24"
              @click="registrationOverlay = true"
              >Провести сканирование</v-btn
            >
            <SocialIcons
              @openToQr="qrOverlay = true"
              @openToText="textPopup = true"
            />
          </div>
          <a href="#" rel="noopener noreferrer" target="_blank">
            <div class="flex items-center gap-2">
              <img class="w-6" src="@/assets/img/icon-warning.svg" />
              <p class="text-[--grey] hover:opacity-80">
                Предупреждение об ответственности
              </p>
            </div>
          </a>
        </div>

        <div class="relative z-[-1] w-full h-full left-10 overflow-hidden">
          <GlobeTexture class="absolute w-[78%] -top-16 left-6" />
          <GlobLines class="absolute w-[93%] -left-0 -top-[142px]" />
        </div>
      </div>
    </div>

    <div class="h-[70px] flex items-center justify-between">
      <div class="text-[--grey]">Geo Privacy, 2023</div>
      <div class="flex gap-8">
        <a href="#" rel="noopener noreferrer" target="_blank"
          ><p class="text-[--grey] hover:opacity-80">
            Предупреждение об ответственности
          </p>
        </a>
        <a href="#" rel="noopener noreferrer" target="_blank"
          ><p class="text-[--grey] hover:opacity-80">Карта сайта</p>
        </a>
        <a href="#" rel="noopener noreferrer" target="_blank">
          <p class="text-[--grey] hover:opacity-80">Вход и регистрация</p>
        </a>
      </div>
    </div>
  </div>
  <RegistrationPopup
    v-model="registrationOverlay"
    @click="closePopup"
    @onEnter="enterToAuth"
    @onQrPopup="regToSocial"
    @onSuccess="regToSuccsess"
  />
  <AuthPopup
    v-model="authOverlay"
    @click="closeAuthPopup"
    @onEnter="enterToRegistration"
    @onQrPopup="authToSocial"
  />
  <QRPopup v-model="qrOverlay" @closeQr="closeQRPopup" />
  <TextPopup v-model="textPopup" @click="closeTextPopup" />
  <SuccessPopup v-model="successPopup" @click="closeSuccessPopup" />
</template>

<script setup>
import GlobLines from "@/components/base/GlobLines.vue";
import GlobeTexture from "@/components/base/GlobeTexture.vue";
import SocialIcons from "@/components/base/SocialIcons.vue";
import RegistrationPopup from "@/components/popups/RegistrationPopup.vue";
import AuthPopup from "@/components/popups/AuthPopup.vue";
import QRPopup from "@/components/popups/QRPopup.vue";
import TextPopup from "@/components/popups/TextPopup.vue";
import SuccessPopup from "@/components/popups/SuccessPopup.vue";
import { ref } from "vue";

const qrOverlay = ref(false);
const registrationOverlay = ref(false);
const authOverlay = ref(false);
const textPopup = ref(false);
const successPopup = ref(false);

const closePopup = () => {
  registrationOverlay.value = false;
};

const closeAuthPopup = () => {
  authOverlay.value = false;
};

const closeQRPopup = () => {
  qrOverlay.value = false;
};

const closeTextPopup = () => {
  textPopup.value = false;
};

const closeSuccessPopup = () => {
  successPopup.value = false;
};

const enterToAuth = () => {
  registrationOverlay.value = false;
  authOverlay.value = true;
};
const enterToRegistration = () => {
  authOverlay.value = false;
  registrationOverlay.value = true;
};

const regToSocial = () => {
  registrationOverlay.value = false;
  qrOverlay.value = true;
};
const authToSocial = () => {
  authOverlay.value = false;
  qrOverlay.value = true;
};
const regToSuccsess = () => {
  registrationOverlay.value = false;
  successPopup.value = true;
};
</script>

<style lang="scss" scoped>
.reg-btn {
  letter-spacing: 0.025em;
}
.dashed {
  color: white;
  border-bottom: 1px dashed white;
}

.glob-block {
  --block-width: 675px;
  width: 100%;
  max-width: var(--block-width);
}
</style>
