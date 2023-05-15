import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import Button from "../../components/Button/Button";
import { fetchCoinMarketDetails } from "../../apis/akashi";
import dateFormat from 'dateformat';


const Home = ({ darkmode }) => {
  const getOption = () => {
    return darkmode ? option : option1;
  };

  const data1 = [
    { label: "Total Supply", value: "500,000,000,000,000" },
    { label: "Liquid Supply", value: "15,000,000,000,000" },
  ];
  const data2 = [
    { label: "Total Liquidity", value: "$50,000" },
    { label: "Treasury Balance", value: "5,000,000,000,000" },
    { label: "AKASHI Burned", value: "2,000,000" },
    { label: "Rewards Distributed", value: "200,000,000" },
  ];
  const data3 = [
    { label: "AKASHIx Minted", value: "0" },
    { label: "AKASHIx Staked", value: "0" },
  ];

  const [date, setDate] = useState([]);
  const [data, setData] = useState([]);

  const option = {
    tooltip: {
      trigger: "axis",
      position: function (pt) {
        return [pt[0], "10%"];
      },
    },
    title: {
      left: "center",
      text: "AKASHI Price",
      textStyle: { color: "rgb(255,255,255)" },
    },
   
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: date,
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "100%"],
    },
    dataZoom: [
      {
        type: "inside",
        start: 70,
        end: 100,
      },
      {
        start: 0,
        end: 10,
        dataBackground: {
          lineStyle: { color: "#fff" },
          areaStyle: { opacity: 0 },
        },
        selectedDataBackground: {
          lineStyle: { color: "#fff" },
          areaStyle: { opacity: 0 },
        },
        moveHandleSize: 0,
        borderColor: "rgba(0,0,0,0)",
        handleStyle: {
          color: "#CC6832",
          width: "10%",
        },
        backgroundColor: "rgb(38, 51, 58)",
      },
    ],
    textStyle: { color: "rgb(255,255,255)" },
    series: [
      {
        name: "Price",
        type: "line",
        symbol: "none",
        sampling: "lttb",
        itemStyle: {
          color: "rgb(255, 158, 68)",
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(255, 158, 68)",
            },
            {
              offset: 1,
              color: "rgba(255, 255, 255, 0)",
            },
          ]),
        },
        data: data,
      },
    ],
  };

  const option1 = {
    tooltip: {
      trigger: "axis",
      position: function (pt) {
        return [pt[0], "10%"];
      },
    },

    title: {
      left: "center",
      text: "AKASHI Price",
      textStyle: { color: "rgb(0,0,0)" },
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: date,
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "100%"],
    },
    dataZoom: [
      {
        type: "inside",
        start: 70,
        end: 100,
      },
      {
        start: 0,
        end: 10,
        dataBackground: {
          lineStyle: { color: "#000" },
          areaStyle: { opacity: 0 },
        },
        selectedDataBackground: {
          lineStyle: { color: "#000" },
          areaStyle: { opacity: 0 },
        },
        moveHandleSize: 0,
        borderColor: "rgba(0,0,0,0)",
        handleStyle: {
          color: "#CC6832",
          width: "10%",
        },
        backgroundColor: "rgb(235, 226, 211)",
      },
    ],
    textStyle: { color: "rgb(0,0,0)" },
    series: [
      {
        name: "Price",
        type: "line",
        symbol: "none",
        sampling: "lttb",
        itemStyle: {
          color: "rgb(255, 158, 68)",
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(255, 158, 68)",
            },
            {
              offset: 1,
              color: "rgba(255, 255, 255, 0)",
            },
          ]),
        },
        data: data,
      },
    ],
  };


  const getCoinData = async () => {
    const chart_data = await fetchCoinMarketDetails('bitcoin', 30)
    if (chart_data) {
      const coinMarketKeys = Object.keys(chart_data)
      const pricesLoading = !coinMarketKeys.includes('prices')
      const labels = !pricesLoading ? chart_data['prices'].map(item => dateFormat(new Date(item[0]), "mmm d, h:MM TT ")) : [];
      const datas = !pricesLoading ? chart_data['prices'].map(item => item[1]) : [];

      setDate(labels);
      setData(datas);
    }
  }
  useEffect(() => {
    getCoinData();
  }, [])

  return (
    <div className="w-full">
      <div className="container mx-auto mt-28 md:mt-36">
        <img src="logo2.png" className="md:hidden mx-auto" alt="logo2"></img>
        <div className="md:flex md:justify-center md:flex-row-reverse">
          <div className="md:w-[50%]">
            <Card data={data1} />
            <Card data={data2} />
            <Card data={data3} />
          </div>
          <div className="md:w-[50%]">
            <ReactECharts
              option={getOption()}
              className="p-5"
              style={{ height: "410px" }}
            />
            <div className="rounded-xl m-5 shadow shadow-[#151c20]">
              <div className="grid grid-cols-1 md:grid-cols-2 p-5">
                <p className="md:text-left font-bold">AKASHI Holders</p>
                <p className="md:text-right">1,263</p>
              </div>
              <div className="hidden space-x-5 md:flex justify-around p-5">
                <Button image="btn2.png" label="Buy" bold={true}></Button>
                <Button image="btn3.png" label="Burn" bold={true}></Button>
                <Button image="btn4.png" label="Supply" bold={true}></Button>
              </div>
            </div>
            <div className="flex space-x-5 mb-5 p-5 md:hidden justify-around">
              <Button
                image="btn2.png"
                label="Buy"
                className="font-bold"
              ></Button>
              <Button image="btn3.png" label="Burn"></Button>
              <Button image="btn4.png" label="Supply"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;
