"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { pages } from "@/constants.data/header/route.data";
import { IPage } from "@/constants.data/header/interface";
import MobileNav from "./MobileNav";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: false, // Disable preloading
});

const Header = () => {
  return (
    <div className="shadow-md w-full   py-2 lg:px-8 px-4 flex justify-between items-center  ">
      {/* logo container =====================> */}
      <div>
        <Link href={"/"}>
          <Image
            className="cursor-pointer"
            src={"/assets/logo.png"}
            width={100}
            height={80}
            alt="Exim Fashion"
          />
        </Link>
      </div>
      {/* Navigation Menu for small Devices ====================> */}
      <div className="lg:hidden block">
        <MobileNav />
      </div>
      {/* Navigation Menu for large Devices ====================> */}
      <div className="lg:block hidden">
        <ul className=" flex items-center gap-8">
          {pages.map((page: IPage) => {
            return (
              <li
                key={page.id}
                className={`hover:text[#F8961B] cursor-pointer ${roboto.className} p-2 text_hover`}
              >
                <Link href={page.route}>{page.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
