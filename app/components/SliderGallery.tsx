"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { register } from "swiper/element/bundle";
import "swiper/swiper-bundle.css";

import SliderButton from "./shared/SliderButton";

import { images } from "../components/shared/data/slidesData";

type SliderGalleryProps = {};

register();

const SliderGallery: React.FC<SliderGalleryProps> = () => {
  return (
    <Swiper
      navigation
      // pagination={{ type: "progressbar" }}
      modules={[Navigation, Pagination]}
      space-between="24"
      centered-slides="true"
      // slidesPerView="auto"
      autoplay-delay="2500"
      autoplay-disable-on-interaction="false"
      loop={true}
      className="h-[225px] w-[313px] rounded-lg"
    >
      {images.map(({ id, src, alt }) => (
        <SwiperSlide className="" key={id}>
          <div className="flex h-full w-full items-center justify-center">
            <Image
              src={src}
              alt={alt}
              className="block h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
      <SliderButton btnText="next" position="next" />
      <SliderButton position="back" btnText="back" />
    </Swiper>
  );
};

export default SliderGallery;
