import React from "react";
import Link from "next/link";

import Title from "./shared/Title";
import Text from "./shared/Text";
import Span from "./shared/Span";

const Hero = () => {
  return (
    <div
      className="text-accent-500 flex mm:flex-col flex-row mm:mx-auto mm:gap-6 mm:relative mm:pt-[76px] tablet:pt-[122px] tablet:justify-between desk:justify-between
    mm:max-w-[480px] tablet:max-w-[768px] desk:max-w-[1280px] mx-auto desk:p-[24px]"
    >
      <div>
        <Title
          size="h1"
          title="
        Carpathian’s 
        Secrets"
          customClass="flex flex-col-reverse mm:max-w-[280px] tablet:max-w-[426px] desk:max-w-[646px] tablet:mb-[68px] desk:mb-[148px]"
        >
          <Span text="Uncover" />
        </Title>
        <Text
          customStyle="mm:text-[10px] tm:leading-[16px] mm:max-w-[157px] tablet:w-[264px] tablet:text-[14px] tablet:tracking-[1.26px] desk:text-[16px] leading-[24px] tracking-[1.44px]"
          text="Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel"
        />
      </div>
      <div className="flex flex-col justify-start tablet:max-w-[230px] desk:max-w-[294px]">
        <p
          className="mm:absolute mm:top-0 flex flex-col mm:w-[118px] tablet:max-w-[230px] desk:max-w-[305px] 
        mm:h-[52px] shrink-0 self-end mm:gap-6"
        >
          <span>
            <Span
              text="7"
              customClass="mm:text-[37px] mm:leading-[45px] tablet:text-[67px] desk:text-[98px] tablet:leading-[81px]"
            />
            <span className="mm:text-[37px] mm:leading-[45px] tablet:text-[67px] desk:text-[98px] font-thin mm:tracking-[1.665px] tablet:tracking-[8.71px]">
              DAYS
            </span>
          </span>
          <span
            className="text-right font-light mm:text-[12px] mm:leading-[15px] mm:tracking-[9.48px] tablet:text-[14px] tablet:leading-[17px] tablet:tracking-[25.9px] mm:mt-[-8px] tablet:mt-[-20px]
          desk:text-[16px] desk:leading-[19px] desk:tracking-[36.48px] desk:mt-[-30px]"
          >
            JOURNEY
          </span>
        </p>
        <Text
          text="We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!"
          customStyle="tablet:mt-[56px] tablet:mb-[28px] desk:mt-auto"
        ></Text>
        <Link
          className="uppercase text-center font-bold mm:py-[18px] tablet:py-[14px] desk:py-[16px] px-[64px] mm:text-[18px] leading-[48px] bg-[#FFFFFF19]
          tablet:text-[18px] tablet:leading-[22px] desk:text-[32px] desk:leading-[39px]"
          href={`#contacts`}
        >
          join now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
/*
width: 230px;
padding: 14px 64px;


width: 230px;
padding: 16px 64px;
*/
