"use client";
import React from "react";
import { Roboto, Concert_One } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import EximButton from "../ui/eximfashion/EximButton";
import { slidersData } from "@/constants.data/home/slider.data";
import { ISlider } from "@/constants.data/home/interface";

const inter = Concert_One({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  preload: false, // Disable preloading
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: false, // Disable preloading
});

const EximSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, Virtual]}
        className="mySwiper"
      >
        {slidersData.map((slide: ISlider) => (
          <SwiperSlide key={slide.id}>
            <div
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(32, 83, 248, 0.2)), url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
              }}
              className="h-screen lg:h-[500px] 2xl:h[700px] flex justify-center items-center"
            >
              <div
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(32, 83, 248, 0.4))`,
                }}
                className="mt-[400px] lg:mt-[200px] h-[300px] flex flex-col justify-center lg:px-4 w-full gap-4"
              >
                <h2
                  className={` ${inter.className} text-white text-center uppercase lg:text-6xl text-4xl font-bold`}
                >
                  {slide.title}
                </h2>
                <div className="flex justify-center">
                  <EximButton
                    className={`${roboto.className} text-lg lg:text-xl py-6 flex-grow-0`}
                  >
                    {slide.btnText}
                  </EximButton>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default EximSlider;
