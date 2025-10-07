import React from "react";
import mgtsLogo from "../../../../assets/mgts_logo.svg";
import ForOperators from "./ForOperators";
import ForCustomers from "./ForCustomers";
import ForDevelopers from "./ForDevelopers";
import ForBusiness from "./ForBusiness";
import ForPartners from "./ForPartners";
import More from "./More";
import SearchInput from "./SearchInput";

const LeftLowerHeader = () => {
  return (
    <div className="flex justify-between items-center gap-1 xl:gap-6 3xl:gap-21">
      <img src={mgtsLogo} alt="mgtsLogo" className="size-8 xl:size-12" />
      <div className="hidden xl:flex justify-between items-center">
        <nav aria-label="Основная навигация для клиентов">
          <ul
            className="flex justify-between items-center gap-4 3xl:gap-6
            font-mts-compact font-medium text-sm leading-5 text-[#1D2023]"
          >
            <ForOperators />
            <ForCustomers />
            <ForDevelopers />
            <ForBusiness />
            <ForPartners />
            <More />
            <li className="hidden 3xl:flex hover:text-[#008AE0]">
              <a href="">Коммерческая недвижимость</a>
            </li>
          </ul>
        </nav>
      </div>
      <SearchInput />
    </div>
  );
};

export default LeftLowerHeader;
