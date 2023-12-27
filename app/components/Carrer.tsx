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
      <div className="mm:px-[20px] mm:py-[56px] mm:h-[800px] mm:bg-career-mm mm:bg-cover mm:bg-center mm:bg-no-repeat">
        <Title title="Choose" size="h2" customClass="tablet:text-justify mb-6">
          <Span text=" US" />
        </Title>
        <div className="w-[179px] ml-auto">
          <Text text="Your chance to join our passionate team in Carpathian tourism. Seeking talented professionals to share our common mission." />
          <Title
            title="Why us ?"
            size="h3"
            customClass="mm:text-start text-right mm:mt-9"
          />
        </div>
        <List data={data} customListStyle="mm:mt-9" />
      </div>
      <div className="mm:h-[826px] mm:px-[20px] mm:py-[56px] mm:bg-career-mm mm:bg-cover mm:bg-center mm:bg-no-repeat">
        <div className="w-[179px] ml-auto">
          <Text
            text="Don't miss your opportunity!
          Fill out the form right now
          and join our team!"
          />
        </div>
        <Form />
      </div>
    </>
  );
};

export default Carrer;
