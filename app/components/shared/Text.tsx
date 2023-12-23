import React from "react";

type textProps = {
  text: string;
};

const Text = ({ text }: textProps) => {
  return (
    <p
      className="text-accent-500 mm:text-sm tm:text-[13px] text-[18px] 
    tm:leading-5 leading-6 font-extralight mm:text-start text-justify"
    >
      {text}
    </p>
  );
};

export default Text;
