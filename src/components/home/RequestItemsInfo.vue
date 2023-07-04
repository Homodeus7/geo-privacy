<template>
  <div
    v-for="(port, idx) in ports"
    :key="port + idx"
    class="2xl:max-w-[908px] max-w-[808px] flex flex-col p-5 gap-7 bg-[--black-middle] rounded-md border-[1px] border-[#2D2E33]"
  >
    <h2 class="font-medium text-3xl">{{ port.portName }}</h2>

    <div class="p-4 rounded-[3px] border-[1px] border-[#2D2E33]">
      <p class="font-medium">{{ port.portDesc }}</p>
    </div>

    <div class="flex items-center justify-between p-3 gap-2">
      <div class="flex items-center gap-2">
        <img class="w-8" src="@/assets/img/icon-danger.svg" />
        <p class="font-medium">
          Найдено уязвимостей: {{ port.dangers.length }}
        </p>
        <p class="font-medium">{{}}</p>
      </div>
      <div class="flex items-center gap-2">
        <p>Угроза</p>
        <v-btn size="x-small" class="tumb" color="#2D2E33" @click="sort = true">
          <img src="@/assets/img/icon-g-arrow.svg" />
        </v-btn>
        <v-btn
          size="x-small"
          class="tumb"
          color="#2D2E33"
          @click="sort = false"
        >
          <img src="@/assets/img/icon-r-arrow.svg" />
        </v-btn>
      </div>
    </div>

    <div class="flex flex-col bg-[#27282D] rounded-[3px]">
      <div v-for="danger in toHighDanger" class="p-3">
        <div class="flex justify-between">
          <div class="min-w-[163px] flex flex-col p-3 gap-2">
            <p class="font-medium">{{ danger.name }}</p>
            <div class="flex gap-3 items-center">
              <p class="font-medium">Угроза</p>
              <RatingCard :rating="danger.rating" />
            </div>
          </div>
          <div class="p-3 flex flex-col gap-5">
            <p class="font-medium">{{ danger.desc }}</p>
            <CodeTemplate
              v-if="danger.code"
              class="p-7 bg-[#2F3035] text-[--grey]"
              language="JavaScript"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between p-3 gap-2">
      <div class="flex items-center gap-2">
        <img class="w-8" src="@/assets/img/icon-exploit-dash.svg" />
        <p class="font-medium">
          Найдено эксплоитов: {{ port.exploits.length }}
        </p>
      </div>
    </div>
    <div class="flex flex-col rounded-[3px] bg-[#27282D] p-7">
      <p class="pb-3" v-for="(exploit, idx) in port.exploits" :key="idx">
        {{ idx + 1 }}. {{ exploit.name }}: {{ exploit.url }}
      </p>
    </div>

    <div class="flex items-center justify-between p-3 gap-2">
      <div class="flex items-center gap-2">
        <img class="w-8" src="@/assets/img/icon-decision.svg" />
        <p class="font-medium">Решения</p>
      </div>
    </div>

    <div class="flex flex-col p-4 rounded-[3px] border-[1px] border-[#2D2E33]">
      <div v-for="decision in port.decision" class="p-3">
        <div class="flex justify-between">
          <div class="min-w-[163px] flex flex-col p-3 gap-2">
            <p class="font-medium">{{ decision.name }}</p>
            <div class="flex gap-3 items-center">
              <p class="font-medium">Угроза</p>
              <RatingCard :rating="decision.rating" />
            </div>
          </div>
          <div class="p-3 flex flex-col gap-5">
            <p class="font-medium">{{ decision.desc }}</p>
            <CodeTemplate
              v-if="decision.code"
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
import { ref, computed } from "vue";
import { usePorts } from "@/store/ports";

const portsStore = usePorts();

const ports = computed(() => portsStore.ports);

const sort = ref(false);

const portsDangers = computed(() => ports.value.map((p) => p.dangers)[0]);

const toHighDanger = computed(() =>
  portsDangers.value.sort((a, b) =>
    sort.value ? a.rating - b.rating : b.rating - a.rating
  )
);
</script>

<style lang="scss" scoped></style>
