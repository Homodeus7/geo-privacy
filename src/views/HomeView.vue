<template>
  <div class="wrapper h-[100%] flex flex-col gap-10 py-14">
    <ScanResults />
    <ItemResults />
    <GraphMap />
  </div>
</template>
<script setup>
import ScanResults from "@/components/home/ScanResults.vue";
import ItemResults from "@/components/home/ItemResults.vue";
import GraphMap from "@/components/graphs/GraphMap.vue";
</script>
