import React from "react";

const Button = ({ image, label, bold }) => {
  return (
    <button
      className={`shadow shadow-[#151c20] rounded-full text-[#F9E8D0] bg-gradient-to-b from-[#CC6832] via-[#CC6832A5] to-[#CC683281] px-4 py-2 text-sm ${
        bold ? "font-bold w-full" : "w-auto md:w-full"
      }`}
      style={{ minWidth: "100px", marginLeft: "5px", maxWidth: "150px" }}
    >
      <div className="flex justify-center w-full items-center">
        <img src={image} className="mr-2" alt="for-button" />
        <div>{label}</div>
      </div>
    </button>
  );
};

export default Button;
