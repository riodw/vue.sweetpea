<template>
  <div class="chart">
    <div class="row m-0">
      <div class="card col-md mb-3 mr-md-3">
        <apexchart
          :options="chartOptions"
          :series="series"
          type="line"
          height="350"
        ></apexchart>
      </div>
      <div class="card mb-3 col-md-auto col-sm-12 p-0">
        <div class="card-body">
          <div class="d-flex flex-column align-items-stretch">
            <div class="">
              <p class="h1 m-0">
                &#8593;
              </p>
            </div>
            <div>
              <p class="h1 m-0">
                &#8595;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import VueApexCharts from "vue-apexcharts";

export default {
  name: "Chart",
  components: {
    // apexcharts: VueApexCharts,
  },
  data: function() {
    return {
      series: [
        {
          // name: "Likes",
          data: [100, 70, 92, 90, 60, 91],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
        },
        stroke: {
          width: 7,
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: [
            "12/01/2020",
            "12/02/2020",
            "12/03/2020",
            "12/04/2020",
            "12/04/2020", // didn't want to go in her cage
            "12/04/2020",
          ],
          // tickAmount: 10,
          labels: {
            formatter: function(value, timestamp, opts) {
              return opts.dateFormatter(new Date(timestamp), "dd MMM");
            },
          },
        },
        title: {
          // text: "Obedience",
          align: "left",
          style: {
            fontSize: "16px",
            color: "#666",
          },
        },
        fill: {
          // colors: ["#1A73E8", "#B32824"],
          type: "gradient",
          gradient: {
            // shade: "dark",
            // gradientToColors: ["#ffea00", "#ff9ea4"],
            shadeIntensity: 1,
            type: "horizontal",
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
            colorStops: [
              {
                offset: 0,
                color: "#ff9ea4",
                opacity: 1,
              },
              {
                offset: 100,
                color: "#ffea00",
                opacity: 1,
              },
            ],
          },
        },
        markers: {
          size: 4,
          colors: ["#ff9ea4"],
          strokeColors: "#fff",
          strokeWidth: 2,
          hover: {
            size: 7,
          },
        },
        yaxis: {
          min: 0,
          max: 100,
          title: {
            text: "Good Girl Status",
          },
        },
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
