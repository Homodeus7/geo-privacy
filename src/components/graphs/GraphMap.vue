<template>
  <VueFlow style="height: 600px" class="vue-flow" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { VueFlow, useVueFlow, Position } from "@vue-flow/core";

const X_1 = 120;
const X_2 = X_1 * 2;
const X_3 = X_1 * 3;

const initialNodes = ref([
  {
    id: "1",
    position: { x: X_1, y: 300 },
    label: "Node 1",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "2",
    position: { x: X_2, y: 200 },
    label: "geoprivacy.com",
    handlePosition: Position.Right,
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "3",
    position: { x: X_2, y: 300 },
    label: "Node 3",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "4",
    position: { x: X_2, y: 400 },
    label: "Node 4",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: { "--vf-node-color": "#0066FF", borderColor: "#0066FF" },
  },
  {
    id: "5",
    position: { x: X_3, y: 50 },
    label: "infotech@geoprivacy.com",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: { "--vf-node-color": "#0066FF", borderColor: "#0066FF" },
  },
]);

const { addEdges, nodesDraggable, elementsSelectable } = useVueFlow({
  nodes: initialNodes,
  defaultZoom: 1,
  maxZoom: 1,
  minZoom: 1,
});

onMounted(() => {
  nodesDraggable.value = false;
  elementsSelectable.value = false;
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
    { id: "e1-4", source: "1", target: "4", style: { stroke: "#0066FF" } },
    { id: "e1-5", source: "1", target: "5", style: { stroke: "#0066FF" } },
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
  padding: 6px 20px;
  color: #fffffb;
  border: 3px solid orange;
  border-radius: 6px;
}
</style>
