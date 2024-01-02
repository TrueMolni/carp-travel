import React from "react";
import Title from "./shared/Title";
import Span from "./shared/Span";
import SliderGallery from "./SliderGallery";
import Image from "next/image";

import { images } from "../components/shared/data/slidesData";

const Gallery = () => {
  return (
    <div
      className="mm:max-w-[480px] tablet:max-w-[768px] desk:max-w-[1280px] mx-auto
    desk:py-[24px]"
    >
      <Title size="h2" title="OUR ">
        <Span text="gallery" />
      </Title>
      <div className="mm:hidden block">
        <SliderGallery />

        <ul className="mm:flex mm:flex-col mm:gap-6 hidden">
          {images.map(({ id, src, alt }) => (
            <li className="h-full w-full items-center justify-center" key={id}>
              <Image
                src={src}
                alt={alt}
                className="block h-full w-full object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Gallery;
