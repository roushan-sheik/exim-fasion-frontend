import React from "react";
import EximTitle from "../ui/eximfashion/EximTitle";
import Image from "next/image";
import { whatDefines } from "@/constants.data/home/whatDefine.data";
import { IDefine } from "@/constants.data/home/interface";

const WhatDefineUs = () => {
  return (
    <div className="">
      <div className="main_container">
        <EximTitle
          title="Our Story and Mission"
          description="Discover Exim Fashion Bangladesh – a leading garment exporter since 2014. Learn about who we are, our unwavering goal to stay customer-focused, and the journey of excellence through our activities in the fashion industry."
        />
      </div>
      {/* container  */}
      <div className="flex flex-col lg:flex-row  py-8  lg:items-center bg-gradient-to-r from-[#90c5ff] to-[#c7e2ff] ">
        {/* box 1  */}
        <div className="basis-[40%] lg:p-8 p-4">
          <Image src={"/assets/goal.png"} width={500} height={200} alt="" />
        </div>
        {/* box 2  */}
        <div className="basis-[60%] flex gap-4 px-4  flex-col">
          {whatDefines.map((data: IDefine) => (
            <div className="" key={data.id}>
              <h3 className="text-center lg:text-start text_sec text-2xl">
                {data.title}
              </h3>
              <p className="text-base lg:text-justify text-center">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatDefineUs;
