import React from "react";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

const data1 = [
  { label: "Treasury Balance", value: "0" },
  { label: "My AKASHI", value: "0" },
];

const data2 = [{ label: "Rewards Earned", value: "3,006,849" }];

const data3 = [{ label: "Daily APR", value: "0.5%" }];

const Cloud = () => {
  return (
    <div className="container mx-auto mt-32 md:mt-40 lg:w-8/12 w-full flex flex-col items-center justify-center">
      <div className=" sm:flex w-full items-center justify-center">
        <div className="sm:w-6/12">
          <Card data={data1} />
          <Card data={data2} />
        </div>
        <div className="self-center mt-10">
          <Card data={data3} />
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