"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, EffectCoverflow } from "swiper/modules";
import SliderButton from "./shared/SliderButton";

import "swiper/swiper-bundle.css";

const configs = {
  spaceBetween: 20,
  modules: [EffectCoverflow, Navigation, A11y],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: { clickable: true },
  grabCursor: true,
  loop: true,
  slidesPerView: 2,
  centeredSlides: true,
  effect: "coverflow",
  loopPreventsSliding: false,
  loopedslides: 1,
  wrapperTag: "ul",
  speed: 1500,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1.32,
    slideShadows: false,
  },
  breakpoints: {
    768: {
      coverflowEffect: {
        rotate: 0,
        stretch: 50,
        depth: 0,
        modifier: 1.32,
        scale: 0.45,
      },
    },
    1280: {
      coverflowEffect: {
        rotate: 0,
        stretch: 120,
        depth: 0,
        modifier: 1.32,
        scale: 0.65,
      },
    },
  },
};

import { images } from "../components/shared/data/slidesData";

type SliderGalleryProps = {};

const SliderGallery: React.FC<SliderGalleryProps> = () => {
  return (
    <>
      <Swiper
        {...configs}
        className="h-[294px] desk:h-[429px] flex justify-center gap-6 relative"
      >
        {images.map(({ id, src, alt }) => (
          <SwiperSlide className="" key={id} tag="li">
            {({ isActive }) => (
              <div
                className={`relative right-8 desk:right-[-12px] w-[415px] desk:w-[606px] h-[294px] desk:h-[429px] 
      ${isActive ? "desk:right-[-10px]" : "opacity-75"}`}
              >
                <Image
                  width={600}
                  height={429}
                  src={src}
                  alt={alt}
                  loading="lazy"
                  sizes="(max-width: 767px) 280px, (max-width: 1279px) 400px, 600px"
                  className="w-[280px] h-[187px] tablet:w-[415px] tablet:h-[294px] desk:w-[600px] desk:h-[429px] object-cover"
                />
                <div
                  className={`absolute top-0 bottom-0 left-0 right-0 
                transition-opacity ease-in duration-300  bg-zinc-950/80
                ${isActive ? "opacity-0" : "opacity-100"}`}
                ></div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderButton />
    </>
  );
};

export default SliderGallery;
