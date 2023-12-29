import React from "react";
import Form from "./shared/Form/Form";
import Title from "./shared/Title";
import Span from "./shared/Span";
import Text from "./shared/Text";
import List from "./shared/List";

import { data } from "./shared/data/careerData";

const Carrer = () => {
  return (
    <>
      <div
        className="mm:px-[20px] mm:py-[56px] mm:h-[800px] mm:bg-career-mm mm:bg-cover 
        mm:bg-center mm:bg-no-repeat mm:block hidden"
      >
        <div className="max-w-[480px] mx-auto">
          <Title
            title="Choose"
            size="h2"
            customClass="tablet:text-justify mm:mb-6 tablet:min-w-[368px]"
          >
            <Span text=" US" />
          </Title>

          <Text
            customStyle="w-[179px] ml-auto text-accent-500 mm:text-sm tablet:text-[13px] text-[18px] tm:leading-5 leading-6 font-extralight mm:text-start text-justify mm:block tm:inline-block tm:ml-[115px]"
            text="Your chance to join our passionate team in Carpathian tourism. Seeking talented professionals to share our common mission."
          />
          <Title
            title="Why us ?"
            size="h3"
            customClass="mm:text-start text-right mm:mt-9 w-[179px] ml-auto"
          />

          <List data={data} customListStyle="mm:mt-9" />
        </div>
      </div>

      <div
        className="mm:block hidden mm:h-[826px] mm:px-[20px] mm:py-[56px] mm:bg-career-mm 
      mm:bg-cover mm:bg-center mm:bg-no-repeat"
      >
        <div className="max-w-[480px] mx-auto">
          <div className="w-[179px] ml-auto">
            <Text
              text="Don't miss your opportunity!
          Fill out the form right now
          and join our team!"
            />
          </div>
          <Form />
        </div>
      </div>

      {/*  */}

      <div className="mm:hidden desk:min-w-[1280px] desk:p-[24px]">
        <div className="mm:hidden flex tablet:mb-[5px] tablet:justify-between desk:mb-6">
          <Title
            title="Choose"
            size="h2"
            customClass="tablet:text-justify tablet:min-w-[368px]"
          >
            <Span text=" US" />
          </Title>

          <Text
            customStyle="w-[179px] desk:w-[293px] ml-auto tm:inline-block desk:mt-[16px]"
            text="Your chance to join our passionate team in Carpathian tourism. Seeking talented professionals to share our common mission."
          />
        </div>
        <div className="mm:hidden flex desk:justify-center desk:gap-6">
          <div className="mm:hidden flex flex-col mr-[20px]">
            <Title
              title="Why us ?"
              size="h3"
              customClass=" text-right mb-14 desk:mb-[45px] desk:text-center desk:mr-[150px]"
            />

            <List data={data} customListStyle="tablet:gap-6" />
          </div>

          <div className="">
            <div className="tablet:w-[188px] desk:w-[234px] tablet:mb-8 desk:mb-[14px]">
              <Text
                customStyle="tablet:mt-[92px]"
                text="Don't miss your opportunity!
            Fill out the form right now
            and join our team!"
              />
            </div>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carrer;
