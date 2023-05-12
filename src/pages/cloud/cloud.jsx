import React from "react";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import CloudChart from "../../components/chart/cloudChart";
const data1 = [
  { label: "Treasury Balance", value: "0" },
  { label: "My AKASHI", value: "0" },
];
const data2 = [{ label: "Rewards Earned", value: "3,006,849" }];
const data3 = [{ label: "Daily APR", value: "0.5%" }];

const Cloud = () => {
  return (
    <div className="container mx-auto mt-32 md:mt-40 lg:w-8/12 w-full flex flex-col items-center justify-center">
      <CloudChart />
      <div className=" sm:flex w-full items-center justify-center mt-5">
        <div className="sm:w-6/12">
          <div className="hidden sm:block"><Card data={data1} /></div>
          <div><Card data={data2} /></div>
          <div className="block sm:hidden"><Card data={data3} /></div>
        </div>
        <div className="self-center mt-10">
          <div className="hidden sm:block"><Card data={data3} /></div>
          <div className="block sm:hidden"><Card data={data2} /></div>
          <Button image="rewards.png" label="Claim Rewards"></Button>
        </div>
      </div>
      <div className="w-11/12 sm:w-7/12 mt-10">
      Rewards are auto-compounded daily, therefore do not have to be Claimed everyday. Rewards are calculated on a Daily APR based on your total AKASHI holdings.
      </div>
    </div>
  );
};

export default Cloud;