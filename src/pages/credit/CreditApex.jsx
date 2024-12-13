import React from "react";
import ReactApexChart from "react-apexcharts";

const CreditApex = () => {
  const [state, setState] = React.useState({
    series: [16, 20, 18, 17,],
    options: {
      chart: {
        type: "polarArea",
      },
      stroke: {
        colors: ["#fff"],
      },
      fill: {
        opacity: 0.8,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });
  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="polarArea"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default CreditApex;
