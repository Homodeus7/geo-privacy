<template>
  <div class="relative w-full bg-[--black-middle] rounded-md pt-4">
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
    <div class="absolute top-3 left-14 flex flex-col">
      <div class="flex gap-3 items-center">
        <RatingCard :rating="2" />
        <p class="text-[12px] font-medium">от 0 до 3.0</p>
      </div>
      <div class="flex gap-3 items-center">
        <RatingCard :rating="3" />
        <p class="text-[12px] font-medium">от 4.0 до 7.0</p>
      </div>
      <div class="flex gap-3 items-center">
        <RatingCard :rating="5" />
        <p class="text-[12px] font-medium">от 8.0 до 10.0</p>
      </div>
    </div>
    <CustomChartTooltip v-show="false" :config="tooltipConfig" ref="tooltip" />
  </div>
</template>

<script>
import CustomChartTooltip from "@/components/graphs/CustomChartTooltip.vue";
import RatingCard from "@/components/base/RatingCard.vue";
import { createApp } from "vue";

export default {
  name: "Acharts",
  data: function () {
    return {
      chartOptions: {
        chart: {
          type: "area",
          height: 420,
          stacked: false,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        markers: {
          size: 0,
          strokeColors: "transparent",
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
          width: "1",
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
          show: false,
          position: "top",
          horizontalAlign: "left",
          offsetX: 17,
          offsetY: 15,
          markers: {
            width: "8px",
            height: "8px",
          },
        },
        tooltip: {
          shared: false,
          custom: ({ series, seriesIndex, dataPointIndex, w }) =>
            this.customSharedTooltip({
              series,
              seriesIndex,
              dataPointIndex,
              w,
            }),
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
                "#23A04D",
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
          },
        },
        grid: {
          show: false,
        },
      },
      tooltipConfig: {
        locked: false,
        title: "",
        elements: [
          {
            markerColor: "",
            label: "",
            value: "",
            link: "",
          },
        ],
      },
      series: [
        {
          name: "от 0 до 3.0",
          data: [
            2, 0, 1, 2, 3, 5, 4, 3, 5, 4, 4, 2, 1, 0, 2, 3, 5, 4, 3, 5, 4, 4,
          ],
        },
        {
          name: "от 4.0 до 7.0",
          data: [
            5, 5.5, 6, 7, 5, 6, 5, 6, 7, 8, 7, 5, 5.5, 6, 7, 5, 6, 5, 6, 7, 8,
            7,
          ],
        },
        {
          name: "от 8.0 до 10.0",
          data: [
            6, 7, 8, 9, 8, 9, 7, 9, 8, 9, 9, 6, 7, 8, 9, 8, 9, 7, 10, 8, 9, 9,
          ],
        },
      ],
      cves: [
        { title: "CVE-2021-44228" },
        { title: "CVE-2021-44228" },
        { title: "CVE-2021-44228" },
      ],
      dates: [
        { title: "CVE-2021-44228" },
        { title: "CVE-2021-44228" },
        { title: "CVE-2021-44228" },
      ],
    };
  },
  methods: {
    customSharedTooltip({ series, seriesIndex, dataPointIndex, w }) {
      const hoverXaxis = w.globals.seriesX[seriesIndex][dataPointIndex];
      const hoverIndexes = w.globals.seriesX.map((seriesX, index) =>
        seriesX.findIndex((xData) => xData === hoverXaxis)
      );
      const tooltipElements = [];
      hoverIndexes.forEach((hoverIndex, seriesEachIndex) => {
        if (hoverIndex >= 0) {
          const point = this.series[seriesEachIndex].data[hoverIndex];
          const element = {
            markerColor: w.globals.markers.colors[seriesEachIndex],
            value: w.globals.yLabelFormatters[0](
              series[seriesEachIndex][hoverIndex]
            ),
            label: "",
            link: "",
          };
          if (point.notes) {
            element.label = point.notes.label;
            element.link = point.notes.link;
          } else {
            element.label = w.globals.seriesNames[seriesEachIndex];
          }
          tooltipElements.push(element);
        }
      });
      this.tooltipConfig.elements = tooltipElements;
    },
  },
  mounted() {
    const wrapper = this.$refs.tooltip;
    const someComponentInstance = createApp(CustomChartTooltip, {
      config: {
        locked: false,
        title: "1233",
        elements: [
          {
            markerColor: "red",
            label: "qqqq",
            value: "qwq",
            link: "qwqw",
          },
        ],
      },
    });
    const mounted = someComponentInstance.mount(wrapper);
    mounted.$el.innerHTML;
  },
};
</script>

<style lang="scss">
.card {
  background: green;
}
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
</style>
