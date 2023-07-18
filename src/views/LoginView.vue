<template>
  <div class="container">
    <div class="pt-[30px] flex gap-12 justify-end items-center">
      <div @click="authOverlay = true" class="hover:opacity-80 cursor-pointer">
        <p class="dashed">Вход</p>
      </div>

      <div class="border-gradient">
        <v-btn
          variant="outlined"
          rounded="xl"
          width="140"
          height="50"
          class="text-none border-none text-white"
          @click="registrationOverlay = true"
          >Регистрация
        </v-btn>
      </div>
    </div>
    <div class="flex h-full">
      <div class="flex flex-col gap-[30px] max-w-[640px] pt-[50px] relative">
        <img class="absolute -left-8 top-7" src="@/assets/img/pattern.svg" />
        <h1 class="font-medium text-[42px] leading-[48px]">
          Инновационная технология глубокого изучения геоданных
        </h1>
        <p class="font-normal text-[18px] leading-[28px]">
          Теоретические и методические основы разработки и внедрения инноваций
          GIS- технологий при визуализации и геопространственном моделировании
          базы данных объектов недвижимости
        </p>
        <div class="flex flex-col gap-[20px] max-w-[230px]">
          <v-btn
            theme="dark"
            height="40"
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
      <div class="relative z-[-1] glob-block overflow-hidden">
        <GlobeTexture class="absolute w-[82%] left-20 -top-14" />
        <GlobLines class="absolute w-[97%] -top-32 left-16" />
      </div>
    </div>

    <div class="h-[60px] flex items-center justify-between">
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
    @onQrSuccess="regToSuccsess"
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

.container {
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  height: 100vh;
}
.dashed {
  color: white;
  border-bottom: 1px dashed white;
}
.border-gradient {
  --border-width: 1px;
  --border-radius: 30px;
  --color-1: #e09423;
  --color-2: #e3562a;
}

.border-gradient {
  background: linear-gradient(to right, #e09423, #e3562a),
    linear-gradient(to right, #e09423, #e3562a);
  background-position: 26px 0, 26px 101%;
  background-repeat: no-repeat;
  background-size: calc(
      100% - var(--border-radius) - var(--border-radius) + 6px
    )
    var(--border-width);
  border: none;
}

.border-gradient:before,
.border-gradient:after {
  content: "";
  display: block;
  position: absolute;
  width: var(--border-radius);
  top: 0;
  bottom: 0;
}

.border-gradient:before {
  left: 0;
  border: var(--border-width) solid var(--color-1);
  border-top-left-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
  border-right-color: transparent;
}

.border-gradient:after {
  right: 0;
  border: var(--border-width) solid var(--color-2);
  border-top-right-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  border-left-color: transparent;
}

.glob-block {
  --block-width: 675px;
  width: 100%;
  max-width: var(--block-width);
}
</style>
