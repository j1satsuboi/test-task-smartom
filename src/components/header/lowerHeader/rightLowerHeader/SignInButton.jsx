import React from "react";
import boxIcon from "../../../../assets/box.svg";

const SignInButton = () => {
  return (
    <button
      className="flex justify-between items-center rounded-md bg-[#008AE0] hover:cursor-pointer
      px-2 py-1.5
      xl:px-2.5 xl:py-2.5"
    >
      <span
        className="font-mts-compact font-medium text-white
        text-sm leading-5 px-1
        xl:text-[17px] xl:leading-6 xl:px-2"
      >
        Войти
      </span>
      <img src={boxIcon} alt="boxIcon" className="size-4" />
    </button>
  );
};

export default SignInButton;
