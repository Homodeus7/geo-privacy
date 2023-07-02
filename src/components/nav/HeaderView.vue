<template>
  <header>
    <nav class="bg-[--black-middle] border-b-[1px] border-[#3B3C3F]">
      <div class="wrapper h-[60px] flex items-center justify-between">
        <router-link to="/">
          <div class="flex gap-[10px]">
            <img class="w-[26px]" src="@/assets/logo.svg" />
            <p class="font-bold">GeoPrivacy</p>
          </div>
        </router-link>
        <div
          class="w-[284px] h-[37px] flex items-center justify-between px-4 rounded bg-[--black-darken]"
        >
          <p class="font-medium text-[--grey]">Искомый домен</p>
          <img src="@/assets/img/icon-search.svg" />
        </div>
        <router-link
          v-for="link in links"
          :key="link"
          :to="link.link"
          class="link font-semibold text-[--grey]"
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
  { link: "/", name: "Позицианирование проекта" },
  { link: "/", name: "Профили доменов" },
  { link: "/", name: "Обзор локации" },
]);
</script>
