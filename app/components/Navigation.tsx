import React from "react";

import LinkBtn from "./shared/LinkBtn";

const Navigation = () => {
  return (
    <nav>
      <ul
        className="inline-flex mm:flex-col mm:justify-center mm:items-center mm:gap-12 
      tm:justify-end items-start tm:gap-6 gap-14 "
      >
        <li>
          <LinkBtn textref="#about" text={"About"} />
        </li>
        <li>
          <LinkBtn textref="#services" text={"Services"} customClass={""} />
        </li>
        <li>
          <LinkBtn textref="#career" text={"Career"} customClass={""} />
        </li>
        <li>
          <LinkBtn textref="#gallery" text={"Gallery"} customClass={""} />
        </li>
        <li>
          <LinkBtn textref="#contacts" text={"Contacts"} customClass={""} />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
