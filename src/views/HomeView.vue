<template>
  <div class="wrapper h-[100%] flex flex-col gap-10 py-14">
    <ScanResults />
    <ItemResults />
    <TumblersRow />
    <RequestInfo />
    <GraphMap />

  </div>
</template>
<script setup>
import ScanResults from "@/components/home/ScanResults.vue";
import ItemResults from "@/components/home/ItemResults.vue";
import TumblersRow from "@/components/home/TumblersRow.vue";
import RequestInfo from "@/components/home/RequestInfo.vue";
import GraphMap from "@/components/graphs/GraphMap.vue";
</script>
