import React from "react";
import Card from "../../components/Card/Card";
import Input from "../../components/Button/input";
import Button from "../../components/Button/Button";

const data3 = [
  { label: "AKASHI Burned", value: "2,000,000" },
  { label: "My AKASHI", value: "156,000,000" },
];

const Burn = ({darkmode}) => {
  return (
    <div className="w-full">
      <div className="container mx-auto mt-32 md:mt-40 lg:w-8/12">
        <h1 className="text-2xl font-bold">Burn AKASHI</h1>
        <p className="text-lg mt-5">Help the $AKASHI ecosystem by burning tokens.</p>
        <p className="mt-5">
          This process can have several benefits for the token's ecosystem,
          including:
        </p>
        <p className="mt-5">
          1. <span className="text-[#cc6832] text-lg font-semibold">Increased Scarcity:</span> When tokens are burned, the total supply of tokens
          in circulation decreases, leading to increased scarcity. This can
          increase the value of the remaining tokens, making them more valuable
          for token holders.
        </p>
        <p>
          2. <span className="text-[#cc6832] text-lg font-semibold">Reduced Inflation:</span> If a token has a fixed supply, burning tokens can
          help reduce inflation over time. By removing tokens from circulation,
          the remaining tokens become more valuable, which can help maintain the
          purchasing power of the token.
        </p>
        <p>
          3. <span className="text-[#cc6832] text-lg font-semibold">Enhanced Tokenomics:</span> Token burning is used as part of a broader
          tokenomics strategy to incentivize certain behaviors and actions, like
          to reward users who hold tokens for a certain period of time or to
          encourage users to participate in governance or other activities.
        </p>
        <p className="mt-10">
          Overall, burning $AKASHI will help to create a more stable and
          sustainable token ecosystem by increasing scarcity, reducing
          inflation, and enhancing tokenomics.
        </p>
        <div className="w-[95%] sm:w-[500px] mx-auto mt-10">
          <Card data={data3} />
        </div>
        <div className="w-[95] sm:w-[540px] mx-auto flex sm:flex-row flex-col justify-center items-center mb-10">
        <Input data="Amount of tokens to burn" darkmode={darkmode}/>
        <div className="w-fit mx-auto "><Button image="btn3.png" label="Burn"></Button></div>
        </div>
      </div>
    </div>
  );
};

export default Burn;
