"use client";
import { IPage } from "@/constants.data/header/interface";
import { pages } from "@/constants.data/header/route.data";
import Link from "next/link";
import React, { useState } from "react";
import { Roboto } from "next/font/google";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: false, // Disable preloading
});

const MobileNav = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="">
      {/* toggle box */}
      <div>
        {toggle ? (
          <RxCross2 className="text-3xl" onClick={handleToggle} />
        ) : (
          <FaBars className="text-3xl" onClick={handleToggle} />
        )}
      </div>
      {/* list box */}
      <div className="relative">
        <ul
          className={`flex flex-col gap-2 absolute pt-2 top-[14px] px-4 pb-2 z-[100] h-screen w-[260px] bg-black bg-opacity-40 backdrop-blur-md shadow-lg
            transition-all duration-400 ${
              toggle ? "left-[-200px] opacity-100" : "right-[-300px] opacity-0"
            }`}
        >
          {pages.map((page: IPage) => (
            <li
              key={page.id}
              className={`flex items-center gap-2 text-base ${roboto.className} text-white p-2 w-full`}
            >
              {page.icon && <page.icon className="text-xl" />}{" "}
              {/* Render icon if it exists */}
              <Link onClick={handleToggle} href={page.route}>
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
