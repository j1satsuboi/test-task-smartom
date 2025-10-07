import React from "react";
import arrowDownIcon from "../../../assets/arrow_down.svg";
import boxArrowIcon from "../../../assets/box_arrow.svg";

const ThirdFooter = () => {
  return (
    <div className="w-full mt-8 xl:mt-14 3xl:mt-20">
      <div className="w-full bg-[#2C3135] px-3 md:px-10 xl:px-14 3xl:px-46">
        <div className="container mx-auto flex flex-col">
          <div
            className="w-full flex overflow-x-auto no-scrollbar justify-between text-white
            text-xs leading-4 md:text-sm md:leading-5
            py-4 xl:py-6 gap-3 md:gap-6 xl:gap-0"
          >
            <div className="flex justify-between items-center gap-1 shrink-0 hover:cursor-pointer">
              <span>О компании</span>
              <img
                src={arrowDownIcon}
                alt="arrowDownIcon"
                className="size-4 md:size-6 invert"
              ></img>
            </div>
            <div className="flex justify-between items-center gap-1 shrink-0 hover:cursor-pointer">
              <span>Деловая этика и комплаенс</span>
              <img
                src={arrowDownIcon}
                alt="arrowDownIcon"
                className="size-4 md:size-6 invert"
              ></img>
            </div>
            <div className="flex justify-between items-center gap-1 shrink-0 hover:cursor-pointer">
              <span>Раскрытие информации</span>
              <img
                src={arrowDownIcon}
                alt="arrowDownIcon"
                className="size-4 md:size-6 invert"
              ></img>
            </div>
            <div className="flex justify-between items-center gap-1 shrink-0 hover:cursor-pointer">
              <a href="">Новости</a>
            </div>
            <div className="flex justify-between items-center gap-1 shrink-0 hover:cursor-pointer">
              <span>Документ</span>
              <img
                src={arrowDownIcon}
                alt="arrowDownIcon"
                className="size-4 md:size-6 invert"
              ></img>
            </div>
            <div className="flex justify-between items-center gap-1 shrink-0 hover:cursor-pointer">
              <a href="">Контакты</a>
            </div>
            <div className="flex justify-between items-center gap-1 shrink-0 hover:cursor-pointer">
              <span>Раскрытие информации</span>
              <img
                src={boxArrowIcon}
                alt="boxArrowIcon"
                className="size-4"
              ></img>
            </div>
            <div className="flex justify-between items-center shrink-0 gap-1 hover:cursor-pointer">
              <span>Для дома</span>
              <img
                src={boxArrowIcon}
                alt="boxArrowIcon"
                className="size-4"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdFooter;
