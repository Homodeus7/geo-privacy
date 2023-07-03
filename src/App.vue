<template>
  <HeaderView />
  <div class="wrapper h-[100%] flex flex-col gap-10 py-14">
    <RouterView />
  </div>
  <FooterView />
</template>

<script setup>
import { RouterView } from "vue-router";
import HeaderView from "@/components/nav/HeaderView.vue";
import FooterView from "@/components/nav/FooterView.vue";
</script>

<style lang="scss">
#app {
  font-family: "Inter", sans-serif;
  --webkit-font-smoothing: antialiased;
  --moz-osx-font-smoothing: grayscale;
}

.wrapper {
  max-width: 1280px;
  margin: 0 auto;
  transition: 0.2s;
  @media (min-width: 1536px) {
    max-width: 1380px;
  }
}
</style>
