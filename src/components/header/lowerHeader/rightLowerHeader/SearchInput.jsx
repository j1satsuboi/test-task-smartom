import React from "react";
import searchIcon from "../../../../assets/search.svg";

const SearchInput = () => {
  return (
    <div
      className="hidden md:flex justify-between items-center
      px-2 py-1.5
      xl:px-2.5 xl:py-2.5"
    >
      <img
        src={searchIcon}
        alt="searchIcon"
        className="size-4 xl:size-6 hover:cursor-pointer"
      />
      <input
        type="text"
        placeholder="Поиск"
        className="font-mts-compact font-medium text-[#626C77] 
        text-sm leading-5 px-1 max-w-16
        xl:text-[17px] xl:leading-6 xl:px-2"
      />
    </div>
  );
};

export default SearchInput;
