<template>
  <div
    class="2xl:max-w-[1380px] max-w-[1280px] mx-auto min-h-[100vh] flex flex-col"
  >
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>
