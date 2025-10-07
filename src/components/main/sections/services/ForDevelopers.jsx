import React from "react";
import boxBlueIcon from "../../../../assets/box_blue.svg";
import mgtsServicesImg from "../../../../assets/mgts_services.png";

const ForDevelopers = () => {
  return (
    <div
      className="relative flex flex-col justify-between overflow-hidden bg-[#F2F3F7] rounded-lg
         px-4 py-4
         md:px-6 md:py-6
         3xl:px-10 3xl:py-10
         min-h-85 xl:min-h-112 3xl:min-h-142"
    >
      <div className="flex flex-col gap-8 xl:gap-6 3xl:gap-8 z-10">
        <p
          className="font-mts-compact font-medium text-[#1D2023]
             text-[17px] leading-6
             md:text-2xl md:leading-7"
        >
          Расширяйте свои сети передачи данных и увеличивайте трафик при помощи
          МГТС
        </p>
        <div
          className="font-mts-compact font-medium text-[#1D2023] flex flex-wrap gap-2
             text-sm leading-5
             md:text-[17px] md:leading-6"
        >
          <p className="bg-white px-1.5 py-0.5 md:px-2 md:py-1">
            Передача данных
          </p>
          <p className="bg-white px-1.5 py-0.5 md:px-2 md:py-1">
            Пропуск трафика
          </p>
          <p className="bg-white px-1.5 py-0.5 md:px-2 md:py-1">Аренда сетей</p>
          <p className="bg-white px-1.5 py-0.5 md:px-2 md:py-1">Телефон</p>
          <p className="bg-white px-1.5 py-0.5 md:px-2 md:py-1">
            Мобильная связь
          </p>
        </div>
      </div>
      <div
        className="flex font-mts-compact font-medium text-[#008AE0]
           text-[17px] leading-6
           py-2.5 items-center
           hover:cursor-pointer"
      >
        <a href="">Подробнее</a>
        <img src={boxBlueIcon} className="size-6" />
      </div>
      <img
        src={mgtsServicesImg}
        alt="mgtsServicesImd"
        className="absolute bottom-0 right-0"
      />
    </div>
  );
};

export default ForDevelopers;
