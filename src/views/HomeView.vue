<template>
  <ScanResults />
  <RatingCard :rating="1" />
  <DomainInfo />
  <GraphMap />
  <TumblersRow />
  <div class="flex gap-7 items-start justify-between">
    <RequestInfo />
    <ItemsInfo />
  </div>
</template>

<script setup>
import ScanResults from "@/components/home/ScanResults.vue";
import DomainInfo from "@/components/home/DomainInfo.vue";
import TumblersRow from "@/components/home/TumblersRow.vue";
import RequestInfo from "@/components/home/RequestInfo.vue";
import ItemsInfo from "@/components/home/ItemsInfo.vue";
import GraphMap from "@/components/graphs/GraphMap.vue";
import RatingCard from "@/components/base/RatingCard.vue";
</script>
