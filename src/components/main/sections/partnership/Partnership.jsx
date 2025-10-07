import React from "react";
import { useRef } from "react";
import boxIcon from "../../../../assets/box.svg";
import unlockIcon from "../../../../assets/unlock.svg";
import squareIcon from "../../../../assets/square.svg";
import rubleIcon from "../../../../assets/ruble.svg";
import advertisementIcon from "../../../../assets/advertisement.svg";
import chequeIcon from "../../../../assets/cheque.svg";

const Partnership = () => {
  const partnershipData = [
    {
      title: "Доступ в ЛСС",
      desc: "Соглашения об условиях осуществления работ в линейных сооружениях связи ПАО МГТС",
      img: unlockIcon,
    },
    {
      title: "Аренда площадей",
      desc: "Аренда помещений, расположенные в зданиях АТС по всей Москве, а также в Подмосковье.",
      img: squareIcon,
    },
    {
      title: "Закупки",
      desc: "Политика закупок, направленная на повышение прозрачности закупочной деятельности",
      img: rubleIcon,
    },
    {
      title: "Реклама",
      desc: "МГТС предлагает услуги по размещению рекламы вашего бизнеса на наших рекламных носителях",
      img: advertisementIcon,
    },
    {
      title: "Реализация ТМЦ",
      desc: "Реализация невостребованного имущества и реализации ТМЦ",
      img: chequeIcon,
    },
  ];

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="bg-[#F2F3F7]
      px-3 md:px-10 xl:px-14 3xl:px-46
      mt-16 md:mt-20 xl:mt-30 3xl:mt-40
      pt-10 xl:pt-21 3xl:pt-31
      pb-10 xl:pb-30 3xl:pb-40"
    >
      <section
        id="Partnership"
        className="container mx-auto flex flex-col
        gap-8 md:gap-10 xl:gap-16 3xl:gap-20"
      >
        <div className="flex justify-between items-center">
          <div
            className="flex items-center gap-4 xl:gap-6
            hover:cursor-pointer hover:underline underline-offset-4"
          >
            <h2
              className="font-mts-wide font-medium text-[#1D2023]
              text-2xl leading-7
              md:text-[32px] md:leading-11
              xl:text-[44px] min-[560px]:whitespace-nowrap"
            >
              ЗАРАБАТЫВАЙТЕ
              <br className="min-[560px]:hidden" /> В ПАРТНЕРСТВЕ
            </h2>
            <img
              src={boxIcon}
              alt="boxIcon"
              className="size-6 md:size-8 invert -rotate-90"
            />
          </div>
          <div className="hidden xl:flex items-center gap-5">
            <button
              onClick={scrollLeft}
              className="grid place-items-center bg-white size-11
              rounded-4xl shadow-lg hover:cursor-pointer"
            >
              <img
                src={boxIcon}
                alt="prevIcon"
                className="invert rotate-90 size-6"
              />
            </button>
            <button
              onClick={scrollRight}
              className="grid place-items-center bg-white size-11
              rounded-4xl shadow-lg hover:cursor-pointer"
            >
              <img
                src={boxIcon}
                alt="nextIcon"
                className="invert -rotate-90 size-6"
              />
            </button>
          </div>
        </div>
        <div
          ref={scrollContainerRef}
          className="flex flex-col md:flex-row overflow-x-auto no-scrollbar
          -mx-3 md:-mx-10 xl:-mx-14 3xl:-mx-46
          pl-3 md:pl-10 xl:pl-14 3xl:pl-46
          gap-6 xl:gap-8"
        >
          {partnershipData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-lg flex-shrink-0
              md:w-74 xl:w-91
              px-4 xl:px-10
              py-4 xl:py-10
              gap-6 md:gap-10"
            >
              <div className="grid place-items-center bg-[#F2F3F7] size-14 rounded-4xl">
                <img src={item.img} alt={`${item.img}`} className="size-6" />
              </div>
              <div className="flex flex-col gap-2 xl:gap-4">
                <h3
                  className="font-mts-compact font-medium text-[#1D2023] text-xl leading-6
                  xl:text-2xl xl:leading-7"
                >
                  {item.title}
                </h3>
                <p
                  className="font-mts-compact font-normal text-[#1D2023] text-sm leading-5
                  md:text-xl md:leading-6"
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Partnership;
