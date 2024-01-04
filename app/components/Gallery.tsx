import React from "react";
import Title from "./shared/Title";
import Span from "./shared/Span";
import SliderGallery from "./SliderGallery";
import Image from "next/image";

import { images } from "./shared/data/slidesData";

const Gallery = () => {
  return (
    <div
      className="mm:max-w-[480px] tablet:max-w-[768px] desk:max-w-[1280px] mx-auto
    desk:py-[24px]"
    >
      <Title
        size="h2"
        title="OUR "
        customClass="mm:mb-[24px] tablet:mb-[72px] desk:mb-[24px]"
      >
        <Span text="gallery" />
      </Title>
      <div className="mm:hidden block relative">
        <SliderGallery />
      </div>
      <ul className="mm:flex mm:flex-col mm:gap-6 mm:justify-center mm:items-center hidden">
        {images.slice(3).map(({ id, src, alt }) => (
          <li key={id}>
            <Image
              src={src}
              alt={alt}
              width={280}
              height={187}
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
