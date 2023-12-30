"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { register } from "swiper/element/bundle";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";

import { images } from "../components/shared/data/slidesData";

type SliderGalleryProps = {};

register();

const SliderGallery: React.FC<SliderGalleryProps> = () => {
  const swiperElRef = useRef<Swiper | null>(null);

  useEffect(() => {
    if (swiperElRef.current) {
      // Listen for Swiper events using addEventListener
      swiperElRef.current.addEventListener("swiperprogress", (e) => {
        const [swiper, progress] = e.detail;
        console.log(progress);
      });

      swiperElRef.current.addEventListener("swiperslidechange", () => {
        console.log("slide changed");
      });
    }
  }, []);

  return (
    <Swiper
      ref={swiperElRef}
      navigation
      pagination={{ type: "progressbar" }}
      modules={[Navigation, Pagination]}
      space-between="30"
      centered-slides="true"
      autoplay-delay="2500"
      autoplay-disable-on-interaction="false"
      loop={true}
      className="h-96 w-full rounded-lg"
    >
      {images.map(({ id, src, alt }) => (
        <SwiperSlide key={id}>
          <div className="flex h-full w-full items-center justify-center">
            <Image
              src={src}
              alt={alt}
              className="block h-full w-full object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderGallery;
/*
  
*/
