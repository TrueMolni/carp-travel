import React from "react";
import Title from "./shared/Title";
import Span from "./shared/Span";
import Text from "./shared/Text";

const About = () => {
  return (
    <div className="relative mm:max-w-[480px] tablet:max-w-[768px] desk:max-w-[1280px] mx-auto desk:p-[24px]">
      <div className="tablet:flex tablet:flex-row tablet:gap-[76px] desk:flex desk:flex-row desk:gap-[24px]">
        <Title title="Who " size="h2" customClass="mm:mb-[8px]">
          <Span text="we are" />
        </Title>
        <div className="tablet:w-[220px] desk:w-[292px]">
          <Text
            customStyle="mm:w-[180px] mm:text-[14px] tablet:text-[16px] desk:text-[18px] mm:mb-[20px] tablet:mb-[16x] desk:mb-[24px] tm:leading-[20px] desk:leading-[24px]"
            text="who are fully committed to the mission of creating unforgettable and extraordinary trips to the most beautiful parts of the Carpathians. Our goal is not just to show you the natural wonders of the mountains, but to provide you with a deep immersion in their magical atmosphere."
          >
            <span className="font-normal">a team of enthusiasts </span>
          </Text>
          <Text
            customStyle="mm:w-[180px] mm:text-[14px] tablet:text-[16px] desk:text-[18px] tm:leading-[20px] desk:leading-[24px]"
            text="that nature has the power to inspire, strengthen character and provide new perspectives. Therefore, each of our tours is aimed at unlocking your potential, enriching your spiritual world and creating unforgettable memories."
          >
            <span className="font-normal">We believe </span>
          </Text>
        </div>
      </div>
      <div
        className="mm:max-w-[180px] tablet:min-w-[218px] desk:min-w-[296px] mm:mt-[40px] mm:ml-auto
      tablet:absolute desk:absolute tablet:bottom-[124px] desk:right-[24px] desk:bottom-[24px]"
      >
        <span
          className="text-accent-500 font-normal uppercase block text-start 
        mm:text-[14px] tablet:text-[16px] desk:text-[18px] tm:leading-[20px] desk:leading-[24px]"
        >
          From vacationers
        </span>
        <span className="text-accent-500 font-normal uppercase block text-end mm:text-[14px] tablet:text-[16px] desk:text-[18px] tm:leading-[20px] desk:leading-[24px]">
          to active travelers
        </span>
        <Text
          customStyle="mm:text-[14px] tablet:text-[16px] desk:text-[18px] tm:leading-[20px] desk:leading-[24px] mm:tracking-[-0.14px] tablet:tracking-[0.32px] desk:tracking-[2.16px;]"
          text="we have a tour for everyone."
        />
      </div>
      <Text
        customStyle="tablet:w-[463px] desk:w-[605px] tablet:ml-auto mm:text-[14px] tablet:text-[16px] desk:text-[18px] tm:leading-[20px] desk:leading-[24px] mm:mt-[40px] tablet:mt-[64px] desk:mt-[72px]"
        text="that are time-tested and proven. Our expert guides with in-depth knowledge of the Carpathian landscapes lead you safely through the mysteries of these mountains."
      >
        <span className="font-normal">We use methods </span>
      </Text>
    </div>
  );
};

export default About;
