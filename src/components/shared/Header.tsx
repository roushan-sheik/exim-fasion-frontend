import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { for_kids, for_men, for_women } from "@/data/header/products";

const Header = () => {
  return (
    <header>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about-us">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={"/products"}>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            </Link>
            <NavigationMenuContent>
              <div className="lg:flex  lg: w-[800px] gap-4">
                <div className="p-4 flex-1">
                  <h4 className=" font-semibold lg:text-xl px-4 ">For Men</h4>
                  <div className="  ">
                    {for_men.map((item) => (
                      <p
                        className="lg:py-2 lg:text-lg hover:bg-gray-300 px-4 py-2 cursor-pointer"
                        key={item}
                        title={item}
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="p-4 flex-1">
                  <h4 className=" font-semibold lg:text-xl px-4 ">For Men</h4>
                  <div className="  ">
                    {for_women.map((item) => (
                      <p
                        className="lg:py-2 lg:text-lg hover:bg-gray-300 px-4 py-2 cursor-pointer"
                        key={item}
                        title={item}
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="p-4 flex-1">
                  <h4 className=" font-semibold lg:text-xl px-4 ">For Men</h4>
                  <div className="  ">
                    {for_kids.map((item) => (
                      <p
                        className="lg:py-2 lg:text-lg hover:bg-gray-300 px-4 py-2 cursor-pointer"
                        key={item}
                        title={item}
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/our-clients">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Our Clients
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;
