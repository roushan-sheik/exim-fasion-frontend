"use client";

import {
  Carousel,
  CarouselIndicator,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbsContainer,
  SliderMainItem,
} from "@/components/ui/extension/carousel";

import Image from "next/image";

const Slider = () => {
  return (
    <div>
      <Carousel>
        <CarouselNext />
        <CarouselPrevious />
        <div className="relative ">
          <CarouselMainContainer className="h-60">
            <SliderMainItem className="bg-transparent  ">
              <div className="outline outline-1 outline-border size-full flex items-center justify-center rounded-xl bg-background">
                <h2>Slide 1</h2>
                <Image
                  className="object-contain"
                  src={
                    "https://i.pinimg.com/736x/a9/b4/b3/a9b4b3d1a6503664745785947341e2c7.jpg"
                  }
                  fill={true}
                  alt={"Slider"}
                />
              </div>
            </SliderMainItem>
            <SliderMainItem className="bg-transparent  ">
              <div className="outline outline-1 outline-border size-full flex items-center justify-center rounded-xl bg-background">
                <h2>Slide 2</h2>
                <Image
                  className="object-contain"
                  src={
                    "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?cs=srgb&dl=pexels-kowalievska-1126993.jpg&fm=jpg"
                  }
                  fill={true}
                  alt={"Slider"}
                />
              </div>
            </SliderMainItem>
          </CarouselMainContainer>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
            <CarouselThumbsContainer className="gap-x-1 ">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselIndicator key={index} index={index} />
              ))}
            </CarouselThumbsContainer>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
