import React from "react";

type textProps = {
  text: string;
  customStyle?: string;
  children?: React.ReactNode;
};

const Text = ({ text, customStyle, children }: textProps) => {
  const textStyle = "text-accent-500 font-extralight";
  return (
    <p className={!customStyle ? textStyle : customStyle + " " + textStyle}>
      {children}
      {text}
    </p>
  );
};

export default Text;
