import React from "react";

type SpanProps = {
  text: string;
  customClass?: string;
};

const Span = ({ text, customClass }: SpanProps) => {
  return (
    <span
      className={!customClass ? "font-medium" : "font-medium " + customClass}
    >
      {text}
    </span>
  );
};

export default Span;
