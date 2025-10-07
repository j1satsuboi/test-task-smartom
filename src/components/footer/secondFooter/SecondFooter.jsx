import React from "react";
import { useState } from "react";
import ForOperators from "./ForOperators";
import ForDevelopers from "./ForDevelopers";
import ForPartners from "./ForPartners";
import ForBusiness from "./ForBusiness";
import ForCustomers from "./ForCustomers";
import boxIcon from "../../../assets/box.svg";
import emblemIcon from "../../../assets/emblem.svg";

const SecondFooter = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections = [
    {
      title: "Операторам связи (B2O)",
      content: <ForOperators showTitle={false} />,
      index: 0,
      icon: null,
    },
    {
      title: "Госзаказчикам (B2G)",
      content: <ForCustomers showTitle={false} />,
      index: 1,
      icon: emblemIcon,
    },
    {
      title: "Застройщикам",
      content: <ForDevelopers showTitle={false} />,
      index: 2,
      icon: null,
    },
    {
      title: "Бизнесу (B2B)",
      content: <ForBusiness showTitle={false} />,
      index: 3,
      icon: null,
    },
    {
      title: "Партнерам",
      content: <ForPartners showTitle={false} />,
      index: 4,
      icon: null,
    },
  ];

  return (
    <div
      className="w-full
      px-3 md:px-10 xl:px-14 3xl:px-46
      pt-8 xl:pt-10 3xl:pt-20"
    >
      {/* < 1280px */}
      <div className="container mx-auto flex flex-col xl:hidden gap-4 md:gap-6">
        {sections.map(({ title, content, index, icon }) => (
          <div key={index} className="border-b border-[#BCC3D080]">
            <button
              onClick={() => toggleSection(index)}
              className="w-full pb-6 flex justify-between hover:cursor-pointer"
            >
              <div className="flex items-center gap-2">
                {icon && (
                  <img
                    src={emblemIcon}
                    alt="emblemIcon"
                    className="size-6 invert"
                  />
                )}
                <p className="font-mts-compact font-medium text-xl leading-6 text-white">
                  {title}
                </p>
              </div>
              <img
                src={boxIcon}
                alt={boxIcon}
                className={`size-6 transition-transform duration-300
                  ${openSection === index ? "rotate-0" : "-rotate-90"}`}
              />
            </button>
            <div
              className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                openSection === index
                  ? "grid-rows-[1fr] visible pb-6"
                  : "grid-rows-[0fr] invisible pb-0"
              }`}
            >
              <div className="min-h-0">{content}</div>
            </div>
          </div>
        ))}
        <div className="w-full flex flex-col md:flex-row justify-between gap-6 md:gap-0">
          <div className="flex flex-col justify-between gap-2">
            <p className="font-mts-compact font-normal text-white text-sm leading-5">
              Поддержка:
            </p>
            <p className="font-mts-compact font-medium text-white text-xl leading-6">
              8 495 700-70-70
            </p>
          </div>
          <div className="flex flex-col justify-between gap-2">
            <p className="font-mts-compact font-normal text-white text-sm leading-5">
              Поддержка:
            </p>
            <p className="font-mts-compact font-medium text-white text-xl leading-6">
              8 499 323-88-50
            </p>
          </div>
          <div className="flex flex-col justify-between gap-2">
            <p className="font-mts-compact font-normal text-white text-sm leading-5">
              Для официальных писем юридических лиц
            </p>
            <p className="font-mts-compact font-normal text-white text-[17px] underline">
              mgts@mgts.ru
            </p>
          </div>
        </div>
      </div>

      {/* >= 1280px */}
      <div
        className="container mx-auto hidden xl:grid grid-cols-4 3xl:grid-cols-5
        gap-4 md:gap-6 xl:gap-16 3xl:gap-[98px]"
      >
        <div className="flex flex-col xl:gap-16">
          <ForOperators />
          <div className="block 3xl:hidden">
            <ForPartners />
          </div>
        </div>
        <ForDevelopers />
        <ForCustomers />
        <div className="hidden 3xl:block">
          <ForPartners />
        </div>
        <ForBusiness />
      </div>
    </div>
  );
};

export default SecondFooter;
