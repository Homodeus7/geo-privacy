<template>
  <div class="flex justify-between w-full py-5">
    <v-btn
      theme="dark"
      rounded="sm"
      height="36"
      width="36"
      icon="mdi"
      color="transparent"
      class="social items-center"
      @click="clickOnButton"
    >
      <img class="w-5" src="@/assets/img/icon-twitter.svg" />
    </v-btn>
    <v-btn
      theme="dark"
      rounded="sm"
      height="36"
      width="36"
      icon="mdi"
      color="transparent"
      class="social items-center"
      @click="clickOnText"
    >
      <img class="w-6" src="@/assets/img/icon-vk.svg" />
    </v-btn>
    <v-btn
      theme="dark"
      rounded="sm"
      height="36"
      width="36"
      icon="mdi"
      color="transparent"
      class="social items-center"
    >
      <img class="w-4" src="@/assets/img/icon-google.svg" />
    </v-btn>
    <v-btn
      theme="dark"
      rounded="sm"
      height="36"
      width="36"
      icon="mdi"
      color="transparent"
      class="social items-center"
    >
      <img class="h-5" src="@/assets/img/icon-ok.svg" />
    </v-btn>
  </div>
</template>

<script setup>
const emit = defineEmits(["openToQr", "openToText"]);

const clickOnButton = () => {
  emit("openToQr");
};
const clickOnText = () => {
  emit("openToText");
};
</script>

<style lang="scss" scoped>
.social {
  border: 1px solid #2d2e33;
}
</style>
