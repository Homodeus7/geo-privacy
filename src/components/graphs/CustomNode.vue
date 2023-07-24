<script setup>
import { Handle, Position } from "@vue-flow/core";

defineProps({
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

  <Handle id="a" type="target" :position="Position.Left" />
  <Handle id="b" type="source" :position="Position.Right" />
</template>
