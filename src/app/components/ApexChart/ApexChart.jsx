"use client";
import React, { useEffect, useState } from "react";
// import ReactApexChart from "react-apexcharts";
import "./ApexChart.css";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const ApexChart = () => {
  const [chartData, setChartData] = useState({
    options: {
      plotOptions: {
        bar: {
          columnWidth: "30%",
          //   dataLabels: {
          //     position: "top", // top, center, bottom
          //   },
        },
      },

      stroke: {
        colors: ["transparent"],
        width: 5,
      },

      // hide menu-icon

      colors: ["#98D89E", "#EE8484"],
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return Number(val).toLocaleString() + "€";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758", "#000000"],
        },
      },

      xaxis: {
        categories: ["week1", "week2", "week3", "week4"],
        position: "bottom",
        labels: {
          offsetY: 0,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs_: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: false,
          offsetY: -35,
        },
      },
      legend: {
        position: "absolute",
        show: true,
        position: "top",
        align: "right",
      },
      fill: {
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100],
        },
      },
      yaxis: {
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: true,
        },
        labels: {
          show: true,
          formatter: function (val) {
            return Number(val).toLocaleString();
          },
        },
      },
      title: {
        text: "Activities",
        floating: true,
        fontFamily: "Montserrat",
        fontSize: "18px",
        fontWeight: 6000,
        lineHeight: 21.94,
        color: "#000000",

        offsetY: 0,
        align: "left",
        style: {
          color: "#444",
        },
      },
      chart: {
        animations: {
          enabled: false,
        },
        height: "100px",
      },
    },
    series: [
      {
        name: "Guest",
        data: [44, 55, 57, 56],
      },
      {
        name: "User",
        data: [76, 85, 101, 98],
      },
    ],
  });

  const [domLoaded, setDomLoaded] = React.useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        setChartData({
          ...chartData,
          series: [
            {
              name: "Guest",
              data: [44, 55, 57, 56],
            },
            {
              name: "User",
              data: [76, 85, 101, 98],
            },
          ],
        });
      }, 4000);
    }
  }, []);

  return (
    <div id="chart">
      {typeof window !== "undefined" && domLoaded && (
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height="300"
        />
      )}
    </div>
  );
};
export default ApexChart;
