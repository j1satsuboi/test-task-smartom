import React from "react";
import UpperHeader from "./upperHeader/UpperHeader";
import LowerHeader from "./lowerHeader/LowerHeader";

const Header = () => {
  return (
    <header className="absolute top-0 w-full bg-white z-20 xl:bg-transparent">
      <UpperHeader />
      <LowerHeader />
    </header>
  );
};

export default Header;
