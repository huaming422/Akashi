import React from "react";

const Input = ({ data , darkmode }) => {
  return (
    <div className={`rounded-xl mx-10 my-5 md:mx-5 shadow-[#151c20] shadow ${ darkmode ? "bg-[#434e53]" : "bg-[#f0cfb0]" } overflow-hidden w-9/12`}>
      <input
        type="text"
        placeholder={data}
        className="outline-none focus:outline-none bg-inherit border-none w-full px-4 py-2"
      />
    </div>
  );
};

export default Input;
