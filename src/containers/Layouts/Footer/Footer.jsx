import React from "react";

const Footer = ({ darkmode }) => {
  return (
    <footer className="py-5 text-center text-sm md:text-left mt-auto grid grid-cols-1 md:grid-cols-2 items-center">
      <div className="flex justify-end mx-auto md:mr-10 space-x-2 p-5">
        <img src={darkmode ? "icon1.png" : "icon2.png"} alt="darkmode" />
      </div>
      <div>
        <div>AKASHI: 0x00000000000000000000000000000</div>
        <div>
          Copyright @ {new Date().getFullYear()} by Akashi Cloud. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
