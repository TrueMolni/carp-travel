import React from "react";

type submitBtn = {
  text: string;
  disabled: boolean;
  customStyles: string;
};

const SubmitBtn = ({ text, disabled, customStyles }: submitBtn) => {
  const btnStyles =
    "text-accent-500 text-center tm:text-3xl text-[32px] leading-[39px] font-medium";
  return (
    <button
      aria-label="Submit"
      className={!customStyles ? btnStyles : customStyles + " " + btnStyles}
      disabled={disabled}
      type="submit"
    >
      {text}
    </button>
  );
};

export default SubmitBtn;
