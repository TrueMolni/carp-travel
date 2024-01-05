"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import Title from "./shared/Title";
import Span from "./shared/Span";

import { data } from "./shared/data/servicesData";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const carouselSettings = {
  spaceBetween: 30,
  navigation: true,
  modules: [EffectFade, Navigation],
  effect: "fade",
  slidesPerView: 1,
};

const Slider = () => {
  const swiperRef = React.useRef<SwiperRef | null>(null);

  const handleSlideClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index, 500);
    }
  };

  return (
    <Swiper
      {...carouselSettings}
      ref={swiperRef}
      className="w-full h-full relative"
    >
      {data &&
        data
          .sort((a, b) => a.id - b.id)
          .map(({ id, bg, image, title, slogan, desc, alt }, index) => (
            <SwiperSlide
              key={id}
              className="mm:max-w-[420px] tablet:max-w-[768px] max-w-fit"
            >
              <div
                className="mm:py-[55px] mm:px-[20px] tablet:py-[64px] tablet:px-[32px] desk:py-[104px] desk:px-[80px] bg-cover bg-center relative"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(2, 15, 8, 0.5) 0%, rgba(2, 15, 8, 0) 100%), url("${bg}")`,
                }}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Tab") {
                    swiperRef.current?.swiper.slideNext(500);
                  }
                }}
              >
                <div className="w-full h-full">
                  <div className="w-full mx-auto mm:max-w-p[480px] h-full">
                    <div className="tablet:flex tablet:gap-36 tablet:items-center tablet:mb-9 desk:justify-normal desk:gap-[170px] desk:mb-5">
                      <Title title="we" size="h2">
                        <Span text="offer" />
                      </Title>
                      <p className="text-[43px] font-thin mb-3 text-right tablet:text-[] tablet:font-thin tablet:mb-0 desk:text-[98px] desk:font-thin">
                        0{id}/<span className="text-[#ffffff50]">05</span>
                      </p>
                    </div>
                    <div className="tablet:flex tablet:gap-5 desk:gap-5">
                      <Image
                        src={image}
                        alt={alt}
                        width={213}
                        height={280}
                        loading="lazy"
                        className="image-slider"
                        sizes="(max-width: 767px) 280px, (max-width: 1279px) 463px, 600px"
                      />
                      <div>
                        <div className="flex flex-col-reverse gap-6 mb-12 mt-2 tablet:mt-0 tablet:mb-10 tablet:flex-col desk:flex-row desk:mt-2 desk:mb-12 desk:gap-2">
                          <ul className="uppercase flex flex-col gap-4 text-xl font-extralight leading-[17px] tablet:text-[22px] desk:text-[28px] desk:gap-6 desk:leading-6 desk:cursor-pointer">
                            {data.map((item, i) => (
                              <li
                                key={item.id}
                                className={`${
                                  title === item.title
                                    ? "font-medium isActive ml-2 tablet:w-[180px] desk:ml-3 desk:w-[240px]"
                                    : "text-white/50 cursor-pointer hover:text-white transition-all duration-300 ease-in-out tablet:w-[180px] desk:w-[240px]"
                                }`}
                                onClick={() => handleSlideClick(i)}
                              >
                                {item.title}
                                {title === item.title && (
                                  <span className="hidden desk:block desk:capitalize desk:absolute desk:top-0 desk:left-[280px] desk:w-[215px] text-xs not-italic font-extralight leading-6 tracking-[2.4px]">
                                    {item.slogan}
                                  </span>
                                )}
                              </li>
                            ))}
                          </ul>
                          <p className="text-text text-[12px] leading-6 tracking-[2.4px] text-right tablet:text-left desk:hidden">
                            {slogan}
                          </p>
                        </div>
                        <p className="text-text leading-5 tablet:text-[13px] tablet:w-[221px] tablet:text-justify desk:w-[290px] desk:text-[18px] desk:leading-6 desk:ml-48">
                          {desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
    </Swiper>
  );
};

export default Slider;
