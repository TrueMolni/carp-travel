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
        className="mm:px-[20px] mm:py-[56px] mm:h-[800px] mm:bg-career-mm mm:bg-cover mm:bg-center mm:bg-no-repeat mm:block hidden 
      "
      >
        <Title
          title="Choose"
          size="h2"
          customClass="tablet:text-justify mm:mb-6 tablet:min-w-[368px]"
        >
          <Span text=" US" />
        </Title>

        <Text
          customStyle="w-[179px] ml-auto mm:block tm:inline-block tm:ml-[115px]"
          text="Your chance to join our passionate team in Carpathian tourism. Seeking talented professionals to share our common mission."
        />
        <Title
          title="Why us ?"
          size="h3"
          customClass="mm:text-start text-right mm:mt-9 w-[179px] ml-auto"
        />

        <List data={data} customListStyle="mm:mt-9" />
      </div>

      <div className="mm:block hidden mm:h-[826px] mm:px-[20px] mm:py-[56px] mm:bg-career-mm mm:bg-cover mm:bg-center mm:bg-no-repeat">
        <div className="w-[179px] ml-auto">
          <Text
            text="Don't miss your opportunity!
          Fill out the form right now
          and join our team!"
          />
        </div>
        <Form />
      </div>

      {/*  */}

      <div className="mm:hidden">
        <div className="mm:hidden flex tablet:mb-[5px] tablet:justify-between">
          <Title
            title="Choose"
            size="h2"
            customClass="tablet:text-justify tablet:min-w-[368px]"
          >
            <Span text=" US" />
          </Title>

          <Text
            customStyle="w-[179px] ml-auto tm:inline-block"
            text="Your chance to join our passionate team in Carpathian tourism. Seeking talented professionals to share our common mission."
          />
        </div>
        <div className="mm:hidden flex">
          <div className="mm:hidden flex flex-col mr-[20px]">
            <Title title="Why us ?" size="h3" customClass=" text-right mb-14" />

            <List data={data} customListStyle="tablet:gap-6" />
          </div>

          <div className="mm:h-[826px] mm:px-[20px] mm:py-[56px] mm:bg-career-mm mm:bg-cover mm:bg-center mm:bg-no-repeat">
            <div className="mm:w-[179px] mm:ml-auto tablet:w-[188px] tablet:mb-8">
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
