import React from "react";
import mtgsLogoIcon from "../../../assets/mgts_logo.svg";

const FirstFooter = () => {
  return (
    <div
      className="w-full
      px-3 md:px-10 xl:px-14 3xl:px-46
      pt-6 xl:pt-14 3xl:pt-17"
    >
      <div className="container mx-auto flex items-center">
        <img src={mtgsLogoIcon} alt="mgtsLogoIcon" className="size-14" />
        <div className="hidden xl:flex flex-col justify-between gap-2 ml-8 3xl:ml-12.5">
          <p className="font-mts-compact font-normal text-white text-sm leading-5">
            Поддержка:
          </p>
          <p className="font-mts-compact font-medium text-white text-2xl leading-7">
            8 495 700-70-70
          </p>
        </div>
        <div className="hidden xl:flex flex-col justify-between gap-2 ml-12 xl:ml-10">
          <p className="font-mts-compact font-normal text-white text-sm leading-5">
            Подключение:
          </p>
          <p className="font-mts-compact font-medium text-white text-2xl leading-7">
            8 499 323-88-50
          </p>
        </div>
        <div className="hidden xl:flex flex-col justify-between gap-2 ml-10">
          <p className="font-mts-compact font-normal text-white text-sm leading-5">
            Для официальных писем юридических лиц
          </p>
          <p className="font-mts-compact font-normal text-white text-xl underline">
            mgts@mgts.ru
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstFooter;
