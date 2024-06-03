"use client";

import Image from "next/image";

import ItemCard from "@/components/custom/itemcard";

import CoreButton from "@/components/custom/corebutton";

import image1 from "@/lib/images/autumn-goodman-vTL_qy03D1I-unsplash.jpg";
import image2 from "@/lib/images/coregirls.jpg";
import image3 from "@/lib/images/elsa-olofsson-Pm0K9Y3EPUc-unsplash.jpg";

import { easeOut, motion, stagger } from "framer-motion";
import {
  Leaf,
  Flower,
  Vegan,
  ChevronUp,
  ChevronDown,
  Circle,
} from "lucide-react";
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
        <div className=" w-full h-screen relative text-black  flex items-center ">
          <div className=" w-[50%] bg-gradient-to-r from-[#ffffffde] from-70% to-transparent z-20 h-full  absolute top-0 left-0 ">
            <motion.div className=" w-[65%] mx-auto  absolute left-[10%] top-[45%] space-y-4 h-fit -translate-y-[10rem]   flex-col flex  pb-20 pt-40   text-black">
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{}}
                transition={{
                  duration: 0.3,
                  delay: 0.2,
                }}
                className=" text-lg leading-tight font-normal text-gray-700 uppercase"
              >
                GET STRONGER, HEALTHIER LOOKING HAIR.
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{}}
                transition={{
                  duration: 0.3,
                  delay: 0.4,
                }}
                className="  font-melodrama text-[46px]  font-[600]"
              >
                Hydration that holds. Beauty that lasts.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{}}
                transition={{
                  duration: 0.3,
                  delay: 0.2,
                }}
                className=" text-2xl mb-20 font-normal"
              >
                Deep hydration for textured hair.
              </motion.p>

              <CoreButton>
                <p>SHOP NOW</p>
              </CoreButton>
            </motion.div>
          </div>
          <div className=" w-[30%] h-full bg-[#E7EBEC] "></div>
          <div className="  h-full w-[70%] relative">
            <Image
              src={image2}
              fill
              alt=""
              className=" -z-10 absolute left-36 float-right"
              style={{ objectPosition: "left", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className=" w-full h-screen relative text-black  flex items-center ">
          <div className=" w-[50%] bg-gradient-to-r from-[#ffffffde] from-70% to-transparent z-20 h-full  absolute top-0 left-0 ">
            <motion.div className=" w-[65%] mx-auto  absolute left-[10%] top-[45%] space-y-4 h-fit -translate-y-[10rem]   flex-col flex  pb-20 pt-40   text-black">
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{}}
                transition={{
                  duration: 0.3,
                  delay: 0.2,
                }}
                className=" text-lg leading-tight font-normal text-gray-700 uppercase"
              >
                SAY HELLO TO HEALTHY, RADIANT LOCKS!.
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{}}
                transition={{
                  duration: 0.3,
                  delay: 0.4,
                }}
                className="  font-melodrama text-[46px]  font-[600]"
              >
                Immerse yourself in our World of All-Natural Haircare.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{}}
                transition={{
                  duration: 0.3,
                  delay: 0.2,
                }}
                className=" text-2xl mb-20 font-normal"
              >
                Welcome to core radiance.
              </motion.p>

              <CoreButton>
                <p>SHOP NOW</p>
              </CoreButton>
            </motion.div>
          </div>
          <div className=" w-[30%] h-full bg-[#F3C872] "></div>
          <div className="  h-full w-[70%] relative">
            <Image
              src={image1}
              fill
              alt=""
              className=" -z-10 absolute left-36 float-right"
              style={{ objectPosition: "left", objectFit: "cover" }}
            />
          </div>
        </div>
      </motion.div>
      <div className=" absolute flex flex-row space-x-4 bottom-[10%] left-[5%]">
        <button onClick={() => setHeroSlide(0)}>
          <Circle fill={`${heroSlide == 0 ? "black" : "transparent"}`} />
        </button>
        <button onClick={() => setHeroSlide(100)}>
          <Circle fill={`${heroSlide == 0 ? "transparent" : "black"}`} />
        </button>
      </div>
    </main>
  );
};

export default LandingSection;
