<template>
  <div
    class="2xl:max-w-[908px] max-w-[808px] flex flex-col p-5 gap-7 bg-[--black-middle] rounded-md border-[1px] border-[#2D2E33]"
  >
    <h2 class="font-medium text-3xl">21 TCP</h2>

    <div
      class="p-4 bg-[--black-middle] rounded-sm border-[1px] border-[#2D2E33]"
    >
      <p class="font-medium">
        Гироскопический прибор устойчив. Параметр Родинга-Гамильтона позволяет
        исключить из рассмотрения уходящий центр подвеса, основываясь на
        ограничениях, наложенных на систему. Ротор требует большего внимания к
        анализу ошибок, которые даёт колебательный момент. Под воздействием
        изменяемого вектора гравитации прецессионная теория гироскопов
        колебательно вращает газообразный уход гироскопа.
      </p>
    </div>

    <div class="flex items-center justify-between p-3 gap-2">
      <div class="flex items-center gap-2">
        <img class="w-8" src="@/assets/img/icon-danger.svg" />
        <p class="font-medium">Найдено уязвимостей:</p>
        <p class="font-medium">{{ dangers.length }}</p>
      </div>
      <div class="flex items-center gap-2">
        <p>Угроза</p>
        <v-btn
          size="x-small"
          class="tumb"
          color="#2D2E33"
          @click="sort = false"
        >
          <img src="@/assets/img/icon-g-arrow.svg" />
        </v-btn>
        <v-btn size="x-small" class="tumb" color="#2D2E33" @click="sort = true">
          <img src="@/assets/img/icon-r-arrow.svg" />
        </v-btn>
      </div>
    </div>

    <div
      class="flex flex-col bg-[--black-middle] border-x-[1px] border-[#2D2E33]"
    >
      <div
        v-for="(danger, idx) in toHighDangers"
        :key="idx"
        class="bg-[#27282D] p-3"
      >
        <div class="flex justify-between">
          <div class="min-w-[163px] flex flex-col p-3 gap-2">
            <p class="font-medium">{{ danger.name }}</p>
            <div class="flex gap-3 items-center">
              <p class="font-medium">Угроза</p>
              <RatingCard :rating="danger.rating" />
            </div>
          </div>
          <div class="p-3 flex flex-col gap-5">
            <p class="font-medium">
              {{ danger.desc }}
            </p>
            <CodeTemplate
              v-if="danger.code"
              class="p-7 bg-[#2F3035] text-[--grey]"
              language="JavaScript"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import RatingCard from "@/components/base/RatingCard.vue";
import CodeTemplate from "@/components/base/CodeTemplate.vue";
import { reactive, ref, computed } from "vue";

const sort = ref(false);

const dangers = reactive([
  {
    name: "CVE-2021-44228",
    desc: "Apache Log4j2 2.0-beta9 through 2.15.0 (excluding security releases 2.12.2, 2.12.3, and 2.3.1) JNDI features used inconfiguration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers.",
    rating: 1,
    code: false,
  },
  {
    name: "CVE-2021-12312",
    desc: "Apache Log4j2 2.0-beta9 through 2.15.0 (excluding security releases 2.12.2, 2.12.3, and 2.3.1) JNDI features used inconfiguration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers.",
    rating: 4,
    code: true,
  },
  {
    name: "CVE-2321-44112",
    desc: "Apache Log4j2 2.0-beta9 through 2.15.0 (excluding security releases 2.12.2, 2.12.3, and 2.3.1) JNDI features used inconfiguration, log messages, and parameters do not protect against attacker controlled LDAP and other JNDI related endpoints. An attacker who can control log messages or log message parameters can execute arbitrary code loaded from LDAP servers.",
    rating: 5,
    code: false,
  },
]);

const toHighDangers = computed(() =>
  dangers
    .map((a) => a)
    .sort((a, b) => (sort.value ? a.rating - b.rating : b.rating - a.rating))
);
</script>

<style lang="scss" scoped>
.v-btn .tumb {
  max-width: 22px !important;
  padding: 20px !important;
}
</style>
