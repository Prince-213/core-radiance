"use client";

import React, { useState } from "react";
import FixedAdvertTop from "./FixedAdvertTop";
import { MenuIcon, Search, ShoppingBagIcon, User } from "lucide-react";
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
import useStore from "@/store";

const Header = () => {
  const { toggleCartModal } = useStore();

  const [mobileNav, setMobileNav] = useState(false);

  const mobileLinks = [
    {
      name: "Home",
      href: "/",
    },

    {
      name: "My Story",
      href: "/my-story",
    },
    {
      name: "Shop",
      href: "/shop",
    },

    {
      name: "Ingridients",
      href: "/ingredients",
    },

    {
      name: "Q&A",
      href: "/asked",
    },

    {
      name: "Contact Us",
      href: "/contact",
    },

    {
      name: "Forum",
      href: "/forum",
    },
  ];

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
              <StyledLink href="/forum">
                <p>Forum</p>
              </StyledLink>
            </motion.nav>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: easeIn, delay: 0.4 }}
              className=" flex items-center space-x-5"
            >
              <button>
                <User />
              </button>
              <button onClick={() => toggleCartModal()} className=" relative">
                <div>
                  <ShoppingBagIcon />
                </div>

                <div className=" w-6 h-6 rounded-full bg-coregold flex items-center justify-center absolute -top-3 -right-2">
                  <p className=" text-white font-medium">3</p>
                </div>
              </button>
            </motion.div>
          </div>
          <div className=" w-full lg:hidden">
            <div className=" lg:hidden w-full flex justify-between items-center">
              <button onClick={() => setMobileNav(!mobileNav)}>
                <MenuIcon />
              </button>

              <Link href={"/"}>
                <Image
                  src={
                    "https://mycoreradiance.com/cdn/shop/files/Screenshot_2022-10-21_at_22.02.57_220x.png?v=1666382669"
                  }
                  width={150}
                  height={150}
                  alt=""
                />
              </Link>
              <button onClick={() => toggleCartModal()} className=" relative">
                <div>
                  <ShoppingBagIcon />
                </div>

                <div className=" w-6 h-6 rounded-full bg-coregold flex items-center justify-center absolute -top-3 -right-2">
                  <p className=" text-white font-medium">3</p>
                </div>
              </button>
            </div>
            <div
              className={` w-full ${
                mobileNav ? "h-fit opacity-100" : "h-0 opacity-0"
              } overflow-hidden transition-all duration-200 ease-linear`}
            >
              <nav className=" w-full">
                <ul className=" flex flex-col gap-1">
                  {mobileLinks.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className=" w-full py-2 text-coregold border-b border-b-gray-200 pb font-semibold text-lg"
                      >
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
