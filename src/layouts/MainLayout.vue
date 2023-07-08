<template>
  <HeaderView />
  <div
    class="2xl:max-w-[1380px] max-w-[1280px] mx-auto min-h-[100vh] flex flex-col gap-10 py-14 flex-auto"
  >
    <RouterView />
  </div>
  <FooterView />
</template>

<script setup>
import { RouterView } from "vue-router";
import HeaderView from "@/components/nav/HeaderView.vue";
import FooterView from "@/components/nav/FooterView.vue";
</script>
