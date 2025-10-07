import React from "react";
import LeftLowerHeader from "./leftLowerHeader/LeftLowerHeader";
import RightLowerHeader from "./rightLowerHeader/RightLowerHeader";

const LowerHeader = () => {
  return (
    <div className="w-full border-b-1 border-[#BCC3D080] px-3 md:px-10 xl:px-14 3xl:px-46">
      <div
        className="container mx-auto flex justify-between items-center
        py-3"
      >
        <LeftLowerHeader />
        <RightLowerHeader />
      </div>
    </div>
  );
};

export default LowerHeader;
