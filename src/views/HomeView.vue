<template>
  <ScanResults />
  <ItemResults />
  <TumblersRow />
  <div class="flex gap-7 items-start justify-between">
    <RequestInfo />
    <ItemsInfo />
  </div>
</template>

<script setup>
import ScanResults from "@/components/home/ScanResults.vue";
import ItemResults from "@/components/home/ItemResults.vue";
import TumblersRow from "@/components/home/TumblersRow.vue";
import RequestInfo from "@/components/home/RequestInfo.vue";
import ItemsInfo from "@/components/home/ItemsInfo.vue";
</script>
