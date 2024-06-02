"use client";

import Image from "next/image";

import ItemCard from "@/components/custom/itemcard";

import CoreButton from "@/components/custom/corebutton";

import image1 from "@/lib/images/content-pixie-TxBQ7yLj6JU-unsplash (1).jpg";
import image2 from "@/lib/images/content-pixie-TxBQ7yLj6JU-unsplash (1).jpg";
import image3 from "@/lib/images/elsa-olofsson-Pm0K9Y3EPUc-unsplash.jpg";

import { easeOut, motion, stagger } from "framer-motion";
import { Leaf, Flower, Vegan, ChevronUp, ChevronDown } from "lucide-react";
import PreLoader from "@/components/custom/pre-loader";

import { useState } from "react";
import clsx from "clsx";

const LandingSection = () => {
  const [heroSlide, setHeroSlide] = useState(0);

  return (
    <main className=" w-full h-screen  overflow-hidden relative">
      <motion.div
        initial={{ translateY: 0 }}
        animate={{ translateY: `-${heroSlide}vh` }}
        transition={{ duration: 0.4, ease: "circInOut" }}
      >
        <div className=" w-full h-screen relative text-black bg-gradient-to-r from-[#ffffffa8] to-transparent from-5% to-90% ">
          <Image
            src={image1}
            fill
            alt=""
            className=" -z-10"
            style={{ objectPosition: "left", objectFit: "cover" }}
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: heroSlide == 0 ? 1 : 0,
              y: heroSlide == 0 ? 0 : 50,
            }}
            transition={{
              staggerChildren: 0.5,
              duration: 0.3,
              delay: 0.4,
            }}
            className=" w-[30%] mx-auto  absolute left-[5%] top-[25%] space-y-4 h-fit -translate-y-[10rem]   flex-col flex  pb-20 pt-40   text-black"
          >
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: heroSlide == 0 ? 1 : 0,
                y: heroSlide == 0 ? 0 : 50,
              }}
              transition={{
                staggerChildren: 0.5,
                duration: 0.3,
                delay: 0.5,
              }}
              className=" text-lg font-light uppercase"
            >
              {"WE'RE TREATING YOU THIS SUMMER."}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: heroSlide == 0 ? 1 : 0,
                y: heroSlide == 0 ? 0 : 50,
              }}
              transition={{
                staggerChildren: 0.5,
                duration: 0.3,
                delay: 0.4,
              }}
              className="  font-melodrama text-[64px]  font-[600]"
            >
              Hydration that holds. Beauty that lasts.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: heroSlide == 0 ? 1 : 0,
                y: heroSlide == 0 ? 0 : 50,
              }}
              transition={{
                staggerChildren: 0.5,
                duration: 0.3,
                delay: 0.5,
              }}
              className=" text-xl font-light uppercase"
            >
              Deep hydration for textured hair.
            </motion.p>
            <br />
            <CoreButton>
              <p>SHOP NOW</p>
            </CoreButton>
          </motion.div>
        </div>
        <div className=" w-full h-screen relative bg-gradient-to-r from-[#ffffffa8] to-transparent from-5% to-90% ">
          <Image
            src={image3}
            fill
            alt=""
            className=" -z-10"
            style={{ objectPosition: "left", objectFit: "cover" }}
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: heroSlide == 100 ? 1 : 0,
              y: heroSlide == 100 ? 0 : 50,
            }}
            transition={{
              staggerChildren: 0.5,
              duration: 0.3,
              delay: 0.4,
            }}
            className=" w-[30%] mx-auto  absolute left-[5%] top-[25%] space-y-4 h-fit -translate-y-[10rem]   flex-col flex  pb-20 pt-40   text-black"
          >
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: heroSlide == 100 ? 1 : 0,
                y: heroSlide == 100 ? 0 : 50,
              }}
              transition={{
                staggerChildren: 0.5,
                duration: 0.3,
                delay: 0.5,
              }}
              className=" text-lg font-light uppercase"
            >
              {"WE'RE TREATING YOU THIS SUMMER."}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: heroSlide == 100 ? 1 : 0,
                y: heroSlide == 100 ? 0 : 50,
              }}
              transition={{
                staggerChildren: 0.5,
                duration: 0.3,
                delay: 0.4,
              }}
              className="  font-melodrama text-[64px]  font-[600]"
            >
              Hydration that holds. Beauty that lasts.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: heroSlide == 100 ? 1 : 0,
                y: heroSlide == 100 ? 0 : 50,
              }}
              transition={{
                staggerChildren: 0.5,
                duration: 0.3,
                delay: 0.5,
              }}
              className=" text-xl font-light uppercase"
            >
              Deep hydration for textured hair.
            </motion.p>
            <br />
            <CoreButton>
              <p>SHOP NOW</p>
            </CoreButton>
          </motion.div>
        </div>
      </motion.div>
      <div className=" absolute flex flex-col space-y-4 bottom-[40%] right-5">
        <button onClick={() => setHeroSlide(0)}>
          <ChevronUp />
        </button>
        <button onClick={() => setHeroSlide(100)}>
          <ChevronDown />
        </button>
      </div>
    </main>
  );
};

export default LandingSection;
