import React from "react";
import Title from "./shared/Title";
import Text from "./shared/Text";
import Span from "./shared/Span";

const Hero = () => {
  return (
    <div className="text-accent-500 flex mm:flex-col flex-row mm:mx-auto mm:max-w-[480px] mm:gap-6 mm:relative mm:pt-[76px]">
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
      <div className="mm:flex mm:flex-col">
        <Text text="We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!"></Text>
        <p className="mm:absolute mm:top-0 flex flex-col mm:w-[118px] tablet:max-w-[305px]; mm:h-[52px] shrink-0 self-end">
          <span>
            <Span text="7" customClass="mm:text-[37px] mm:leading-[45px]" />
            <span className="mm:text-[37px] mm:leading-[45px] font-thin mm:tracking-[1.665px]">
              DAYS
            </span>
          </span>
          <span className="text-right font-light mm:text-[12px] mm:leading-[15px] mm:tracking-[9.48px] mm:mt-[-8px]">
            JOURNEY
          </span>
        </p>
        <button></button>
      </div>
    </div>
  );
};

export default Hero;
/*
color: #FFF;
font-family: Inter;
font-size: 98px;
font-style: normal;
font-weight: 500;
line-height: normal;

color: #FFF;
font-family: Inter;
font-size: 98px;
font-style: normal;
font-weight: 100;
line-height: normal;

color: #FFF;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 300;
line-height: normal;
letter-spacing: 36.48px;

*/
