import React from "react";

const ForPartners = ({ showTitle = true }) => {
  return (
    <div className="flex flex-col gap-8">
      {showTitle && (
        <p className="font-mts-compact font-medium text-white text-xl leading-6">
          Партнерам
        </p>
      )}
      <nav aria-label="Партнерам" className="flex flex-col gap-4">
        <a
          href=""
          className="font-mts-compact font-normal text-white text-sm leading-5"
        >
          Закупки
        </a>
        <a
          href=""
          className="font-mts-compact font-normal text-white text-sm leading-5"
        >
          Допуск к проведению работ на линиях и сооружениях связи
        </a>
        <a
          href=""
          className="font-mts-compact font-normal text-white text-sm leading-5"
        >
          Реализация ТМЦ
        </a>
      </nav>
    </div>
  );
};

export default ForPartners;
