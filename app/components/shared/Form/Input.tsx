import React from "react";

type InputProps = {
  type?: string;
  customClass?: String;
};

const Input = ({ customClass, type = "text" }: InputProps) => {
  const inputClass =
    "text-accent-500 tm:text-[13px] text-[20px] leading-[24px] tracking-[1.8px] font-extralight bg-[#FFFFFF0D] text-justify";

  return (
    <input
      type={type}
      className={!customClass ? inputClass : inputClass + " " + customClass}
    />
  );
};

export default Input;
