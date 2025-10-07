import React from "react";
import LeftUpperHeader from "./LeftUpperHeader";
import RightUpperHeader from "./RightUpperHeader";

const UpperHeader = () => {
  return (
    <div className="w-full bg-[#BCC3D040] px-3 md:px-10 xl:px-14 3xl:px-46">
      <div
        className="container mx-auto flex flex-row md:flex-row-reverse justify-between items-center
        py-2 xl:py-1.5"
      >
        <RightUpperHeader />
        <LeftUpperHeader />
      </div>
    </div>
  );
};

export default UpperHeader;
