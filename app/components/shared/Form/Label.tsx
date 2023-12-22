import React from "react";

const Label = ({
  children,
  text,
  customClass,
}: {
  children: React.ReactNode;
  text: string;
  customClass?: string;
}) => {
  const labelClass =
    "text-accent-500 text-xs leading-[24px] font-extralight tracking-default gap-1";
  return (
    <label
      className={!customClass ? labelClass : labelClass + " " + customClass}
    >
      {text}
      {children}
    </label>
  );
};

export default Label;
/*





*/
