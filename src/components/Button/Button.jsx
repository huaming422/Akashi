import React from "react";

const Button = ({ image, label, bold }) => {
  return (
    <button
      className={`shadow shadow-[#151c20] flex items-center rounded-full bg-gradient-to-b from-[#CC6832] to-[#CC683281] px-4 py-2 text-sm ${
        bold ? "font-bold w-full" : "w-auto md:w-full"
      }`}

      style={{minWidth: '100px', marginLeft: '5px', maxWidth: '150px'}}
    >
      <img src={image} className="mr-2" alt="for-button" />
      {label}
    </button>
  );
};

export default Button;
