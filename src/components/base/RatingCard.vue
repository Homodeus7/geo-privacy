<template>
  <div>
    <div v-if="props.rating === 0" class="flex items-center gap-1">
      <div
        v-for="item in 5"
        :key="item"
        class="w-[6px] h-[6px] rounded-full bg-[--grey]"
      ></div>
    </div>
    <div v-if="props.rating === 1" class="flex items-center gap-1">
      <div
        v-for="item in 5"
        :key="item"
        class="w-[6px] h-[6px] rounded-full bg-[--grey] one"
        :class="{}"
      ></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  rating: { type: Number, default: 0 },
});
</script>

<style class="scss">
.one {
  &:first-child {
    background-color: red;
  }
}
</style>
