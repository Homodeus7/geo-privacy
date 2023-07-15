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
        <div class="font-medium text-[20px] text">Почти готово</div>
        <div class="flex flex-col gap-[20px]">
          <div class="flex gap-[15px] justify-between">
            <div
              class="min-w-[34px] h-[34px] flex items-center justify-center text-[--grey] rounded-full bg-[#27282D]"
            >
              1
            </div>
            <p class="text-[14px] font-normal">
              Откройте аутентификатор на вашем телефоне (google Auth или
              microsoft Auth) и отсканируйте код
            </p>
          </div>
          <div class="flex items-center justify-center">
            <img src="@/assets/img/qr.png" />
          </div>
          <div class="flex gap-[15px] justify-between">
            <div
              class="min-w-[34px] h-[34px] flex items-center justify-center text-[--grey] rounded-full bg-[#27282D]"
            >
              2
            </div>
            <p class="text-[14px] font-normal">
              Введите сгенерированный код из вашего аутентификатора
            </p>
          </div>
        </div>
        <v-text-field
          v-model="valid.verification.value"
          :error-messages="valid.vError.value"
          theme="dark"
          bg-color="#27282D"
          density="compact"
          variant="solo"
          placeholder="Код из аутентификатора"
          hide-details="auto"
          class="w-full text-qr"
        ></v-text-field>
      </div>
      <v-btn
        theme="dark"
        size="large"
        height="50"
        rounded="sx"
        class="text-none z-10 w-full btn-text"
        color="#C74B24"
        @click="login"
        >Завершить регистрацию
      </v-btn>
    </div>
  </v-overlay>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useValidationFields } from "@/use/validation-fields";
import { ref, computed } from "vue";

const router = useRouter();
const isLoading = ref(false);
const valid = { ...useValidationFields() };

const isValid = computed(
  () => !!valid.verification.value && !valid.vError.value
);

const login = () => {
  router.push("/");
};

const emit = defineEmits(["click"]);

const clickOnButton = () => {
  emit("click");
};
</script>

<style lang="scss">
.text-qr input::placeholder {
  opacity: 1;
  color: var(--grey);
  font-size: 14px;
  text-align: center;
}
.btn-text {
  font-size: 14px;
  font-weight: 400;
  letter-spacing: normal;
}
</style>
