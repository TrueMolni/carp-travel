import React from "react";
import Link from "next/link";
import Image from "next/image";

// import logo from "../images/CarpTravelLogo.svg";
// import logo from "../images/CarpTravelLogoPng.png";

const Logo = () => {
  //   console.log(logo);
  return (
    <Link className="flex" href={"/"}>
      <Image src={"/Frame.svg"} alt="Logo" width={61} height={33} />
      <span className="text-[#fff]">CarpTravel</span>
    </Link>
  );
};

export default Logo;
/* 
color: #FFF;

leading-trim: both;

text-edge: cap;
font-family: Karantina;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 2.59px;
*/
