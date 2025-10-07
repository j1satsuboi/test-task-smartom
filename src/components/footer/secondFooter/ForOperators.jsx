import React from "react";

const ForOperators = ({ showTitle = true }) => {
  return (
    <div className="flex flex-col gap-8">
      {showTitle && (
        <p className="font-mts-compact font-medium text-white text-xl leading-6">
          Операторам связи
        </p>
      )}
      <nav aria-label="Операторам связи" className="flex flex-col gap-4">
        <a
          href=""
          className="font-mts-compact font-normal text-white text-sm leading-5"
        >
          Голосовые услуги
        </a>
        <a
          href=""
          className="font-mts-compact font-normal text-white text-sm leading-5"
        >
          Передача данных
        </a>
        <a
          href=""
          className="font-mts-compact font-normal text-white text-sm leading-5"
        >
          Инфраструктура
        </a>
      </nav>
    </div>
  );
};

export default ForOperators;
