import React from "react";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: "url('./mgts_header_screen.png')" }}
      className="bg-cover bg-center bg-no-repeat flex items-end
      min-h-120 pt-22 px-3 pb-6
      md:min-h-130 md:pt-22 md:px-10 md:pb-10
      xl:min-h-157 xl:pt-26 xl:px-14 xl:pb-14
      3xl:min-h-200 3xl:px-46 3xl:pb-16"
    >
      <section
        id="Hero"
        className="container mx-auto
        flex flex-col justify-between
        gap-6 xl:gap-8"
      >
        <div
          className="flex flex-col justify-between
          gap-3 md:gap-4 xl:gap-6"
        >
          <h1
            className="font-mts-wide font-medium text-[#1D2023]
            text-2xl leading-7
            md:text-[44px] md:leading-11
            xl:text-[64px] xl:leading-18"
          >
            МГТС: НАДЁЖНАЯ
            <br />
            ИНФРАСТРУКТУРА
            <br />
            СВЯЗИ
          </h1>
          <p
            className="font-mts-compact font-normal text-[#1D2023]
            text-sm leading-5
            md:text-[17px] md:leading-6
            xl:text-xl xl:leading-7"
          >
            Сила для бизнеса, опора для государства
          </p>
        </div>
        <button
          className="bg-[#1D2023] rounded-md text-white
          font-mts-compact font-medium hover:cursor-pointer
          text-[17px] leading-6 py-[14px] md:max-w-43
          hover:bg-[#008AE0] transition-all duration-300 ease-in-out"
        >
          Стать клиентом
        </button>
      </section>
    </div>
  );
};

export default Hero;
