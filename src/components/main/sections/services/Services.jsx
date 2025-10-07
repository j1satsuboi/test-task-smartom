import React, { act, useState } from "react";
import emblemIcon from "../../../../assets/emblem.svg";
import boxBlueIcon from "../../../../assets/box_blue.svg";
import ForOperators from "./ForOperators";
import ForCustomers from "./ForCustomers";
import ForDevelopers from "./ForDevelopers";
import ForBusiness from "./ForBusiness";

const Services = () => {
  const [activeCard, setActiveCard] = useState("operators");

  const cards = [
    { id: "operators", component: <ForOperators />, title: "Операторам связи" },
    {
      id: "customers",
      component: <ForCustomers />,
      title: "Госзаказчикам",
      img: emblemIcon,
    },
    { id: "developers", component: <ForDevelopers />, title: "Застройщикам" },
    { id: "business", component: <ForBusiness />, title: "Бизнесу" },
  ];

  const getActiveCard = () => {
    const currentCard = cards.find((card) => card.id === activeCard);
    return currentCard.component;
  };

  return (
    <div
      className="bg-white 
      px-3 md:px-10 xl:px-14 3xl:px-46
      pt-16 md:pt-20 xl:pt-30 3xl:pt-40"
    >
      <section
        id="Services"
        className="container mx-auto flex flex-col justify-between
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
            ¬ услуги
          </p>
          <h2
            className="font-mts-wide font-medium text-[#1D2023]
            text-2xl leading-7
            md:text-[32px] md:leading-11
            xl:text-[44px]"
          >
            НАШИ УСЛУГИ
          </h2>
        </div>
        <div className="xl:flex xl:justify-between xl:gap-8">
          <div
            className="flex flex-col justify-between
            gap-8 md:gap-10 xl:gap-14 3xl:gap-20
            xl:flex-2/3"
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className={`flex flex-col ${
                  card.id === activeCard ? "gap-6" : "gap-0"
                }`}
              >
                <button
                  onClick={() => setActiveCard(card.id)}
                  className="flex items-center gap-2 md:gap-4
                  hover:cursor-pointer text-left"
                >
                  <img
                    src={boxBlueIcon}
                    alt="boxIcon"
                    className={`size-6 md:size-10 xl:size-14 3xl:size-16
                    transition-transform duration-300 shrink-0 ${
                      activeCard === card.id
                        ? "max-w-max rotate-0"
                        : "xl:hidden max-w-0 rotate-90"
                    }`}
                  />
                  <div className="flex items-center gap-2">
                    <h3
                      className={`font-mts-wide font-medium text-2xl leading-7 md:uppercase
                      md:text-[44px] md:leading-11
                      xl:text-[64px] xl:leading-18 ${
                        card.id === activeCard
                          ? "text-[#1D2023]"
                          : "text-[#969FA8]"
                      }`}
                    >
                      {card.title}
                    </h3>
                    {card.img && (
                      <img
                        src={card.img}
                        alt={`${card.img}`}
                        className={`ml-2 size-6 md:size-10 xl:size-14 3xl:size-16 shrink-0 ${
                          card.id === activeCard ? "" : "opacity-40"
                        }`}
                      />
                    )}
                  </div>
                </button>
                <div
                  className={`xl:hidden transition-all duration-300 ease-in-out overflow-hidden
                  ${
                    activeCard === card.id
                      ? "max-h-max opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {card.component}
                </div>
              </div>
            ))}
          </div>
          <div
            key={activeCard}
            className="hidden xl:block flex-1/3
            transition-all duration-300 animate-fadein overflow-hidden"
          >
            {getActiveCard()}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
