<template>
  <VueFlow style="height: 600px" class="vue-flow p-7">
    <div>
      <h2 class="font-medium text-[28px] pb-3">Архитектура домена</h2>
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <div class="rounded-full bg-[--yellow] w-[10px] h-[10px]"></div>
          <p>A запись</p>
        </div>
        <div class="flex items-center gap-2">
          <div class="rounded-full bg-[--yellow-plus] w-[10px] h-[10px]"></div>
          <p>AAAA запись</p>
        </div>
        <div class="flex items-center gap-2">
          <div class="rounded-full bg-[--blue-lighten] w-[10px] h-[10px]"></div>
          <p>MX запись</p>
        </div>
        <div class="flex items-center gap-2">
          <div class="rounded-full bg-[--green] w-[10px] h-[10px]"></div>
          <p>TXT запись</p>
        </div>
      </div>
    </div>
  </VueFlow>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { VueFlow, useVueFlow, Position } from "@vue-flow/core";

const X_1 = 30;
const X_2 = 340;
const X_3 = X_2 * 1.8;
const X_4 = X_2 * 2.5;
const X_5 = X_2 * 3.3;

const Y_1 = 300;
const STEP_Y = 70;

const Y_2 = Y_1 - STEP_Y;
const Y_3 = Y_1 + STEP_Y;

const Y_4 = Y_1 - STEP_Y * 2;
const Y_5 = Y_1 + STEP_Y * 2;

const Y_6 = Y_1 - STEP_Y * 3;
const Y_7 = Y_1 + STEP_Y * 3;

const initialNodes = ref([
  {
    id: "1",
    position: { x: X_1, y: Y_1 },
    label: "Node 1",
    text: "adsasd",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: {
      "--vf-node-color": "#C74B24",
      borderColor: "#C74B24",
      backgroundColor: "#C74B24",
    },
  },
  {
    id: "2",
    position: { x: X_2, y: Y_4 },
    label: "Node 2",
    handlePosition: Position.Right,
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: { "--vf-node-color": "#C74B24", borderColor: "#C74B24" },
  },
  {
    id: "3",
    position: { x: X_2, y: Y_1 },
    label: "Node 3",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: { "--vf-node-color": "#C74B24", borderColor: "#C74B24" },
  },
  {
    id: "4",
    position: { x: X_2, y: Y_5 },
    label: "Node 4",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: { "--vf-node-color": "#C74B24", borderColor: "#C74B24" },
  },
  {
    id: "5",
    position: { x: X_3, y: Y_1 },
    label: "Node 5",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: { "--vf-node-color": "#0066FF", borderColor: "#0066FF" },
  },
  {
    id: "6",
    position: { x: X_3, y: Y_2 },
    label: "Node 6",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: { "--vf-node-color": "#0066FF", borderColor: "#0066FF" },
  },
  {
    id: "7",
    position: { x: X_3, y: Y_3 },
    label: "Node 7",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: { "--vf-node-color": "#0066FF", borderColor: "#0066FF" },
  },
  {
    id: "8",
    position: { x: X_3, y: Y_4 },
    label: "Node 8",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: { "--vf-node-color": "#0066FF", borderColor: "#0066FF" },
  },
  {
    id: "9",
    position: { x: X_3, y: Y_5 },
    label: "Node 9",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: { "--vf-node-color": "#0066FF", borderColor: "#0066FF" },
  },
  {
    id: "10",
    position: { x: X_3, y: Y_6 },
    label: "Node 10",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: { "--vf-node-color": "#C74B24", borderColor: "#C74B24" },
  },
  {
    id: "11",
    position: { x: X_3, y: Y_7 },
    label: "Node 11",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: { "--vf-node-color": "#C74B24", borderColor: "#C74B24" },
  },
  {
    id: "12",
    position: { x: X_4, y: Y_2 },
    label: "Node 12",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: { "--vf-node-color": "#23A04D", borderColor: "#23A04D" },
  },
  {
    id: "13",
    position: { x: X_4, y: Y_3 },
    label: "Node 13",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: { "--vf-node-color": "23A04D", borderColor: "#23A04D" },
  },
  {
    id: "14",
    position: { x: X_5, y: Y_4 },
    label: "Node 14",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: { "--vf-node-color": "#23A04D", borderColor: "#23A04D" },
  },
  {
    id: "15",
    position: { x: X_5, y: Y_2 },
    label: "Node 15",
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    style: { "--vf-node-color": "23A04D", borderColor: "#23A04D" },
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
      style: { stroke: "#C74B24" },
    },
    {
      id: "e1-3",
      source: "1",
      target: "3",
      style: { stroke: "#C74B24" },
    },
    { id: "e1-4", source: "1", target: "4", style: { stroke: "#C74B24" } },
    { id: "e3-5", source: "3", target: "5", style: { stroke: "#0066FF" } },
    {
      id: "e2-6",
      source: "2",
      target: "6",
      style: { stroke: "#0066FF" },
    },
    {
      id: "e3-7",
      source: "3",
      target: "7",
      style: { stroke: "#0066FF" },
    },
    {
      id: "e2-8",
      source: "2",
      target: "8",
      style: { stroke: "#0066FF" },
    },
    {
      id: "e4-9",
      source: "4",
      target: "9",
      style: { stroke: "#0066FF" },
    },
    {
      id: "e1-10",
      source: "1",
      target: "10",
      style: { stroke: "#C74B24" },
    },
    {
      id: "e1-11",
      source: "1",
      target: "11",
      style: { stroke: "#C74B24" },
    },
    {
      id: "e3-12",
      source: "3",
      target: "12",
      style: { stroke: "#23A04D" },
    },
    {
      id: "e3-13",
      source: "3",
      target: "13",
      style: { stroke: "#23A04D" },
    },
    {
      id: "e12-14",
      source: "12",
      target: "14",
      style: { stroke: "#23A04D" },
    },
    {
      id: "e12-15",
      source: "12",
      target: "15",
      style: { stroke: "#23A04D" },
    },
  ]);
});
</script>

<style lang="scss">
@import "@vue-flow/core/dist/style.css";

.vue-flow {
  background-color: #1e1f23;
  border-radius: 8px;
  font-weight: 700;
}
.vue-flow__node {
  padding: 6px 20px;
  color: #ffffff;
  background-color: #1e1f23;
  border: 3px solid;
  border-radius: 6px;
}
</style>
