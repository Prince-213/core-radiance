"use client";

import Image from "next/image";

import ItemCard from "@/components/custom/itemcard";

import CoreButton from "@/components/custom/corebutton";

import image1 from "@/lib/images/autumn-goodman-vTL_qy03D1I-unsplash.jpg";
import image2 from "@/lib/images/coregirls.jpg";
import image3 from "@/lib/images/elsa-olofsson-Pm0K9Y3EPUc-unsplash.jpg";

import { useScroll } from "framer-motion";

import { easeOut, motion, stagger } from "framer-motion";
import {
  Leaf,
  Flower,
  Vegan,
  ChevronUp,
  ChevronDown,
  Circle,
  ChevronRightCircle,
  ChevronLeftCircle,
} from "lucide-react";
import PreLoader from "@/components/custom/pre-loader";

import { useState } from "react";
import clsx from "clsx";
import WavyText from "../ace/wavy-text";

const LandingSection = () => {
  const [heroSlide, setHeroSlide] = useState(0);

  return (
    <main className=" w-full min-h-screen lg:h-screen  lg:overflow-hidden lg:relative">
      <motion.div
        initial={{ translateY: 0 }}
        animate={{ translateY: `-${heroSlide}vh` }}
        transition={{ duration: 0.4, ease: "circInOut" }}
        className=" hidden lg:block"
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
                <WavyText text="GET STRONGER, HEALTHIER LOOKING HAIR." />
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
                <WavyText text="SAY HELLO TO HEALTHY, RADIANT LOCKS!." />
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

      <motion.div
        initial={{ translateY: 0 }}
        animate={{ translateY: `-${heroSlide}vh` }}
        transition={{ duration: 0.4, ease: "circInOut" }}
      >
        <div className=" bg-[#ebedee]  w-full min-h-screen relative text-black flex flex-col   ">
          <div className=" w-full h-28 bg-[#edeff198] border-transparent shadow-none outline-none"></div>
          <div className="h-[50vh]  w-full relative">
            <Image
              src={image2}
              fill
              alt=""
              className=""
              style={{ objectPosition: "top", objectFit: "cover" }}
            />
          </div>
          <div className=" w-full h-fit py-10 bg-coregold">
            <motion.div className=" w-full flex-col flex justify-center items-center    text-black">
              {/* <motion.p
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
              </motion.p> */}
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
                className=" text-center w-[85%] text-pretty justify-center mx-auto  font-melodrama text-[42px]  font-[700]"
              >
                Immerse yourself in our World of All-Natural Haircare.
              </motion.h1>
              <br />
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
                className=" text-xl font-normal"
              >
                Welcome to core radiance.
              </motion.p>
              <br />
              <button className=" text-white w-[80%] font-bold uppercase text-lg mx-auto bg-[#d53f53] rounded-lg py-4">
                Shop now
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className=" absolute lg:flex flex-row space-x-4 bottom-[10%] left-[5%] hidden">
        <button onClick={() => setHeroSlide(0)}>
          <ChevronLeftCircle
            fill={`${heroSlide == 0 ? "black" : "transparent"}`}
          />
        </button>
        <button onClick={() => setHeroSlide(100)}>
          <ChevronRightCircle
            fill={`${heroSlide == 0 ? "transparent" : "black"}`}
          />
        </button>
      </div>
    </main>
  );
};

export default LandingSection;
