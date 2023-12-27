import React from "react";

const Title = ({
  title,
  size,
  customClass,
  children,
}: {
  title: string;
  size: string;
  customClass?: string;
  children?: React.ReactNode;
}) => {
  const mainTitleStyles = "";
  const secondaryTitleStyles =
    "uppercase text-accent-500 tablet:text-[67px] mm:text-[40px] text-8xl mm:leading-[56px] tablet:leading-[81px] leading-[119px] font-thin mm:tracking-[-1.6px] tablet:tracking-[-2.68px] tracking-[-3.92px]";
  const subTitleStyles =
    "uppercase text-accent-500 tm:text-[30px] text-36px font-extralight tm:leading-9 leading-[39px]";

  const markup = (size: string) => {
    switch (size) {
      case "h1":
        return (
          <h1
            className={
              !customClass
                ? mainTitleStyles
                : mainTitleStyles + " " + customClass
            }
          >
            {title}
            {children}
          </h1>
        );

      case "h2":
        return (
          <h2
            className={
              !customClass
                ? secondaryTitleStyles
                : secondaryTitleStyles + " " + customClass
            }
          >
            {title}
            {children}
          </h2>
        );

      case "h3":
        return (
          <h3
            className={
              !customClass ? subTitleStyles : subTitleStyles + " " + customClass
            }
          >
            {title}
            {children}
          </h3>
        );

      default:
        return (
          <h4 className={subTitleStyles}>
            {title} {children}
          </h4>
        );
    }
  };

  return <>{markup(size)}</>;
};

export default Title;
