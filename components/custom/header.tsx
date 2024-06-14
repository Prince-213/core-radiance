"use client";

import React from "react";
import FixedAdvertTop from "./FixedAdvertTop";
import { MenuIcon, Search, ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import sparkle from "@/lib/icons/icons8-sparkle-96.png";
import { easeIn, motion } from "framer-motion";
import StyledLink from "./stylelink";
import { CalendarDays } from "lucide-react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { HoverCardDemo } from "./extramenuhover";
import { AboutHover } from "./about-hover";

const Header = () => {
  return (
    <div className=" w-full fixed top-0 z-50 ">
      <FixedAdvertTop />

      <div className=" w-full bg-white  lg:bg-white">
        <header className="w-[90%]  mx-auto py-[20px] flex items-center justify-between">
          <div className=" lg:flex items-center justify-between w-full hidden">
            <Link href={"/"}>
              <Image
                src={
                  "https://mycoreradiance.com/cdn/shop/files/Screenshot_2022-10-21_at_22.02.57_220x.png?v=1666382669"
                }
                width={200}
                height={200}
                alt=""
              />
            </Link>

            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: easeIn }}
              className=" text-black text-base flex items-center space-x-10"
            >
              <HoverCardDemo />

              <StyledLink href="/ingredients">
                <p>Ingredient</p>
              </StyledLink>
              <AboutHover />
              {/* <StyledLink href="/">
                <div className=" flex items-center space-x-4">
                  <Image src={sparkle} width={20} height={20} alt="" />
                  <p>Special offers</p>
                  <Image src={sparkle} width={20} height={20} alt="" />
                </div>
              </StyledLink> */}
              <StyledLink href="/contact">
                <p>Contact</p>
              </StyledLink>
            </motion.nav>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: easeIn, delay: 0.4 }}
              className=" flex items-center space-x-5"
            >
              <Search />
              <div className=" relative">
                <ShoppingBagIcon />
                <div className=" w-6 h-6 rounded-full bg-coregold flex items-center justify-center absolute -top-3 -right-2">
                  <p className=" text-white font-medium">3</p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className=" lg:hidden w-full flex justify-between items-center">
            <MenuIcon />
            <Image
              src={
                "https://mycoreradiance.com/cdn/shop/files/Screenshot_2022-10-21_at_22.02.57_220x.png?v=1666382669"
              }
              width={150}
              height={150}
              alt=""
            />
            <div className=" relative">
              <ShoppingBagIcon />
              <div className=" w-6 h-6 rounded-full bg-coregold flex items-center justify-center absolute -top-3 -right-2">
                <p className=" text-white font-medium">3</p>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
