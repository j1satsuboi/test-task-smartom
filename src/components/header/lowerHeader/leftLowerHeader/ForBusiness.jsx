import React from "react";
import arrowDownIcon from "../../../../assets/arrow_down.svg";

const ForBusiness = () => {
  return (
    <li className="relative group flex justify-between items-center gap-1 hover:cursor-pointer">
      <span>Бизнесу (B2B)</span>
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
              Телефония
            </a>
          </li>
          <li>
            <a
              href=""
              className="block py-2 px-3 text-gray-500 hover:text-[#008AE0]"
            >
              Мобильная связь
            </a>
          </li>
          <li>
            <a
              href=""
              className="block py-2 px-3 text-gray-500 hover:text-[#008AE0]"
            >
              Виртуальная АТС
            </a>
          </li>
          <li>
            <a
              href=""
              className="block py-2 px-3 text-gray-500 hover:text-[#008AE0]"
            >
              Доступ в интернет
            </a>
          </li>
          <li>
            <a
              href=""
              className="block py-2 px-3 text-gray-500 hover:text-[#008AE0]"
            >
              Телевидение
            </a>
          </li>
          <li>
            <a
              href=""
              className="block py-2 px-3 text-gray-500 hover:text-[#008AE0]"
            >
              Видеонаблюдение
            </a>
          </li>
          <li>
            <a
              href=""
              className="block py-2 px-3 text-gray-500 hover:text-[#008AE0]"
            >
              Охрана
            </a>
          </li>
          <li>
            <a
              href=""
              className="block py-2 px-3 text-gray-500 hover:text-[#008AE0]"
            >
              Компьютерная помощь
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default ForBusiness;
