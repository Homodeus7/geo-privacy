<template>
  <div class="relative w-full bg-[--black-middle] rounded-md">
    <div class="z-10">
      <apexchart
        id="chart"
        class="mr-[-10px]"
        type="area"
        height="420"
        :options="chartOptions"
        :series="series"
      >
      </apexchart>
    </div>
    <img
      class="absolute h-[480px] w-[1180px] 2xl:w-[1290px] top-0 left-11 z-0"
      src="@/assets/img/pattern-graph.svg"
    />
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import RatingCard from "@/components/base/RatingCard.vue";

const rating = RatingCard;

const cves = ref([
  { title: "CVE-2021-44228" },
  { title: "CVE-2021-44228" },
  { title: "CVE-2021-44228" },
]);

const dates = ref([
  { title: "21.03.2023" },
  { title: "21.03.2023" },
  { title: "21.03.2023" },
]);

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
    markers: {
      width: "8px",
      height: "8px",
    },
  },
  // tooltip: {
  //   shared: false,
  //   custom: function ({ seriesIndex, dataPointIndex, w }) {
  //     var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
  //     return (
  //       '<div class="arrow_box">' +
  //       '<span class="arrow_box_title">' +
  //       cves.value.map((i) => i.title)[0] +
  //       "</span>" +
  //       '<span class="arrow_box_date">' +
  //       dates.value.map((i) => i.title)[0] +
  //       "</span>" +
  //       "<span class='apexcharts-tooltip-marker' style=background-color:" +
  //       w.globals.markers.colors[dataPointIndex] +
  //       "></span>" +
  //       '<span class="arrow_categories_name">' +
  //       chartOptions.xaxis.categories[dataPointIndex] +
  //       "</span>" +
  //       "</div>"
  //     );
  //   },
  // },

  tooltip: {
    shared: false,
    style: {
      fontSize: "16px",
      fontWeight: "medium",
    },
    onItemHover: {
      highlightDataSeries: false,
    },
  },

  xaxis: {
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
    labels: {
      show: true,
      minHeight: undefined,
      maxHeight: 120,
      style: {
        colors: "#ffffff",
        fontSize: "12px",
        fontFamily: "Inter, sans-serif",
        fontWeight: 500,
        cssClass: "apexcharts-xaxis-label",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    crosshairs: {
      show: true,
      position: "back",
      stroke: {
        color: "#23A04D",
        width: 1,
        dashArray: 0,
      },
    },
  },
  yaxis: {
    show: true,
    showAlways: false,
    showForNullSeries: true,
    seriesName: undefined,
    logBase: 10,
    tickAmount: 10,
    labels: {
      show: true,
      align: "center",
      minWidth: 0,
      maxWidth: 140,
      style: {
        colors: [
          "#23A04D",
          "#23A04D",
          "#23A04D",
          "#E09423",
          "#E09423",
          "#E09423",
          "#E09423",
          "#E09423",
          "#E02A23",
          "#E02A23",
          "#E02A23",
        ],
        fontSize: "12px",
        fontFamily: "Inter, sans-serif",
        fontWeight: 500,
        cssClass: "apexcharts-yaxis-label",
      },
    },
    axisBorder: {
      show: false,
      color: "#78909C",
      offsetX: 0,
      offsetY: 0,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: true,
      position: "back",
      stroke: {
        color: "#ffffff",
        width: 1,
        dashArray: 0,
      },
    },
    tooltip: {
      enabled: false,
      offsetX: 0,
    },
  },
  grid: {
    show: false,
  },
});
</script>

<style lang="scss">
#chart .block-marker {
  width: 300px !important;
  display: flex !important;
  justify-content: space-between;
  align-items: centers;
}
.custom-marker {
  width: 30px;
}
.arrow_box {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
}

.arrow_box_title {
  font-size: 16px !important;
  font-weight: 500;
}

.arrow_box_date {
  font-size: 12;
  font-weight: bold;
}
.arrow_categories_name {
  font-size: 12;
  font-weight: 500;
}
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
#chart .apexcharts-tooltip-marker {
  height: 8px;
  width: 8px;
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
  background-color: rgb(53, 56, 59, 0.8);
}
#chart .apexcharts-legend {
  flex-direction: column;
}
#chart .apexcharts-legend-text {
  color: white !important;
  font-weight: bold !important;
}

#chart .apexcharts-legend-series {
  display: flex;
  gap: 5px;
  align-items: center;
}
#chart .apexcharts-toolbar {
  display: none;
}
</style>
