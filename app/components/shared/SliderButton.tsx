import React from "react";

const SliderButton = () => {
  return (
    <>
      <button
        type="button"
        className="swiper-button-prev"
        aria-label="button-back"
        style={{ color: "#fff" }}
      >
        BACK
      </button>
      <button
        type="button"
        className="swiper-button-next"
        aria-label="button-next"
        style={{ color: "#fff" }}
      >
        NEXT
      </button>
    </>
  );
};

export default SliderButton;
