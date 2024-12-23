"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";

const SlideEmbla = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport " ref={emblaRef}>
        <div className="embla__container h-[400px] text-base-900">
          <div className="embla__slide bg-blue-400">
            <Image
              className="object-contain"
              src={
                "https://static.vecteezy.com/system/resources/previews/048/990/359/large_2x/stylish-male-fashion-model-in-a-casual-button-down-shirt-with-a-soft-cream-background-showcasing-contemporary-males-portrait-fashion-and-lifestyle-free-photo.jpg"
              }
              fill={true}
              alt={"Slider"}
            />
          </div>

          <div className="embla__slide bg-blue-400">
            <Image
              className="object-contain"
              src={
                "https://media.allure.com/photos/57dc1a877b47312c0ad83725/16:9/w_2560%2Cc_limit/model%2520jcrew.jpg"
              }
              fill={true}
              alt={"Slider"}
            />
          </div>
          <div className="embla__slide bg-blue-400">
            <Image
              className="object-contain"
              src={
                "https://static.vecteezy.com/system/resources/previews/048/990/359/large_2x/stylish-male-fashion-model-in-a-casual-button-down-shirt-with-a-soft-cream-background-showcasing-contemporary-males-portrait-fashion-and-lifestyle-free-photo.jpg"
              }
              fill={true}
              alt={"Slider"}
            />
          </div>

          <div className="embla__slide bg-blue-400">
            <Image
              className="object-contain"
              src={
                "https://media.allure.com/photos/57dc1a877b47312c0ad83725/16:9/w_2560%2Cc_limit/model%2520jcrew.jpg"
              }
              fill={true}
              alt={"Slider"}
            />
          </div>
        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
    </div>
  );
};
export default SlideEmbla;
