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
    "text-accent-500 text-xs leading-[24px] font-extralight tracking-default gap-1 min-w-[280px] flex flex-col";
  return (
    <label
      className={!customClass ? labelClass : customClass + " " + labelClass}
    >
      {text}
      {children}
    </label>
  );
};

export default Label;
/*





*/
