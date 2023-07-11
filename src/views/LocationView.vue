<template>
  <div>
    <MenuScanning />
    <Acharts />
    <ScanningDangers />
  </div>
</template>

<script setup>
import MenuScanning from "@/components/location/MenuScanning.vue";
import ScanningDangers from "@/components/location/ScanningDangers.vue";
import Acharts from "@/components/graphs/Acharts.vue";
</script>
