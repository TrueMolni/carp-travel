import React from "react";
import Form from "./shared/Form/Form";
import Title from "./shared/Title";
import Span from "./shared/Span";

const Carrer = () => {
  return (
    <>
      <Title title="Choose" size="h2" customClass="tablet:text-justify">
        <Span text=" US" />
      </Title>
      <Form />
    </>
  );
};

export default Carrer;
