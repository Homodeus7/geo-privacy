<template>
  <div class="flex items-center justify-between pb-14">
    <div class="flex gap-4">
      <img class="w-10" src="@/assets/img/icon-exploit.svg" />
      <p class="font-medium text-3xl">Найденные уязвимости</p>
    </div>
    <div class="flex gap-8">
      <div class="flex items-center gap-2">
        <p class="font-medium">Цель:</p>
        <v-menu theme="dark">
          <template v-slot:activator="{ props }">
            <v-btn
              variant="plain"
              class="text-none font-medium hover:text-[--green]"
              v-bind="props"
              >geoprivacy.com
              <img class="pl-2 pt-1" src="@/assets/img/icon-arrow-down.svg" />
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in urls"
              :key="index"
              :value="index"
              color="#1E1F23"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu theme="dark">
          <template v-slot:activator="{ props }">
            <v-btn
              variant="plain"
              class="text-none font-medium hover:text-[--green]"
              v-bind="props"
              >CVE
              <img class="pl-2 pt-1" src="@/assets/img/icon-arrow-down.svg" />
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in cves"
              :key="index"
              :value="index"
              color="#1E1F23"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu theme="dark">
          <template v-slot:activator="{ props }">
            <v-btn
              variant="plain"
              class="text-none font-medium hover:text-[--green]"
              v-bind="props"
              >21.12.22
              <img
                class="pl-2 pt-1 hover:fill-[--green]"
                src="@/assets/img/icon-arrow-down.svg"
              />
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in dates"
              :key="index"
              :value="index"
              color="#1E1F23"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </div>
  <GraphLine />
</template>

<script setup>
import GraphLine from "@/components/graphs/GraphLine.vue";
import { ref } from "vue";

const urls = ref([{ title: "geoprivacy.com" }, { title: "geoprivacy.com" }]);
const cves = ref([
  { title: "CVE-2021-44228" },
  { title: "CVE-2021-44228" },
  { title: "CVE-2021-44228" },
]);

const dates = ref([
  { title: "21.03.2023" },
  { title: "21.03.2023" },
  { title: "21.03.2023" },
]);
</script>
