import React from "react";

const Card = ({ data }) => {
  return (
    <div className="rounded-xl mx-10 my-5 md:mx-5 shadow shadow-[#151c20]">
      {data.map((item) => {
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 p-5" key={item.label}>
            <p className="sm:text-left font-bold">{item.label}</p>
            <p className="sm:text-right">{item.value}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
