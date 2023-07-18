<template>
  <header>
    <nav class="bg-[--black-middle] border-b-[1px] border-[#3B3C3F]">
      <div
        class="2xl:max-w-[1380px] max-w-[1280px] mx-auto h-[60px] flex items-center justify-between"
      >
        <div>
          <div class="flex gap-[10px]">
            <a href="#">
              <img class="w-[26px]" src="@/assets/logo.svg" />
            </a>
            <p class="font-bold">GeoPrivacy</p>
          </div>
        </div>
        <div
          class="w-[284px] flex items-center justify-between rounded bg-[--black-darken]"
        >
          <v-text-field
            theme="dark"
            variant="outlined"
            rounded="0"
            class="max-w-[284px]"
            density="compact"
            label="Искомый домен"
            append-inner-icon="mdi-magnify"
            hide-details
            single-line
          ></v-text-field>
        </div>
        <router-link
          v-for="link in links"
          :key="link"
          :to="link.link"
          class="link relative font-semibold text-[--grey]"
          :class="{ active: link === currentlyActiveItem }"
        >
          {{ link.name }}
        </router-link>

        <a href="#">
          <div class="flex gap-[10px]">
            <img class="w-[26px]" src="@/assets/img/icon-account.svg" />
            <p class="font-semibold text-[--grey]">Личный аккаунт</p>
          </div>
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { reactive } from "vue";

const links = reactive([
  { link: "/", name: "Авторизация" },
  { link: "/home", name: "Профили доменов" },
  { link: "/location", name: "Обзор локации" },
]);
</script>

<style lang="scss" scoped>
.link:hover {
  color: #fff;
  stroke: #fff;
}
.active {
  color: #fff;
  &::after {
    content: "";
    position: absolute;
    bottom: -17px;
    left: 0;
    height: 2px;
    width: 100%;
    background: #c74b24;
  }
}
</style>
