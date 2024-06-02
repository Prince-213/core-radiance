import React, { useState } from "react";
import image1 from "@/lib/images/matheus-ferrero-W7b3eDUb_2I-unsplash.jpg";
import image2 from "@/lib/images/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import image3 from "@/lib/images/olamide-gabriel-o5C-KDbZHww-unsplash.jpg";
import Image from "next/image";
import CoreButton from "../custom/corebutton";
import shampoo from "@/lib/images/pngwing.com.png";
import SlideView from "../custom/SlideInView";
import { color, motion } from "framer-motion";

const CategorySection = () => {
  const [category, setCategory] = useState(0);

  const content = [
    {
      index: 0,
      descp:
        " curls Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaqu neque odio tempora ut, enim commodi molestiae, debitis delectusipsa laboriosam ea nihil hic reiciendis tenetur inventore? Asperiores deleniti animi at!",
      color: "#CDE3E0",
    },
    {
      index: 100,
      descp:
        " waves Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaqu neque odio tempora ut, enim commodi molestiae, debitis delectusipsa laboriosam ea nihil hic reiciendis tenetur inventore? Asperiores deleniti animi at!",
      color: "#DEB18B",
    },
    {
      index: 200,
      descp:
        " tight curls Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaqu neque odio tempora ut, enim commodi molestiae, debitis delectusipsa laboriosam ea nihil hic reiciendis tenetur inventore? Asperiores deleniti animi at!",
      color: "#C9DBE5",
    },
  ];

  return (
    <motion.div
      initial={{ backgroundColor: "#CDE3E0" }}
      animate={{ backgroundColor: content[category / 100].color }}
      transition={{ duration: 0.2, ease: "circIn" }}
      className=" py-20 w-full h-screen "
    >
      <div className=" w-[90%] h-full mx-auto flex items-center justify-between">
        <div className=" w-[45%] h-full overflow-hidden">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: `-${category}%` }}
            className={` w-full h-full -translate-y-[0%]`}
          >
            <div className=" w-full h-full  rounded-xl overflow-hidden relative">
              <Image
                src={image1}
                fill
                alt=""
                className=" "
                style={{ objectPosition: "center", objectFit: "cover" }}
              />

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
              </motion.div>
            </div>
            <div className=" w-full h-full  rounded-xl overflow-hidden relative">
              <Image
                src={image2}
                fill
                alt=""
                className=" "
                style={{ objectPosition: "center", objectFit: "cover" }}
              />

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
              </motion.div>
            </div>
            <div className=" w-full h-full  rounded-xl overflow-hidden relative">
              <Image
                src={image3}
                fill
                alt=""
                className=" "
                style={{ objectPosition: "center", objectFit: "cover" }}
              />

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
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className=" space-y-10 w-[50%] h-full flex text-black flex-col items-center justify-center">
          <SlideView delay={0.1}>
            <h1 className=" text-7xl font-semibold font-melodrama">
              Our curl types
            </h1>
          </SlideView>

          <div className=" space-x-5">
            <button
              onClick={() => setCategory(0)}
              className={` px-6 py-4 rounded-2xl ${
                category == 0 ? "bg-white" : "bg-[#ffffff6c]"
              }  uppercase text-black`}
            >
              spiral curls
            </button>
            <button
              onClick={() => setCategory(100)}
              className={` px-6 py-4 rounded-2xl ${
                category == 100 ? "bg-white" : "bg-[#ffffff6c]"
              }  uppercase text-black`}
            >
              loose curls & waves
            </button>
            <button
              onClick={() => setCategory(200)}
              className={` px-6 py-4 rounded-2xl ${
                category == 200 ? "bg-white" : "bg-[#ffffff6c]"
              }  uppercase text-black`}
            >
              tight curls
            </button>
          </div>
          <SlideView delay={0.2}>
            <h3 className=" text-gray-600 text-center w-[80%] mx-auto text-lg">
              {content[category / 100].descp}
            </h3>
          </SlideView>

          <CoreButton>
            <p className=" uppercase">shop core-radiance</p>
          </CoreButton>
        </div>
      </div>
    </motion.div>
  );
};

export default CategorySection;
