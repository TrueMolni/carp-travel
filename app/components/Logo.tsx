import Link from "next/link";
import Image from "next/image";

import { karantina } from "./shared/fonts";

const Logo = () => {
  return (
    <Link
      className="inline-flex flex-col gap-0.5 items-start text-accent-500"
      href={"/"}
    >
      <Image src={"/Frame.svg"} alt="Logo" width={61} height={33} />
      <span
        className={`${karantina.className} text-sm 
        leading-[14px] font-normal tracking-[2.59px]`}
      >
        CarpTravel
      </span>
    </Link>
  );
};

export default Logo;
