"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const DesktopHeader = () => {
  return (
    <div className="flex justify-between items-center">
      {/* logo container =====================> */}
      <div>
        <Image
          src={"/assets/logo.png"}
          width={100}
          height={80}
          alt="Exim Fashion"
        />
      </div>
      {/* Navigation Menu ====================> */}
      <div>
        <ul className=" flex items-center gap-8">
          <li className="hover:text[#F8961B] p-2 text_hover">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text[#F8961B] p-2 text_hover">
            <Link href={"/about-us"}>About Us</Link>
          </li>
          <li className="hover:text[#F8961B] p-2 text_hover">
            <Link href={"/products"}>Products</Link>
          </li>
          <li className="hover:text[#F8961B] p-2 text_hover">
            <Link href={"/our-clients"}>Our Client</Link>
          </li>
          <li className="hover:text[#F8961B] p-2 text_hover">
            <Link href={"/contacts"}>Contacts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DesktopHeader;
