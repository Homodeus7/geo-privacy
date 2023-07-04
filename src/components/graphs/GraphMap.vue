<template>
  <VueFlow v-model="elements" style="height: 600px" class="vue-flow" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { VueFlow, useVueFlow, Position } from "@vue-flow/core";

const initialNodes = ref([
  {
    id: "1",
    position: { x: 20, y: 300 },
    label: "Node 1",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "2",
    position: { x: 170, y: 200 },
    dragging: false,
    label: "Node 2",
    handlePosition: Position.Right,
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "3",
    position: { x: 170, y: 300 },
    dragging: false,
    label: "Node 3",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "4",
    position: { x: 170, y: 400 },
    dragging: false,
    label: "Node 4",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
]);

const { addEdges } = useVueFlow({
  nodes: initialNodes,
  dragging: false,
  defaultZoom: 1,
  maxZoom: 1,
  minZoom: 1,
});

onMounted(() => {
  addEdges([
    {
      id: "e1-2",
      source: "1",
      target: "2",
      style: { stroke: "orange" },
    },
    {
      id: "e1-3",
      source: "1",
      target: "3",
      style: { stroke: "orange" },
    },
    { id: "e1-4", source: "1", target: "4", style: { stroke: "orange" } },
  ]);
});
</script>

<style lang="scss">
@import "@vue-flow/core/dist/style.css";

.vue-flow {
  background-color: #1e1f23;
  border-radius: 8px;
}
.vue-flow__node {
  padding: 10px 20px;
  color: #fffffb;
  border: 3px solid orange;
  border-radius: 6px;
}
</style>
