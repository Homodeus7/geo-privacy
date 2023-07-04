<template>
  <div class="w-full text-center max-w-[600px] mx-auto">
    <h3 class="uppercase text-[#0D8E38] px-2 pb-2 font-medium">
      Архитектура домена
    </h3>
    <Line :data="data" :options="options" class="max-h-[350px] bg-[#1E1F23]" />
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
  labels: ["qwe", "ipsu", "lorem", "sdf", "jan", "feb"],
  datasets: [
    {
      label: "Архитектура домена",
      backgroundColor: "#0D8E38",
      borderColor: "#0D8E38",
      color: "#0D8E38",
      data: [123, 123, 234, 456, 567, 600],
    },
    {
      label: "Архитектура домена",
      backgroundColor: "#C74B24",
      borderColor: "#C74B24",
      color: "#C74B24",
      data: [96, 134, 256, 420, 670, 690],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>
