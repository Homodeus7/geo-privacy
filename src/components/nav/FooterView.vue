<template>
  <footer>
    <nav class="bg-[#1E1F23]">
      <div class="wrapper h-[60px] flex items-center justify-center">
        <router-link to="/">
          <div class="flex gap-[10px]">
            <img class="w-[26px]" src="@/assets/logo.svg" />
            <p class="font-bold">GeoPrivacy</p>
          </div>
        </router-link>
      </div>
    </nav>
  </footer>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped></style>
