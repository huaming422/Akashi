import React from "react";
import ReactECharts from "echarts-for-react";

const BurnChart = () => {
  const options = {
    xAxis: {
      type: "category",
      data: [
        "09/22",
        "09/23",
        "09/24",
        "09/25",
        "09/26",
        "09/27",
        "09/28",
        "09/29",
        "09/30",
        "10/01",
      ],
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: (value) => {
          if (value === 500000) {
            return "500k";
          } else if (value === 1000000) {
            return "1m";
          } else if (value === 1500000) {
            return "1.5m";
          } else if (value === 2000000) {
            return "2m";
          } else if (value === 2500000) {
            return "2.5m";
          } else if (value === 3000000) {
            return "3m";
          } else {
            return "";
          }
        },
        rotate: 90,
        align: "right",
      },
    },
    series: [
      {
        data: [
          500000, 700000, 1000000, 1300000, 1500000, 1800000, 2000000, 2400000,
          2500000, 2800000, 3000000,
        ],
        type: "line",
        itemStyle: {
          color: "#CC6832",
        },
        lineStyle: {
          width: 1,
          type: "solid",
          color: "#CC6832",
        },
      },
    ],
  };

  return (
    <div className="w-full flex items-center">
      <span className="-rotate-90 whitespace-nowrap">
        Rewards Earned
      </span>
      <div className="w-full -ml-24">
        {" "}
        <ReactECharts
          option={options}
          style={{ height: "400px", width: "100%" }}
          className={"react_for_echarts"}
        />
      </div>
    </div>
  );
};

export default BurnChart;
