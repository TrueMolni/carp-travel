import React from "react";
import Title from "./shared/Title";
import Text from "./shared/Text";
import Span from "./shared/Span";
// import Button from "./shared/SubmitBtn";

const Hero = () => {
  return (
    <div className="text-accent-500 flex flex-col mm:gap-6 mm:relative mm:pt-[76px]">
      <div>
        <Title
          size="h1"
          title="
        Carpathian’s 
        Secrets"
          customClass="flex flex-col-reverse mm:max-w-[280px] tablet:min-w-[426px] desk:max-w-[646px]"
        >
          <Span text="Uncover" />
        </Title>
        <Text
          customStyle="mm:text-[10px] mm:leading-[16px] mm:max-w-[157px]"
          text="Hoverla / Yaremche / Zakarpattia /
Vorokhta / Synevyr Lake / Bukovel"
        />
      </div>
      <Text text="We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!"></Text>
      <p className="mm:absolute mm:top-0 flex flex-col w-[118px] h-[52px] shrink-0 self-end">
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
  );
};

export default Hero;
/*






line-height: 15px;
letter-spacing: 9.48px;


*/
