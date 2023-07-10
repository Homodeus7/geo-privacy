<template>
  <div class="relative w-full bg-[--black-middle] rounded-md pt-4">
    <div class="z-10">
      <apexchart
        id="chart"
        type="area"
        height="420"
        :options="chartOptions"
        :series="series"
      >
      </apexchart>
    </div>
    <img
      class="absolute h-[480px] w-[1180px] top-0 left-11 z-0"
      src="@/assets/img/pattern-graph.svg"
    />
  </div>
</template>

<script setup>
import { reactive } from "vue";

const series = reactive([
  {
    name: "от 0 до 3.0",
    data: [2, 0, 1, 2, 3, 5, 4, 3, 5, 4, 4, 2, 0, 1, 2, 3, 5, 4, 3, 5, 4, 4],
  },
  {
    name: "от 4.0 до 7.0",
    data: [
      5, 5.5, 6, 7, 5, 6, 5, 6, 7, 8, 7, 5, 5.5, 6, 7, 5, 6, 5, 6, 7, 8, 7,
    ],
  },
  {
    name: "от 8.0 до 10.0",
    data: [
      6, 7, 8, 9, 8, 9, 7, 10, 8, 9, 10, 6, 7, 8, 9, 8, 9, 7, 10, 8, 9, 10,
    ],
  },
]);

const chartOptions = reactive({
  chart: {
    type: "area",
    height: 420,
    stacked: false,
  },
  markers: {
    size: 0,
  },
  animations: {
    enabled: true,
    easing: "easeinout",
    speed: 800,
    animateGradually: {
      enabled: true,
      delay: 150,
    },
    dynamicAnimation: {
      enabled: true,
      speed: 350,
    },
  },
  colors: ["#23A04D", "#E09423", "#E02A23"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: "2",
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0,
      stops: [0, 80, 100],
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    offsetX: 17,
    offsetY: 15,
  },
  xaxis: {
    type: "numbers",
    categories: [
      "21 TCP",
      "22 TCP",
      "23 TCP",
      "24 TCP",
      "25 TCP",
      "26 TCP",
      "76 TCP",
      "355 TCP",
      "6783 TCP",
      "6783 TCP",
      "6783 TCP",
      "21 TCP",
      "22 TCP",
      "23 TCP",
      "24 TCP",
      "25 TCP",
      "26 TCP",
      "76 TCP",
      "355 TCP",
      "6783 TCP",
      "6783 TCP",
      "6783 TCP",
    ],
  },
  yaxis: {
    lines: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  grid: {
    borderColor: "#1e1f23",
    strokeDashArray: 1,
    opacity: 0,
  },
  tooltip: {
    shared: false,
  },
});
</script>

<style lang="scss">
#chart .apexcharts-tooltip {
  color: white;
  text-align: center;
  background-color: #26282d;
  border-color: #26282d;
  border-radius: 6px;
  min-width: 176px;
}
#chart .apexcharts-tooltip-title {
  border: none;
  background-color: #26282d;
}
#chart .apexcharts-tooltip span {
  color: white;
  font-size: 12px;
  align-items: center;
  justify-content: space-between;
}

#chart .apexcharts-tooltip-series-group {
  padding-left: 20px;
}

#chart .apexcharts-menu {
  border: none;
  background-color: #26282d;
}

#chart .apexcharts-menu-item:hover {
  color: #23a04d;
  background-color: #26282d;
}
#chart .apexcharts-legend {
  flex-direction: column;
}

#chart .apexcharts-xaxis-tick {
  stroke: none;
}
</style>
