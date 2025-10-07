import React from "react";
import emblemIcon from "../../../assets/emblem.svg";

const ForCustomers = ({ showTitle = true }) => {
  return (
    <div className="flex flex-col gap-8">
      {showTitle && (
        <div className="flex gap-2.5">
          <img src={emblemIcon} alt="emblemIcon" className="size-6 invert" />
          <p className="font-mts-compact font-medium text-white text-xl leading-6">
            Госзаказчикам
          </p>
        </div>
      )}
      <nav aria-label="Госзаказчикам" className="flex flex-col gap-4">
        <a
          href=""
          className="font-mts-compact font-normal text-white text-sm leading-5"
        >
          Услуги связи
        </a>
        <a
          href=""
          className="font-mts-compact font-normal text-white text-sm leading-5"
        >
          Инфраструктура связи
        </a>
        <a
          href=""
          className="font-mts-compact font-normal text-white text-sm leading-5"
        >
          Цифровые сервисы
        </a>
        <a
          href=""
          className="font-mts-compact font-normal text-white text-sm leading-5"
        >
          Индивидуальные решения
        </a>
      </nav>
    </div>
  );
};

export default ForCustomers;
