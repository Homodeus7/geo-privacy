<template>
  <div class="grid grid-cols-2 grid-rows-2 gap-8">
    <div
      v-for="item in data"
      :key="item.id"
      class="p-10 bg-[--black-middle] flex gap-8"
    >
      <div class="flex flex-col justify-between">
        <div class="flex flex-col gap-5 items-center">
          <img :src="item.img" alt="logo" />
          <p class="font-medium text-xl">{{ item.name }}</p>
        </div>
        <v-btn class="text-none" variant="tonal" @click="onOpen(item.id)">
          Полная информация
        </v-btn>
      </div>
      <div class="flex flex-col gap-3">
        <div v-for="value in item.values" class="flex gap-5 items-center">
          <div class="text-[--grey]">{{ value.name }}</div>
          <div class="font-normal text-xl">{{ value.result }}</div>
        </div>
      </div>
    </div>
  </div>
  <v-overlay v-model="overlay" class="flex items-center justify-center">
    <div
      v-for="item in data"
      :key="item.id"
      class="p-10 bg-[--black-middle] flex gap-8"
    >
      <div class="flex flex-col justify-between">
        <div class="flex flex-col gap-5 items-center">
          <img :src="item.img" alt="logo" />
          <p class="font-medium text-xl">{{ item.name }}</p>
        </div>
        <v-btn class="text-none" variant="tonal" @click="onOpen(item.id)">
          Полная информация
        </v-btn>
      </div>
      <div class="flex flex-col gap-3">
        <div v-for="value in item.values" class="flex gap-5 items-center">
          <div class="text-[--grey]">{{ value.name }}</div>
          <div class="font-normal text-xl">{{ value.result }}</div>
        </div>
      </div>
    </div>
  </v-overlay>
</template>
<script setup>
import { reactive, ref } from "vue";

const overlay = ref(false);
const length = ref(3);
const onboarding = ref(0);

const data = reactive([
  {
    id: 0,
    name: "SSL информация",
    img: "@/assets/img/icon-lock.svg",
    values: [
      { name: "Тип сертификата", result: "DV" },
      { name: "Действителен до", result: "28.12.26" },
      { name: "Защищенных поддоменов", result: "4" },
      { name: "Защищенных поддоменов", result: "4" },
      { name: "Защищенных поддоменов", result: "4" },
    ],
    desc: [
      {
        name: "Полный текст",
        value:
          "Apache Log4j2 2.0-beta9 through 2.15.0 (excluding security releases 2.12.2, 2.12.3, and 2.3.1) JNDI features used in configuration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers.",
      },
    ],
  },

  {
    id: 1,
    name: "Технологии домена",
    img: "@/assets/img/icon-lock.svg",
    values: [
      { name: "Веб-сервер", result: "Apache" },
      { name: "ЯП", result: "PHP 7.2 JavaScript" },
      { name: "Базы данных", result: "MySql" },
      { name: "CMS", result: "WordPress" },
      { name: "Панель управления", result: "ISPPanel" },
    ],
    desc: [
      {
        name: "Полный текст",
        value:
          "Apache Log4j2 2.0-beta9 through 2.15.0 (excluding security releases 2.12.2, 2.12.3, and 2.3.1) JNDI features used in configuration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers.",
      },
    ],
  },
  {
    id: 2,
    name: "Хостинг",
    img: "@/assets/img/icon-hosting.svg",
    values: [
      { name: "Хостинг провайдер", result: "MegaHoster" },
      { name: "Расположение сервера", result: "Москва" },
      { name: "Расположение сервера", result: "Москва" },
      { name: "Расположение сервера", result: "Москва" },
      { name: "Расположение сервера", result: "Москва" },
    ],
    desc: [
      {
        name: "Полный текст",
        value:
          "Apache Log4j2 2.0-beta9 through 2.15.0 (excluding security releases 2.12.2, 2.12.3, and 2.3.1) JNDI features used in configuration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers.",
      },
    ],
  },
  {
    id: 3,
    name: "Geo IP информация",
    img: "@/assets/img/icon-hosting.svg",
    values: [
      { name: "Страна размещения", result: "Россия" },
      { name: "Регион", result: "Москва" },
      { name: "Город размещения", result: "Москва" },
      { name: "IP", result: "IP/24" },
      { name: "IP", result: "IP/24" },
    ],
    desc: [
      {
        name: "Полный текст",
        value:
          "Apache Log4j2 2.0-beta9 through 2.15.0 (excluding security releases 2.12.2, 2.12.3, and 2.3.1) JNDI features used in configuration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers.",
      },
    ],
  },
]);

const onOpen = (id) => {
  return data.filter((item) => item.id === id)[0];
};
</script>
