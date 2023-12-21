import React from "react";
import Logo from "./Logo";
import LinkBtn from "./shared/LinkBtn";

const Navigation = () => {
  return (
    <nav>
      <Logo />
      <ul className="inline-flex flex-col justify-center items-center gap-12">
        <li>
          <LinkBtn textref="#" text={"About"} />
        </li>
        <li>
          <LinkBtn textref="#" text={"Services"} customClass={""} />
        </li>
        <li>
          <LinkBtn textref="#" text={"Career"} customClass={""} />
        </li>
        <li>
          <LinkBtn textref="#" text={"Gallery"} customClass={""} />
        </li>
        <li>
          <LinkBtn textref="#" text={"Contacts"} customClass={""} />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
/*

justify-content: center;
align-items: center;
gap: 48px;
*/
