<template>
  <div class="w-full text-center">
    <Line :data="data" :options="options" class="h-[450px] bg-[#1E1F23]" />
  </div>
</template>

<script lang="ts" setup>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// const points

const data = {
  labels: [
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "76",
    "355",
    "6783",
    "6783",
    "6783",
  ],
  datasets: [
    {
      label: "Архитектура домена",
      backgroundColor: "rgb(224, 148, 35)",
      borderColor: "rgb(224, 148, 35, 0.5)",
      data: [5.5, 6, 6.3, 7.5, 8, 8.2, 9.2, 8.4, 7.5, 6.5, 5.8],
    },
    {
      label: "Архитектура домена",
      backgroundColor: "rgb(35, 160, 77)",
      borderColor: "rgb(35, 160, 77, 0.5)",
      data: [3, 3.4, 3, 3.6, 4, 3.2, 2, 2.2, 2, 0, 1.2],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: true,
};
</script>
