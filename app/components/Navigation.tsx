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
/*
import React from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Header = () => {
  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <header>
      <div className="logo">Logo</div>
      <nav>
        <ul>
          <li>
            <Link
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onClick={() => scrollToSection('section1')}
            >
              Section 1
            </Link>
          </li>
          <li>
            <Link
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onClick={() => scrollToSection('section2')}
            >
              Section 2
            </Link>
          </li>
          <li>
            <Link
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              onClick={() => scrollToSection('section3')}
            >
              Section 3
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

*/
