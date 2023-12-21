import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-text-500 bg-opacity-50 ">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
