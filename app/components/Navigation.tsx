import React from "react";
import Logo from "./Logo";
isImportTypeAssertionContainer;
import { isImportTypeAssertionContainer } from "typescript";

const Navigation = () => {
  return (
    <nav>
      <Logo />

      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Career</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
