"use client";

import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Button from "./shared/Button";

import { useState } from "react";

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <header
      className="absolute flex justify-between items-center bg-text-500 bg-opacity-50 
    mm:px-[20px] mm:py-[36px] mm:w-full"
    >
      <Logo />
      <Navigation />
      <Button text={"menu"} customClass={"mm:block hidden"} />
      {/* {isShow && <Button text={"menu"} />} */}
    </header>
  );
};

export default Header;
