import React from "react";
import { useState, useEffect, useMemo } from "react";
import mgtsAdvantagesImg from "../../../../assets/mgts_advantages.png";

const Advantages = () => {
  const advantagesData = [
    {
      id: "01",
      title: "Крупнейшая в Москве высокоскоростная оптическая сеть GPON",
      desc: "Высокие гарантированные скорости с надежным соединением и симметричным каналом",
    },
    {
      id: "02",
      title: "Крупнейшая в Москве\nоптическая сеть\nGPON",
      desc: "С GPON вы получаете высокие скорости и надёжное соединение",
    },
  ];

  const [currAdvantage, setCurrAdvantage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrAdvantage((prev) =>
        prev + 1 === advantagesData.length ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const currAdvantageData = useMemo(() => {
    return advantagesData[currAdvantage];
  }, [currAdvantage]);

  return (
    <div
      className="bg-white
      px-3 md:px-10 xl:px-14 3xl:px-46
      pt-16 md:pt-20 xl:pt-30 3xl:pt-40"
    >
      <section
        id="Advantages"
        className="container mx-auto flex flex-col
        gap-8 md:gap-12 xl:gap-16 3xl:gap-20"
      >
        <div
          className="flex flex-col md:flex-row-reverse justify-between
          gap-2 md:gap-0"
        >
          <p
            className="font-mts-compact font-normal text-[#626C77] opacity-40
            text-sm leading-5
            md:text-[17px] md:leading-6"
          >
            ¬ преимущуства
          </p>
          <h2
            className="font-mts-wide font-medium text-[#1D2023]
            text-2xl leading-7
            md:text-[32px] md:leading-11
            xl:text-[44px]"
          >
            ПОЧЕМУ МГТС?
          </h2>
        </div>
        <div></div>
        <div
          key={currAdvantage}
          className="grid grid-cols-1 sm:grid-cols-2 max-w-74 sm:max-w-none
          opacity-0 animate-fadein bg-white
          hover:scale-105 transition-all duration-300 ease-in-out"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="relative flex flex-col aspect-square
            justify-center items-center text-center bg-[#F2F3F7]
            px-2 md:px-8 xl:px-13 3xl:px-20
            gap-6 xl:gap-10"
          >
            <span
              className="absolute top-4 right-4 
              font-mts-compact font-normal text-[#969FA8]
              text-sm leading-5
              xl:text-[17px] xl:leading-6"
            >
              {currAdvantageData.id}
            </span>
            <h3
              className="font-mts-compact font-medium text-[#1D2023]
              text-xl leading-6
              md:text-2xl md:leading-7
              xl:text-[44px] xl:leading-12"
            >
              {currAdvantageData.title}
            </h3>
            <p
              className="font-mts-compact font-normal text-[#1D2023]
              text-sm leading-5
              md:text-[17px] md:leading-6
              xl:text-xl xl:leading-7"
            >
              {currAdvantageData.desc}
            </p>
          </div>
          <img
            src={mgtsAdvantagesImg}
            alt="mgtsAdvantagesImg"
            className="w-full aspect-square object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Advantages;
