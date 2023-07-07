<template>
  <v-overlay class="flex items-center justify-center">
    <div class="p-10 bg-[--black-middle] flex gap-8 max-w-[786px] relative">
      <div class="absolute right-7 top-7">
        <v-btn
          theme="dark"
          density="compact"
          icon="mdi-plus"
          class="rotate-45 z-10"
          color="#E02A23"
          @click="clickOnButton"
        ></v-btn>
      </div>
      <div class="flex items-center min-w-[200px]">
        <div class="flex flex-col gap-5 items-center text-center">
          <img :src="props.dataPopup.img" alt="logo" />
          <p class="font-medium text-xl">{{ props.dataPopup.name }}</p>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <div
          v-for="(value, idx) in props.dataPopup.values"
          :key="value.name + idx"
          class="flex gap-5 items-center"
        >
          <div class="text-[--grey]">{{ value.name }}</div>
          <div class="font-normal text-xl">{{ value.result }}</div>
        </div>
        <div
          v-for="(value, idx) in props.dataPopup.desc"
          :key="value.name + idx"
          class="flex gap-5 items-start"
        >
          <div class="text-[--grey]">{{ value.name }}</div>
          <div class="font-normal">{{ value.value }}</div>
        </div>
      </div>
    </div>
  </v-overlay>
</template>

<script setup>
const props = defineProps({
  dataPopup: { type: Object },
});

const emit = defineEmits(["click"]);

const clickOnButton = () => {
  emit("click");
};
</script>
