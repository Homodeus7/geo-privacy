<template>
  <div class="grid grid-cols-2 grid-rows-2 gap-6">
    <div
      v-for="item in data"
      :key="item.id"
      class="p-8 bg-[--black-middle] rounded-md flex gap-6"
    >
      <div class="flex flex-col justify-between">
        <div class="flex flex-col gap-5 items-center">
          <img :src="item.img" alt="logo" />
          <p class="font-medium text-xl">{{ item.name }}</p>
        </div>
        <v-btn
          class="text-none text-white"
          color="#2D2E33"
          @click="onOpen(item.id)"
        >
          Полная информация
        </v-btn>
      </div>
      <div class="flex flex-col gap-3">
        <div
          v-for="value in item.values"
          :key="value.name"
          class="flex gap-5 items-center"
        >
          <div class="text-[--grey]">{{ value.name }}</div>
          <div class="font-normal text-xl">{{ value.result }}</div>
        </div>
      </div>
    </div>
  </div>
  <DomainPopup v-model="overlay" :data-popup="dataPopup" @click="closePopup" />
</template>

<script setup>
import { reactive, ref } from "vue";
import DomainPopup from "@/components/popups/DomainPopup.vue";

let dataPopup = reactive({});

const overlay = ref(false);

const closePopup = () => {
  overlay.value = !overlay.value;
};

const data = reactive([
  {
    id: 0,
    name: "SSL информация",
    img: "/img/icon-lock.svg",
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
    img: "/img/icon-technology.svg",
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
    img: "/img/icon-hosting.svg",
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
    img: "/img/icon-globe.svg",
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
  dataPopup = data.filter((item) => item.id === id)[0];
  overlay.value = !overlay.value;
};
</script>
