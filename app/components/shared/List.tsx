import React from "react";

type dataProps = {
  id: string;
  title: string;
  text: string;
};

type listProps = {
  data: dataProps[];
  customListStyle?: string;
};
const List = ({ data, customListStyle }: listProps) => {
  return (
    <ul
      className={
        !customListStyle
          ? "flex flex-col gap-4"
          : customListStyle + " " + "flex flex-col gap-4 desk:min-w-[464px]"
      }
    >
      {data.map(({ id, title, text }: dataProps) => (
        <li
          key={id}
          className="flex flex-col gap-2 w-[180px] desk:flex-row desk:w-auto desk:gap-6"
        >
          <p className="text-accent-500 text-right mm:text-[14px] tablet:text-[16px] text-[18px] font-normal tm:leading-5 leading-6 desk:min-w-[285px]">
            {title}
          </p>
          <p className="text-accent-500 tm:text-right text-[12px] font-extralight tm:leading-5 leading-6 desk:min-w-[285px]">
            {text}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default List;

/*
mobile

font-size: 14px;
font-weight: 400;
line-height: 20px; /* 142.857% 

font-size: 12px;
font-weight: 200;
line-height: 20px; /* 166.667% 

tablet

font-size: 16px;
font-weight: 400;
line-height: 20px; /* 125% 

font-size: 12px;
font-weight: 200;
line-height: 20px; /* 166.667% 

font-size: 18px;
font-weight: 400;
line-height: 24px; /* 133.333% 

font-size: 12px;
font-weight: 200;
line-height: 24px; /* 200% 


*/
