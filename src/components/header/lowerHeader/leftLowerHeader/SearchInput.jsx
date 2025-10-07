import React from "react";
import searchIcon from "../../../../assets/search.svg";

const SearchInput = () => {
  return (
    <div
      className="flex md:hidden justify-between items-center
      px-2 py-1.5"
    >
      <img
        src={searchIcon}
        alt="searchIcon"
        className="size-4 hover:cursor-pointer"
      />
      <input
        type="text"
        placeholder="Поиск"
        className="font-mts-compact font-medium text-sm leading-5 text-[#626C77] px-1 max-w-12"
      />
    </div>
  );
};

export default SearchInput;
