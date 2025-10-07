import React from "react";

const ForBusiness = ({ showTitle = true }) => {
  return (
    <div className="flex flex-col gap-8">
      {showTitle && (
        <p className="font-mts-compact font-medium text-white text-xl leading-6">
          Для бизнеса
        </p>
      )}
      <nav aria-label="Для бизнеса" className="flex flex-col gap-4">
        <a
          href=""
          className="font-mts-compact font-normal text-white text-sm leading-5"
        >
          Телефония
        </a>
        <a
          href=""
          className="font-mts-compact font-normal text-white text-sm leading-5"
        >
          Мобильная связь
        </a>
        <a
          href=""
          className="font-mts-compact font-normal text-white text-sm leading-5"
        >
          Виртуальная АТС
        </a>
        <a
          href=""
          className="font-mts-compact font-normal text-white text-sm leading-5"
        >
          Доступ в интернет
        </a>
        <a
          href=""
          className="font-mts-compact font-normal text-white text-sm leading-5"
        >
          Телевидение
        </a>
        <a
          href=""
          className="font-mts-compact font-normal text-white text-sm leading-5"
        >
          Видеонаблюдение
        </a>
        <a
          href=""
          className="font-mts-compact font-normal text-white text-sm leading-5"
        >
          Охрана
        </a>
        <a
          href=""
          className="font-mts-compact font-normal text-white text-sm leading-5"
        >
          Компьютерная помощь
        </a>
      </nav>
    </div>
  );
};

export default ForBusiness;
