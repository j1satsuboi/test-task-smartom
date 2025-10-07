import React from "react";
import sendIcon from "../../../assets/send.svg";
import questionMarkIcon from "../../../assets/question_mark.svg";

const RightUpperHeader = () => {
  return (
    <div className="flex justify-between items-center gap-6">
      <div
        className="hidden md:flex justify-between items-center gap-2
        font-mts-compact text-[#626C77] 
        text-[12px] leading-4
        xl:text-sm xl:leading-5"
      >
        <span className="font-normal">Поддержка:</span>
        <span className="font-medium">8 499 323-88-50</span>
      </div>
      <button className="hidden md:flex justify-between items-center gap-2 hover:cursor-pointer">
        <img
          src={questionMarkIcon}
          alt="questionMarkIcon"
          className="size-4"
        ></img>
        <span
          className="font-mts-compact font-medium text-[#626C77]
          text-[12px] leading-4
          **:xl:text-sm xl:leading-5"
        >
          Поддержка
        </span>
      </button>
      <button className="flex justify-between items-center gap-2 hover:cursor-pointer">
        <img src={sendIcon} alt="sendIcon" className="size-4"></img>
        <span
          className="font-mts-compact font-medium text-[#626C77] 
          text-[12px] leading-4
          xl:text-sm xl:leading-5"
        >
          Москва
        </span>
      </button>
    </div>
  );
};

export default RightUpperHeader;
