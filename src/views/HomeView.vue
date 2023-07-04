<template>
  <ScanResults />
  <DomainInfo />
  <GraphMap />
  <TumblersRow />
  <div class="flex gap-7 items-start justify-between">
    <RequestInfo />
    <RequestItemsInfo />
  </div>
</template>

<script setup>
import ScanResults from "@/components/home/ScanResults.vue";
import DomainInfo from "@/components/home/DomainInfo.vue";
import TumblersRow from "@/components/home/TumblersRow.vue";
import RequestInfo from "@/components/home/RequestInfo.vue";
import RequestItemsInfo from "@/components/home/RequestItemsInfo.vue";
import GraphMap from "@/components/graphs/GraphMap.vue";
</script>
