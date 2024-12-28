import { activities, IActivities } from "@/constants.data/home/activities.data";
import Image from "next/image";
import React from "react";

const Activities = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6  p-4 lg:p-14">
      {activities.map((cart: IActivities) => (
        <div className=" flex-1 border-2 px-4 py-8 rounded-md" key={cart.id}>
          <div className="w-full lg:h-[200px] overflow-hidden h-[120px]">
            <Image
              className="object-cover hover:scale-125 ease-in duration-200"
              src={cart.image}
              width={300}
              height={250}
              alt={cart.title}
            />
          </div>
          <div>
            <h3 className="text-center text-2xl  text_pri mt-4 mb-2">
              {cart.title}
            </h3>
            <p className="text-center text-base">{cart.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Activities;
