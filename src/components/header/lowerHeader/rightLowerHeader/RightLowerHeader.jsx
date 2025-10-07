import React from "react";
import SearchInput from "./SearchInput";
import SignInButton from "./SignInButton";
import MenuButton from "./MenuButton";

const RightLowerHeader = () => {
  return (
    <div className="flex justify-between items-center gap-2 md:gap-4 xl:gap-8">
      <SearchInput />
      <SignInButton />
      <MenuButton />
    </div>
  );
};

export default RightLowerHeader;
