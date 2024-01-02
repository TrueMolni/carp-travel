import React from "react";
import { useSwiper } from "swiper/react";
type SliderBtn = {
  btnText: string;
  position?: string;
};
const SliderButton = ({ btnText, position }: SliderBtn) => {
  const swiper = useSwiper();

  const markup = (position: string) => {
    switch (position) {
      case "next":
        return (
          <button
            className="text-accent-500 text-[33px] font-thin leading-10 uppercase"
            onClick={() => swiper.slideNext()}
          >
            {btnText}
          </button>
        );

      default:
        return (
          <button
            className="text-accent-500 text-[33px] font-thin leading-10 uppercase"
            onClick={() => swiper.slidePrev()}
          >
            {btnText}
          </button>
        );
    }
  };

  return <>{markup(position)}</>;
};

export default SliderButton;
