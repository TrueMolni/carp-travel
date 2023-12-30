"use client";

import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Button from "./shared/Button";

import { useState } from "react";

const Header = () => {
  const [isShow, setIsShow] = useState(false);

  const headerStyle = {
    backgroundImage:
      "linear-gradient(to bottom, rgba(2, 15, 8, 0.5) 0%, rgba(2, 15, 8, 0) 100%), url('images/bg-header-mm.png')",
  };

  return (
    <header
      style={headerStyle}
      className="absolute mm:px-[20px] mm:pt-[36px] w-full mm:bg-header-mm mm:pb-[218px]
      tablet:pt-[25px] tablet:px-[32px] desk:pt-[24px] desk:pb-[88px] desk:px-[104px]"
    >
      <div className="flex items-center justify-between mm:max-w-[480px] tablet:max-w-[768px] desk:max-w-[1280px]">
        <Logo />
        <Navigation />
        <Button text={"menu"} customClass={"mm:block hidden"} />
      </div>
    </header>
  );
};

export default Header;
/*
opacity: 0.5;
background: linear-gradient(180deg, #001826 0%, rgba(0, 37, 49, 0.00) 100%);

opacity: 0.75;
background: linear-gradient(180deg, #001826 0%, rgba(0, 37, 49, 0.00) 100%);


*/
