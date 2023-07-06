<template>
  <v-overlay v-model="overlay" class="flex items-center justify-center">
    <div class="p-10 bg-[--black-middle] flex gap-8 max-w-[786px] relative">
      <div class="absolute right-7 top-7">
        <v-btn
          theme="dark"
          density="compact"
          icon="mdi-plus"
          class="rotate-45 z-10"
          color="#E02A23"
          @click="overlay = !overlay"
        ></v-btn>
      </div>
      <slot />
    </div>
  </v-overlay>
</template>

<script setup>
import { ref } from "vue";
const overlay = ref(false);
</script>
