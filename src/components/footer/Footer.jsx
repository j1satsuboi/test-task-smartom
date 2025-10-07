import React from "react";
import FirstFooter from "./firstFooter/FirstFooter";
import SecondFooter from "./secondFooter/SecondFooter";
import ThirdFooter from "./thirdFooter/ThirdFooter";
import Fouthfooter from "./fouthFooter/FouthFooter";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1D2023] z-20">
      <FirstFooter />
      <SecondFooter />
      <ThirdFooter />
      <Fouthfooter />
    </footer>
  );
};

export default Footer;
