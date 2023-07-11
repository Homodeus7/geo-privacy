<template>
  <div class="flex flex-col justify-between h-[100vh]">
    <div class="pt-[40px] flex gap-12 justify-end items-center">
      <div @click="authOverlay = true" class="hover:opacity-80 cursor-pointer">
        <p class="dashed">Вход</p>
      </div>
      <AuthPopup
        v-model="authOverlay"
        @click="closeAuthPopup"
        @onEnter="enterToRegistration"
      />
      <div class="border-gradient">
        <v-btn
          variant="outlined"
          rounded="xl"
          width="158"
          height="55"
          class="text-none border-none text-white"
          @click="registrationOverlay = true"
          >Регистрация
        </v-btn>
      </div>
      <RegistrationPopup
        v-model="registrationOverlay"
        @click="closePopup"
        @onEnter="enterToAuth"
      />
    </div>
    <div class="flex flex-auto">
      <div class="flex flex-col gap-[40px] max-w-[675px] pt-[75px] relative">
        <img class="absolute -left-8 top-12" src="@/assets/img/pattern.svg" />
        <h1 class="font-medium text-[48px] leading-[58px]">
          Инновационная технология глубокого изучения геоданных
        </h1>
        <p class="font-normal text-[20px] leading-[28px]">
          Теоретические и методические основы разработки и внедрения инноваций
          GIS- технологий при визуализации и геопространственном моделировании
          базы данных объектов недвижимости
        </p>
        <div class="flex flex-col gap-[40px] max-w-[258px]">
          <v-btn
            theme="dark"
            height="52"
            rounded="xs"
            class="text-none z-10"
            color="#C74B24"
            @click="registrationOverlay = true"
            >Провести сканирование</v-btn
          >
          <SocialIcons />
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

      <div class="relative mt-16 z-[-1] glob-block left-28">
        <GlobeTexture class="absolute w-[80%] left-6 -top-5" />
        <GlobLines class="absolute -top-20 glob-lines" />
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
</template>

<script setup>
import GlobLines from "@/components/base/GlobLines.vue";
import GlobeTexture from "@/components/base/GlobeTexture.vue";
import SocialIcons from "@/components/base/SocialIcons.vue";
import RegistrationPopup from "@/components/popups/RegistrationPopup.vue";
import AuthPopup from "@/components/popups/AuthPopup.vue";
import { useRouter } from "vue-router";
import { useLoginForm } from "@/use/login-form";
import { ref, computed } from "vue";

const router = useRouter();

const registrationOverlay = ref(false);
const authOverlay = ref(false);

const closePopup = () => {
  registrationOverlay.value = false;
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

<style lang="scss" scoped>
.dashed {
  color: white;
  border-bottom: 1px dashed white;
}
.border-gradient {
  --border-width: 2px;
  --border-radius: 30px;
  --color-1: #e09423;
  --color-2: #e3562a;
}

.border-gradient {
  background: linear-gradient(to right, #e09423, #e3562a),
    linear-gradient(to right, #e09423, #e3562a);
  background-position: 26px 0, 26px 100%;
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
  .glob-lines {
    width: 95%;
  }
}
</style>
