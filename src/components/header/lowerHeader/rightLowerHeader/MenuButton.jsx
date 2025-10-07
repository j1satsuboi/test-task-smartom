import React, { useState } from "react";
import menuIcon from "../../../../assets/menu.svg";

const MenuButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        className="block xl:hidden hover:cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <img src={menuIcon} alt="menuIcon" className="size-6" />
      </button>
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-[#00000050] z-40"
        >
          <div className="fixed top-0 right-0 min-h-screen py-8 px-10 bg-white border-gray-500 shadow-lg z-50">
            <div className="flex justify-between items-center pb-8 border-b border-[#1D2023] px-10 -mx-10">
              <h2 className="font-mts-wide font-medium text-xl text-[#1D2023]">
                Меню
              </h2>
              <button
                className="hover:cursor-pointer rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <img src={menuIcon} alt="close" className="size-6" />
              </button>
            </div>
            <nav aria-label="Мобильная основная навигация">
              <ul className="flex flex-col gap-8 py-8">
                <li>
                  <a
                    href="#"
                    className="block font-mts-compact font-normal text-lg text-[#1D2023] hover:text-[#008AE0]"
                  >
                    Операторам связи (B2O)
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block font-mts-compact font-normal text-lg text-[#1D2023] hover:text-[#008AE0]"
                  >
                    Госзаказчикам (B2G)
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block font-mts-compact font-normal text-lg text-[#1D2023] hover:text-[#008AE0]"
                  >
                    Застройщикам
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block font-mts-compact font-normal text-lg text-[#1D2023] hover:text-[#008AE0]"
                  >
                    Бизнесу (B2B)
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block font-mts-compact font-normal text-lg text-[#1D2023] hover:text-[#008AE0]"
                  >
                    Партнерам
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuButton;
