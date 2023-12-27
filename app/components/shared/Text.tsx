import React from "react";

type textProps = {
  text: string;
  customStyle?: string;
};

const Text = ({ text, customStyle }: textProps) => {
  const textStyle =
    "text-accent-500 mm:text-sm tablet:text-[13px] text-[18px] tm:leading-5 leading-6 font-extralight mm:text-start text-justify";
  return (
    <p className={!customStyle ? textStyle : customStyle + " " + textStyle}>
      {text}
    </p>
  );
};

export default Text;
