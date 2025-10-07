import React from "react";
import arrowDonwIcon from "../../../assets/arrow_down.svg";

const LeftUpperHeader = () => {
  return (
    <div className="hidden xl:flex justify-between items-center">
      <nav aria-label="Основная пагинация">
        <ul className="flex justify-between items-center gap-6">
          <li className="flex justify-between items-center gap-1 hover:cursor-pointer">
            <span
              className="font-mts-compact font-medium text-[#626C77]
              text-sm leading-5"
            >
              О компании
            </span>
            <img src={arrowDonwIcon} alt="arrowDownIcon" className="size-4" />
          </li>
          <li className="flex 3xl:hidden justify-between items-center gap-1 hover:cursor-pointer">
            <span
              className="font-mts-compact font-medium text-[#626C77]
              text-sm leading-5"
            >
              Пресс-центр
            </span>
            <img src={arrowDonwIcon} alt="arrowDownIcon" className="size-4" />
          </li>
          <li className="flex justify-between items-center gap-1 hover:cursor-pointer">
            <span
              className="font-mts-compact font-medium text-[#626C77]
              text-sm leading-5"
            >
              Деловая этика и комплаенс
            </span>
            <img src={arrowDonwIcon} alt="arrowDownIcon" className="size-4" />
          </li>
          <li className="flex 3xl:hidden justify-between items-center gap-1 hover:cursor-pointer">
            <span
              className="font-mts-compact font-medium text-[#626C77]
              text-sm leading-5"
            >
              Еще
            </span>
            <img src={arrowDonwIcon} alt="arrowDownIcon" className="size-4" />
          </li>
          <li className="hidden 3xl:flex justify-between items-center gap-1 hover:cursor-pointer">
            <span
              className="font-mts-compact font-medium text-[#626C77]
              text-sm leading-5"
            >
              Раскрытие информации
            </span>
            <img src={arrowDonwIcon} alt="arrowDownIcon" className="size-4" />
          </li>
          <li className="hidden 3xl:flex">
            <a
              href=""
              className="font-mts-compact font-medium text-[#626C77] hover:text-[#008AE0]
              text-sm leading-5"
            >
              Новости
            </a>
          </li>
          <li className="hidden 3xl:flex justify-between items-center gap-1 hover:cursor-pointer">
            <span
              className="font-mts-compact font-medium text-[#626C77]
              text-sm leading-5"
            >
              Документы
            </span>
            <img src={arrowDonwIcon} alt="arrowDownIcon" className="size-4" />
          </li>
          <li className="hidden 3xl:flex">
            <a
              href=""
              className="font-mts-compact font-medium text-[#626C77] hover:text-[#008AE0]
              text-sm leading-5"
            >
              Карьера
            </a>
          </li>
          <li className="hidden 3xl:flex">
            <a
              href=""
              className="font-mts-compact font-medium text-[#626C77] hover:text-[#008AE0]
              text-sm leading-5"
            >
              Контакты
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LeftUpperHeader;
