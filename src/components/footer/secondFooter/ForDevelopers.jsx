import React from "react";

const ForDevelopers = ({ showTitle = true }) => {
  return (
    <div className="flex flex-col gap-8">
      {showTitle && (
        <p className="font-mts-compact font-medium text-white text-xl leading-6">
          Застройщикам
        </p>
      )}
      <nav aria-label="Застройщикам" className="flex flex-col gap-4">
        <a
          href=""
          className="font-mts-compact font-normal text-white text-sm leading-5"
        >
          Подключение объектов капитального строительства к сетям электросвязи
        </a>
        <a
          href=""
          className="font-mts-compact font-normal text-white text-sm leading-5"
        >
          Перенос инфраструктуры
        </a>
        <a
          href=""
          className="font-mts-compact font-normal text-white text-sm leading-5"
        >
          INDOOR
        </a>
        <a
          href=""
          className="font-mts-compact font-normal text-white text-sm leading-5"
        >
          Инфраструктура Цифрового Здания
        </a>
      </nav>
    </div>
  );
};

export default ForDevelopers;
