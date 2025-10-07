import React from "react";
import arrowDownIcon from "../../../../assets/arrow_down.svg";
import emblemIcon from "../../../../assets/emblem.svg";

const ForCustomers = () => {
  return (
    <li className="relative group flex justify-between items-center gap-1 hover:cursor-pointer">
      <img src={emblemIcon} alt="emblemIcon" className="size-6" />
      <span>Госзаказчикам (B2G)</span>
      <img
        src={arrowDownIcon}
        alt="arrowDownIcon"
        className="size-4 transition-transform duration-200 group-hover:rotate-180 brightness-0"
      />
      <div
        className="absolute top-full mt-2 p-4 bg-white rounded-lg shadow-lg border border-gray-200 z-30
        opacity-0 invisible transition-all duration-200 group-hover:opacity-100 group-hover:visible"
      >
        <ul className="flex flex-col gap-2">
          <li>
            <a
              href=""
              className="block py-2 px-3 text-gray-500 hover:text-[#008AE0]"
            >
              Услуги связи
            </a>
          </li>
          <li>
            <a
              href=""
              className="block py-2 px-3 text-gray-500 hover:text-[#008AE0]"
            >
              Инфраструктура связи
            </a>
          </li>
          <li>
            <a
              href=""
              className="block py-2 px-3 text-gray-500 hover:text-[#008AE0]"
            >
              Цифровые сервисы
            </a>
          </li>
          <li>
            <a
              href=""
              className="block py-2 px-3 text-gray-500 hover:text-[#008AE0]"
            >
              Индивидуальные решения
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default ForCustomers;
