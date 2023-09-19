"use client";
import React from "react";
// import ReactApexChart from "react-apexcharts";
import "./DonutChart.css";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
function DonutChart() {
  // Sample data for the donut chart
  const chartData = {
    series: [55, 31, 14],

    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],

    sublabels: ["55%", "31%", "14%"],
  };

  // Options for the donut chart
  const chartOptions = {
    chart: {
      type: "donut",
    },
    labels: chartData.labels,
    options: {
      chart: {
        height: 250,
      },
    },
    responsive: [
      {
        breakpoint: 650,
        options: {
          chart: {
            height: 250,
            width: 250,
            display: "flex",
            justifyContent: "center",
          },
          legend: {
            position: "bottom",
            display: "none",
          },
        },
      },
    ],
    legend: {
      position: "right", // Change the legend position as per your preference
      labels: {
        useSeriesColors: true,
      },
      formatter: function (seriesName, opts) {
        // Custom legend label format with sublabels
        const index = opts.seriesIndex;
        return (
          '<span class="donut-legend">' +
          '<span class="legend-text">' +
          seriesName +
          "</span>" +
          "<br/>" +
          '<span class="sub-legend">' +
          chartData.sublabels[index] +
          "</span>" +
          "</span>"
        );
      },
    },
  };
  const [domLoaded, setDomLoaded] = React.useState(false);

  React.useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <div>
      {typeof window !== "undefined" && domLoaded && (
        <ReactApexChart
          options={chartOptions}
          series={chartData.series}
          type="donut"
          width="400"
        />
      )}
    </div>
  );
}

export default DonutChart;
