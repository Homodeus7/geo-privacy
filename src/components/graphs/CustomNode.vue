<script setup>
import { Handle, Position } from "@vue-flow/core";

const props = defineProps({
  data: {
    text: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: true,
    },
    waf: {
      type: Boolean,
      required: false,
    },
  },
});
</script>

<template>
  <div class="flex items-center gap-2">
    <img v-if="data.waf" src="@/assets/img/icon-waf.svg" />
    <div class="flex flex-col items-start">
      <div class="font-medium text-[--grey]">{{ data.text }}</div>
      <div class="font-medium">{{ data.label }}</div>
    </div>
  </div>

  <Handle id="a" type="source" :position="Position.Left" />
</template>
