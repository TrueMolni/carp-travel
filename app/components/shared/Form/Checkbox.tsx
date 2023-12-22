import React from "react";

type CheckboxProps = {
  name: string;
  customClass?: string;
  value: string;
};

const Checkbox = ({ name, customClass, value }: CheckboxProps) => {
  return (
    <input className={customClass} type="checkbox" name={name} value={value} />
  );
};

export default Checkbox;
