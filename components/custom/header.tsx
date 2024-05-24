"use client";

import React from "react";
import FixedAdvertTop from "./FixedAdvertTop";
import { Search, ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import sparkle from "@/lib/icons/icons8-sparkle-96.png";
import { easeIn, motion } from "framer-motion";

const Header = () => {
  return (
    <div className=" w-full">
      <FixedAdvertTop />
      <header className="w-[90%] mx-auto py-[20px] flex items-center justify-between">
        <Image
          src={
            "https://mycoreradiance.com/cdn/shop/files/Screenshot_2022-10-21_at_22.02.57_220x.png?v=1666382669"
          }
          width={200}
          height={200}
          alt=""
        />
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: easeIn }}
          className=" text-black text-base flex items-center space-x-10"
        >
          <Link
            href={"/"}
            className=" hover:underline hover:text-darkslategreen transition-all duration-200 delay-75 ease-in"
          >
            Shop
          </Link>
          <Link
            href={"/shop"}
            className=" hover:underline hover:text-darkslategreen transition-all duration-200 delay-75 ease-in"
          >
            Ingredient
          </Link>
          <Link
            href={"/"}
            className=" hover:underline hover:text-darkslategreen transition-all duration-200 delay-75 ease-in"
          >
            About
          </Link>
          <Link
            href={"/"}
            className=" hover:underline hover:text-darkslategreen transition-all duration-200 delay-75 ease-in"
          >
            <div className=" flex items-center space-x-4">
              <Image src={sparkle} width={20} height={20} alt="" />
              <p>Special offers</p>
              <Image src={sparkle} width={20} height={20} alt="" />
            </div>
          </Link>
          <Link
            href={"/"}
            className=" hover:underline hover:text-darkslategreen transition-all duration-200 delay-75 ease-in"
          >
            Contact
          </Link>
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
      </header>
    </div>
  );
};

export default Header;
