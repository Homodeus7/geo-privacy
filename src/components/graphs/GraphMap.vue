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
    <template #node-custom="{ data }">
      <CustomNode :data="data" />
    </template>
  </VueFlow>
</template>

<script setup>
import { Position, VueFlow, useVueFlow } from "@vue-flow/core";
import { onMounted, ref } from "vue";
import CustomNode from "./CustomNode.vue";

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
    type: "custom",
    data: { label: "Node 5", text: "MX" },
    style: { "--vf-node-color": "#0066FF", borderColor: "#0066FF" },
  },
  {
    id: "6",
    position: { x: X_3, y: Y_2 },
    type: "custom",
    data: { label: "Node 6", text: "MX" },
    style: { "--vf-node-color": "#0066FF", borderColor: "#0066FF" },
  },
  {
    id: "7",
    position: { x: X_3, y: Y_3 },
    type: "custom",
    data: { label: "Node 7", text: "MX" },
    style: { "--vf-node-color": "#0066FF", borderColor: "#0066FF" },
  },
  {
    id: "8",
    position: { x: X_3, y: Y_4 },
    type: "custom",
    data: { label: "Node 8", text: "MX" },
    style: { "--vf-node-color": "#0066FF", borderColor: "#0066FF" },
  },
  {
    id: "9",
    position: { x: X_3, y: Y_5 },
    type: "custom",
    data: { label: "Node 9", text: "MX" },
    style: { "--vf-node-color": "#0066FF", borderColor: "#0066FF" },
  },
  {
    id: "10",
    position: { x: X_3, y: Y_6 },
    type: "custom",
    data: { label: "Node 10", waf: true },
    style: { "--vf-node-color": "#C74B24", borderColor: "#C74B24" },
  },
  {
    id: "11",
    position: { x: X_3, y: Y_7 },
    type: "custom",
    data: { label: "Node 11", waf: true },
    style: { "--vf-node-color": "#C74B24", borderColor: "#C74B24" },
  },
  {
    id: "12",
    position: { x: X_4, y: Y_2 },
    type: "custom",
    data: { label: "Node 12", text: "TXT" },
    style: { "--vf-node-color": "#23A04D", borderColor: "#23A04D" },
  },
  {
    id: "13",
    position: { x: X_4, y: Y_3 },
    type: "custom",
    data: { label: "Node 13", text: "TXT" },
    style: { "--vf-node-color": "23A04D", borderColor: "#23A04D" },
  },
  {
    id: "14",
    position: { x: X_5, y: Y_4 },
    type: "custom",
    data: { label: "Node 14", text: "TXT" },
    style: { "--vf-node-color": "#23A04D", borderColor: "#23A04D" },
  },
  {
    id: "15",
    position: { x: X_5, y: Y_2 },
    type: "custom",
    data: { label: "Node 15", text: "TXT" },
    style: { "--vf-node-color": "23A04D", borderColor: "#23A04D" },
  },
]);

const { addEdges, elementsSelectable } = useVueFlow({
  nodes: initialNodes,
  defaultZoom: 1,
  maxZoom: 1,
  minZoom: 1,
});

onMounted(() => {
  // panOnDrag.value = false;
  // nodesDraggable.value = false;
  elementsSelectable.value = false;
  addEdges([
    {
      id: "e1-2",
      source: "1",
      target: "2",
      style: { stroke: "#C74B24", "stroke-width": "1.5px" },
    },
    {
      id: "e1-3",
      source: "1",
      target: "3",
      style: {
        stroke: "#C74B24",
        "stroke-width": "1.5px",
        "stroke-linecap": "round",
      },
    },
    {
      id: "e1-4",
      source: "1",
      target: "4",
      style: { stroke: "#C74B24", "stroke-width": "1.5px" },
    },
    { id: "e3-5", source: "3", target: "5", style: { stroke: "#0066FF" } },
    {
      id: "e2-6",
      source: "2",
      target: "6",
      style: { stroke: "#0066FF", "stroke-width": "1.5px" },
    },
    {
      id: "e3-7",
      source: "3",
      target: "7",
      style: { stroke: "#0066FF", "stroke-width": "1.5px" },
    },
    {
      id: "e2-8",
      source: "2",
      target: "8",
      style: { stroke: "#0066FF", "stroke-width": "1.5px" },
    },
    {
      id: "e4-9",
      source: "4",
      target: "9",
      style: { stroke: "#0066FF", "stroke-width": "1.5px" },
    },
    {
      id: "e1-10",
      source: "1",
      target: "10",
      style: { stroke: "#C74B24", "stroke-width": "1.5px" },
    },
    {
      id: "e1-11",
      source: "1",
      target: "11",
      style: { stroke: "#C74B24", "stroke-width": "1.5px" },
    },
    {
      id: "e3-12",
      source: "3",
      target: "12",
      style: { stroke: "#23A04D", "stroke-width": "1.5px" },
    },
    {
      id: "e3-13",
      source: "3",
      target: "13",
      style: { stroke: "#23A04D", "stroke-width": "1.5px" },
    },
    {
      id: "e3-14",
      source: "3",
      target: "14",
      style: { stroke: "#23A04D", "stroke-width": "1.5px" },
    },
    {
      id: "e12-15",
      source: "12",
      target: "15",
      style: { stroke: "#23A04D", "stroke-width": "1.5px" },
    },
  ]);
});
</script>

<style lang="scss">
@import "@vue-flow/core/dist/style.css";

.vue-flow {
  background-color: #1e1f23;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
}
.vue-flow__node {
  padding: 6px 20px;
  color: #ffffff;
  background-color: #1e1f23;
  border: 1.5px solid;
  border-radius: 6px;
}
</style>
