import React from "react";
import ReactApexChart from "react-apexcharts";

const ChartWeekly2 = () => {
  const series = [
    {
      name: "Withdraw",
      data: [480, 360, 330, 470, 130, 390, 390],
    },
    {
      name: "Diposit",
      data: [240, 130, 270, 350, 240, 230, 320],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 150,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "75%",
        borderRadius: 6,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 5,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default ChartWeekly2;
