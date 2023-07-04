<template>
  <VueFlow v-model="elements" style="height: 400px" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { VueFlow, useVueFlow } from "@vue-flow/core";

const initialNodes = ref([
  {
    id: "1",
    position: { x: 50, y: 50 },
    label: "Node 1",
  },
  {
    id: "2",
    position: { x: 50, y: 250 },
    label: "Node 2",
  },
]);
const { addEdges } = useVueFlow({
  nodes: initialNodes,
});

onMounted(() => {
  // Add an edge after mount
  addEdges([
    {
      source: "1",
      target: "2",
      sourceHandle: null,
      targetHandle: null,
    },
  ]);
});
</script>

<style lang="scss">
@import "@vue-flow/core/dist/style.css";
</style>
