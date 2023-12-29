import React from "react";

import LinkBtn from "./shared/LinkBtn";

const Navigation = () => {
  return (
    <nav className="mm:hidden">
      <ul
        className="inline-flex mm:flex-col mm:justify-center mm:items-center mm:gap-12 
      tm:justify-end items-start tm:gap-6 gap-14 "
      >
        <li>
          <LinkBtn textref="#about" customClass={""} text={"About"} />
        </li>
        <li>
          <LinkBtn textref="#services" customClass={""} text={"Services"} />
        </li>
        <li>
          <LinkBtn textref="#career" customClass={""} text={"Career"} />
        </li>
        <li>
          <LinkBtn textref="#gallery" customClass={""} text={"Gallery"} />
        </li>
        <li>
          <LinkBtn textref="#contacts" customClass={""} text={"Contacts"} />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
