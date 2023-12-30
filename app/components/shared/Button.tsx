type ButtonProps = {
  text: String;
  customClass?: String;
};

const Button = ({ text, customClass }: ButtonProps) => {
  const btnClass =
    "text-accent-500 mm:text-[14px] mm:tracking-[1.4px] mm:font-normal mm:uppercase";

  return (
    <button
      type="button"
      className={!customClass ? btnClass : btnClass + " " + customClass}
    >
      {text}
    </button>
  );
};

export default Button;
