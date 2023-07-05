<template>
  <div
    class="2xl:max-w-[908px] max-w-[808px] flex flex-col p-5 gap-7 bg-[--black-middle] rounded-md border-[1px] border-[#2D2E33]"
  >
    <h2 class="font-medium text-3xl">{{ card.portName }}</h2>

    <div class="p-4 rounded-[3px] border-[1px] border-[#2D2E33]">
      <p class="font-medium">{{ card.portDesc }}</p>
    </div>

    <div
      v-if="card.dangers"
      class="flex items-center justify-between pt-3 gap-2"
    >
      <div class="flex items-center gap-2">
        <img class="w-8" src="@/assets/img/icon-danger.svg" />
        <p class="font-medium">
          Найдено уязвимостей: {{ card.dangers.length }}
        </p>
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
    <div v-if="card.dangers" class="flex flex-col bg-[#27282D] rounded-[3px]">
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

    <div
      v-if="card.exploits"
      class="flex items-center justify-between pt-3 gap-2"
    >
      <div class="flex items-center gap-2">
        <img class="w-8" src="@/assets/img/icon-exploit-dash.svg" />
        <p class="font-medium">
          Найдено эксплоитов: {{ card.exploits.length }}
        </p>
      </div>
    </div>
    <div
      v-if="card.exploits"
      class="flex flex-col rounded-[3px] bg-[#27282D] p-7"
    >
      <p class="pb-3" v-for="(exploit, idx) in card.exploits" :key="idx">
        {{ idx + 1 }}. {{ exploit.name }}: {{ exploit.url }}
      </p>
    </div>

    <div class="flex items-center justify-between pt-3 gap-2">
      <div class="flex items-center gap-2">
        <img class="w-8" src="@/assets/img/icon-decision.svg" />
        <p class="font-medium">Решения</p>
      </div>
    </div>

    <div
      v-if="card.decision"
      class="flex flex-col p-4 rounded-[3px] border-[1px] border-[#2D2E33]"
    >
      <div v-for="decision in card.decision" class="p-3">
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

    <div
      class="flex flex-col py-4 px-7 rounded-[3px] border-[1px] border-[#2D2E33]"
    >
      <div class="overflow-y-auto max-h-[500px]">
        <h3 class="font-medium text-2xl">Техническая информация</h3>
        <div v-if="card.kexAlgorithms" class="p-3 flex flex-col">
          <p class="font-medium text-[--grey] pb-1">Kex Algorithms:</p>
          <p
            v-for="(item, idx) in card.kexAlgorithms"
            :key="idx"
            class="font-medium text-[--grey] pl-1"
          >
            {{ item }}
          </p>
        </div>
        <div v-if="card.keyAlgorithms" class="p-3 flex flex-col">
          <p class="font-medium text-[--grey] pb-1">
            Server Host Key Algorithms:
          </p>
          <p
            v-for="(item, idx) in card.keyAlgorithms"
            :key="idx"
            class="font-medium text-[--grey] pl-1"
          >
            {{ item }}
          </p>
        </div>
        <div v-if="card.encryptionAlgorithms" class="p-3 flex flex-col">
          <p class="font-medium text-[--grey] pb-1">Encryption Algorithms:</p>
          <p
            v-for="(item, idx) in card.encryptionAlgorithms"
            :key="idx"
            class="font-medium text-[--grey] pl-1"
          >
            {{ item }}
          </p>
        </div>
        <div v-if="card.encryptionAlgorithms" class="p-3 flex flex-col">
          <p class="font-medium text-[--grey] pb-1">MAC Algorithms:</p>
          <p
            v-for="(item, idx) in card.encryptionAlgorithms"
            :key="idx"
            class="font-medium text-[--grey] pl-1"
          >
            {{ item }}
          </p>
        </div>
        <div v-if="card.compressionAlgorithms" class="p-3 flex flex-col">
          <p class="font-medium text-[--grey] pb-1">Compression Algorithms:</p>
          <p
            v-for="(item, idx) in card.compressionAlgorithms"
            :key="idx"
            class="font-medium text-[--grey] pl-1"
          >
            {{ item }}
          </p>
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

const namePort = computed(() => portsStore.port);

const infoPorts = computed(() => portsStore.ports);

const card = computed(
  () => infoPorts.value.filter((p) => p.portName === namePort.value)[0]
);

const sort = ref(false);
const portDangers = computed(() => infoPorts.value.map((p) => p.dangers)[0]);

const toHighDanger = computed(() =>
  portDangers.value.sort((a, b) =>
    sort.value ? a.rating - b.rating : b.rating - a.rating
  )
);
</script>
<style lang="scss" scoped></style>
