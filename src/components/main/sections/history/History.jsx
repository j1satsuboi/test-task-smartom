import React from "react";
import mgtgLogoIcon from "../../../../assets/mgts_logo.svg";

const History = () => {
  const historyData = [
    {
      number: "95%",
      desc: "Охват объектов Москвы",
    },
    {
      number: "8 500 км",
      desc: "Кабельной канализации",
    },
    {
      number: "67 000 км",
      desc: "Собственных оптических сетей",
    },
    {
      number: "5 000+",
      desc: "Сотрудников в штате",
    },
  ];

  return (
    <div
      className="bg-white 
      px-3 md:px-10 xl:px-14 3xl:px-46
      pt-16 md:pt-20 xl:pt-30 3xl:pt-40"
    >
      <section
        id="History"
        className="container mx-auto flex flex-col md:flex-row
        gap-16 md:gap-8"
      >
        <div
          className="flex flex-1 flex-col
          gap-6 md:gap-12 xl:gap-16 3xl:gap-20"
        >
          <img
            src={mgtgLogoIcon}
            alt="mgtsLogoIcon"
            className="size-22 xl:size-30"
          />
          <div className="flex flex-col gap-4 xl:gap-8">
            <h2
              className="font-mts-wide font-medium text-[#1D2023] 
              text-2xl leading-7
              md:text-[32px] md:leading-11
              xl:text-[44px]"
            >
              ВЕКОВОЙ ОПЫТ
            </h2>
            <p
              className="font-mts-compact font-normal text-[#1D2023]
              text-sm leading-5
              md:text-[17px] md:leading-6
              xl:text-xl xl:leading-7"
            >
              Формирование сети фиксированного
              <br />
              доступа по всей Москве на протяжении
              <br />
              более чем 100 лет
            </p>
          </div>
          <button
            className="bg-[#1D2023] rounded-md 
            text-white font-mts-compact font-medium
            text-[17px] leading-6 py-[14px] md:max-w-58
            hover:cursor-pointer hover:bg-[#008AE0] transition-all duration-300 ease-in-out"
          >
            Подробнее о компании
          </button>
        </div>
        <div
          className="flex flex-1 flex-col 
          gap-8 md:gap-10 xl:gap-20 3xl:gap-24"
        >
          {historyData.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <p
                className="font-mts-wide font-medium text-[#1D2023]
                text-2xl leading-7
                md:text-[44px] md:leading-11
                xl:text-[64px] xl:leading-18"
              >
                {item.number}
              </p>
              <p
                className="font-mts-compact font-normal text-[#1D2023]
                text-sm leading-5
                md:text-[17px] md:leading-6
                xl:text-xl xl:leading-7"
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default History;
