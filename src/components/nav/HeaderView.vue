<template>
  <header>
    <nav class="bg-[--black-middle] border-b-[1px] border-[#3B3C3F]">
      <div
        class="2xl:max-w-[1380px] max-w-[1280px] mx-auto h-[60px] flex items-center justify-between"
      >
        <div>
          <div class="flex gap-[10px]">
            <img class="w-[26px]" src="@/assets/logo.svg" />
            <p class="font-bold">GeoPrivacy</p>
          </div>
        </div>
        <!-- <div
          class="w-[284px] h-[37px] flex items-center justify-between px-4 rounded bg-[--black-darken]"
        >
          <p class="font-medium text-[--grey]">Искомый домен</p>
          <img src="@/assets/img/icon-search.svg" />
        </div> -->
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
        <div class="flex gap-[10px]">
          <img class="w-[26px]" src="@/assets/img/icon-account.svg" />
          <p class="font-semibold text-[--grey]">Личный аккаунт</p>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { reactive } from "vue";

const links = reactive([
  { link: "/login", name: "Позицианирование проекта" },
  { link: "/", name: "Профили доменов" },
  { link: "/location", name: "Обзор локации" },
]);
</script>

<style lang="scss" scoped>
.link:hover {
  color: #fff;
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
