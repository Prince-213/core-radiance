import React, { useState } from "react";
import image1 from "@/lib/images/matheus-ferrero-W7b3eDUb_2I-unsplash.jpg";
import image2 from "@/lib/images/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import image3 from "@/lib/images/olamide-gabriel-o5C-KDbZHww-unsplash.jpg";
import Image from "next/image";
import CoreButton from "../custom/corebutton";
import shampoo from "@/lib/images/pngwing.com.png";
import SlideView from "../custom/SlideInView";
import { color, motion } from "framer-motion";
import coreshampoo from "@/lib/images/shampoo.jpg";
import hairtools from "@/lib/images/hair_care_tools_banner_homeopage_761x.jpg";
import WavyText from "../ace/wavy-text";

const CategorySection = () => {
  const [category, setCategory] = useState(0);

  const content = [
    {
      index: 0,
      descp:
        " Our shampoos are formulated with the finest natural ingredients to gently cleanse your hair while infusing it with essential nutrients. Whether you have dry, oily, or color-treated hair, our range of shampoos caters to every hair type, ensuring a perfect match for your unique needs. Experience the invigorating scents and luxurious lathers that leave your hair feeling refreshed, revitalized, and full of life.!",
      color: "#CDE3E0",
      title: "Shampoos & Conditioners",
    },
    {
      index: 100,
      descp:
        "Enhance your hair care regimen with Core Radiance's premium hair care tools. Designed for both professionals and home users, our tools ensure effortless styling and stunning results.!",
      color: "#DEB18B",
      title: "HairCare Tools",
    },
  ];

  return (
    <motion.div
      initial={{ backgroundColor: "#CDE3E0" }}
      animate={{ backgroundColor: content[category / 100].color }}
      transition={{ duration: 0.2, ease: "circIn" }}
      className=" py-20 w-full min-h-screen lg:h-[90vh] "
    >
      <div className=" w-[90%] h-full mx-auto hidden lg:flex items-center justify-between">
        <div className=" w-[45%] h-full overflow-hidden">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: `-${category}%` }}
            className={` w-full h-full -translate-y-[0%]`}
          >
            <div className=" w-full h-full  rounded-xl overflow-hidden relative">
              <Image
                src={coreshampoo}
                fill
                alt=""
                className=" "
                style={{ objectPosition: "center", objectFit: "cover" }}
              />
              {/* 
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.2, delay: 0.3 }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -50 },
                }}
                className=" z-10 absolute bottom-5"
              >
                <div className="flex items-center">
                  <Image
                    width={200}
                    height={300}
                    className=" z-50  "
                    alt=""
                    src={shampoo}
                  />
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.2, delay: 0.5 }}
                    variants={{
                      visible: { opacity: 1 },
                      hidden: { opacity: 0 },
                    }}
                    className=" space-y-1 w-[18rem] min-h-20 py-5  pl-10  bg-[#000000b2] text-white rounded-tr-lg rounded-br-lg -translate-x-[5.5rem]"
                  >
                    <span className=" uppercase font-medium text-[13px] flex items-center space-x-2">
                      <h1 className=" font-bold mr-2">coreradiance </h1> for
                      spiral curls
                    </span>
                    <h2 className=" font-semibold text-lg">
                      Soft Defining Mousse
                    </h2>
                    <p className=" text-sm">$20</p>
                  </motion.div>
                </div>
              </motion.div> */}
            </div>
            <div className=" w-full h-full  rounded-xl overflow-hidden relative">
              <Image
                src={hairtools}
                fill
                alt=""
                className=" "
                style={{ objectPosition: "center", objectFit: "cover" }}
              />

              {/* <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.2, delay: 0.3 }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -50 },
                }}
                className=" z-10 absolute bottom-5"
              >
                <div className="flex items-center">
                  <Image
                    width={200}
                    height={300}
                    className=" z-50  "
                    alt=""
                    src={shampoo}
                  />
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.2, delay: 0.5 }}
                    variants={{
                      visible: { opacity: 1 },
                      hidden: { opacity: 0 },
                    }}
                    className=" space-y-1 w-[18rem] min-h-20 py-5  pl-10  bg-[#000000b2] text-white rounded-tr-lg rounded-br-lg -translate-x-[5.5rem]"
                  >
                    <span className=" uppercase font-medium text-[13px] flex items-center space-x-2">
                      <h1 className=" font-bold mr-2">coreradiance </h1> for
                      spiral curls
                    </span>
                    <h2 className=" font-semibold text-lg">
                      Soft Defining Mousse
                    </h2>
                    <p className=" text-sm">$20</p>
                  </motion.div>
                </div>
              </motion.div> */}
            </div>
          </motion.div>
        </div>

        <div className=" space-y-10 w-[50%] h-full flex text-black flex-col items-center justify-center">
          <SlideView delay={0.1}>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, ease: "circOut" }}
              className=" text-5xl font-semibold font-melodrama"
            >
              <WavyText text={`Our ${content[category / 100].title}`} />
            </motion.h1>
          </SlideView>

          <div className=" space-x-5">
            <button
              onClick={() => setCategory(0)}
              className={` px-6 py-4 rounded-2xl ${
                category == 0 ? "bg-white" : "bg-[#ffffff6c]"
              }  uppercase text-black`}
            >
              Shampoos & Conditioners
            </button>
            <button
              onClick={() => setCategory(100)}
              className={` px-6 py-4 rounded-2xl ${
                category == 100 ? "bg-white" : "bg-[#ffffff6c]"
              }  uppercase text-black`}
            >
              Hair Care Tools
            </button>
          </div>
          <SlideView delay={0.2}>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className=" text-gray-600 text-center w-[80%] mx-auto text-lg"
            >
              {content[category / 100].descp}
            </motion.h3>
          </SlideView>

          <CoreButton>
            <p className=" uppercase">shop core-radiance</p>
          </CoreButton>
        </div>
      </div>

      <div className=" w-[90%] lg:hidden h-full mx-auto flex flex-col ">
        <div className=" space-y-5 w-full h-full flex text-black flex-col items-center ">
          <SlideView delay={0.1}>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, ease: "circOut" }}
              className=" text-[25px]   lg:text-5xl font-bold lg:font-semibold font-melodrama"
            >
              <WavyText text={`Our ${content[category / 100].title}`} />
            </motion.h1>
          </SlideView>

          <div className=" space-x-5 flex">
            <button
              onClick={() => setCategory(0)}
              className={` lg:px-6 lg:py-4 py-2 px-3 rounded-lg lg:rounded-2xl lg:text-lg text-sm ${
                category == 0 ? "bg-white" : "bg-[#ffffff6c]"
              }  uppercase text-black`}
            >
              Shampoos & Conditioners
            </button>
            <button
              onClick={() => setCategory(100)}
              className={` lg:px-6 lg:py-4 px-3 py-2 text-sm lg:text-lg rounded-lg lg:rounded-2xl ${
                category == 100 ? "bg-white" : "bg-[#ffffff6c]"
              }  uppercase text-black`}
            >
              Hair Care Tools
            </button>
          </div>
          {/* <SlideView delay={0.2}>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className=" text-gray-600 text-center w-[80%] mx-auto text-lg"
            >
              {content[category / 100].descp}
            </motion.h3>
          </SlideView> */}
          <div className=" w-full h-full overflow-hidden">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: `-${category}%` }}
              className={` w-full h-[50vh] -translate-y-[0%]`}
            >
              <div className=" w-full h-full  rounded-xl overflow-hidden relative">
                <Image
                  src={coreshampoo}
                  fill
                  alt=""
                  className=" "
                  style={{ objectPosition: "center", objectFit: "cover" }}
                />
              </div>
              <div className=" w-full h-full  rounded-xl overflow-hidden relative">
                <Image
                  src={hairtools}
                  fill
                  alt=""
                  className=" "
                  style={{ objectPosition: "center", objectFit: "cover" }}
                />
              </div>
            </motion.div>
          </div>
          <SlideView delay={0.2}>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className=" text-gray-600 text-center w-full mx-auto leading-[2rem] "
            >
              {content[category / 100].descp}
            </motion.h3>
          </SlideView>
          {/* 
          <CoreButton>
            <p className=" uppercase">shop core-radiance</p>
          </CoreButton> */}
        </div>
      </div>
    </motion.div>
  );
};

export default CategorySection;
