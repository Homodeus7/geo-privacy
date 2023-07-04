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
      ></div>
    </div>
    <div v-if="props.rating === 2" class="flex items-center gap-1">
      <div
        v-for="item in 5"
        :key="item"
        class="w-[6px] h-[6px] rounded-full bg-[--grey] two"
      ></div>
    </div>
    <div v-if="props.rating === 3" class="flex items-center gap-1">
      <div
        v-for="item in 5"
        :key="item"
        class="w-[6px] h-[6px] rounded-full bg-[--grey] three"
      ></div>
    </div>
    <div v-if="props.rating === 4" class="flex items-center gap-1">
      <div
        v-for="item in 5"
        :key="item"
        class="w-[6px] h-[6px] rounded-full bg-[--grey] four"
      ></div>
    </div>
    <div v-if="props.rating === 5" class="flex items-center gap-1">
      <div
        v-for="item in 5"
        :key="item"
        class="w-[6px] h-[6px] rounded-full bg-[--grey] five"
      ></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  rating: { type: Number, default: 0 },
});
</script>

<style class="scss" scoped>
.one:first-child {
  background-color: var(--green);
}
.two:nth-child(1),
.two:nth-child(2) {
  background-color: var(--green);
}

.three:nth-child(1),
.three:nth-child(2),
.three:nth-child(3) {
  background-color: var(--yellow-plus);
}

.four:nth-child(1),
.four:nth-child(2),
.four:nth-child(3),
.four:nth-child(4) {
  background-color: var(--yellow-plus);
}

.five:nth-child(1),
.five:nth-child(2),
.five:nth-child(3),
.five:nth-child(4),
.five:nth-child(5) {
  background-color: var(--red);
}
</style>
