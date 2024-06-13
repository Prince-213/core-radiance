import React, { useState } from "react";
import image1 from "@/lib/images/towel.png";
import image2 from "@/lib/images/comb-ezgif.com-webp-to-jpg-converter.jpg";
import image3 from "@/lib/images/toa-heftiba-GLl6_-L3fxM-unsplash.jpg";
import Image from "next/image";
import CoreButton from "../custom/corebutton";
import shampoo from "@/lib/images/pngwing.com.png";
import SlideView from "../custom/SlideInView";
import { color, motion } from "framer-motion";
import WavyText from "../ace/wavy-text";

const SaloonProducts = () => {
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
  ];

  return (
    <motion.div
      //   initial={{ backgroundColor: " c" }}
      //   animate={{ backgroundColor: content[category / 100].color }}
      transition={{ duration: 0.2, ease: "circIn" }}
      className=" py-20 w-full h-[80vh] bg-coregold "
    >
      <div className=" hidden w-[90%]  h-full mx-auto lg:flex flex-row-reverse items-center justify-between">
        <div className=" w-[45%] h-full overflow-y-hidden ">
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
            </div>
            <div className=" w-full h-full  rounded-xl overflow-hidden relative">
              <Image
                src={image2}
                fill
                alt=""
                className=" "
                style={{ objectPosition: "center", objectFit: "cover" }}
              />
            </div>
          </motion.div>
        </div>

        <div className=" space-y-10 w-[50%] h-full flex text-white flex-col items-center justify-center">
          <SlideView delay={0.1}>
            <h1 className=" text-7xl font-semibold font-melodrama">
              <WavyText text="Saloon Quality Products" />
            </h1>
          </SlideView>

          <div className=" space-x-5">
            <button
              onClick={() => setCategory(0)}
              className={` px-6 py-4 rounded-2xl ${
                category == 0 ? "bg-white" : "bg-[#ffffff6c]"
              }  uppercase text-black`}
            >
              Curticle Care Towel
            </button>
            <button
              onClick={() => setCategory(100)}
              className={` px-6 py-4 rounded-2xl ${
                category == 100 ? "bg-white" : "bg-[#ffffff6c]"
              }  uppercase text-black`}
            >
              Hair Rubber Comb
            </button>
          </div>
          <SlideView delay={0.2}>
            <h3 className=" text-gray-200 text-pretty text-center w-[80%] mx-auto text-lg">
              While choosing the right shampoo and conditioner is essential for
              maintaining the health of your hair and scalp, the role of
              high-quality haircare tools is equally crucial. Consider the
              gentle touch of a cuticle towel that absorbs moisture without
              causing frizz, or the seamless glide of brushes and combs through
              your locks. These tools are key allies in your haircare regimen,
              working in harmony with our products to enhance their
              effectiveness and ensure your hair not only looks but truly feels
              its best.
            </h3>
          </SlideView>

          <CoreButton>
            <p className=" uppercase">shop core-radiance</p>
          </CoreButton>
        </div>
      </div>

      <div className=" w-[90%] lg:hidden h-full mx-auto flex flex-col ">
        <div className=" space-y-6 w-full h-full flex text-white flex-col items-center justify-center">
          <SlideView delay={0.1}>
            <h1 className=" text-4xl font-semibold font-melodrama">
              <WavyText text="Saloon Quality Products" />
            </h1>
          </SlideView>

          <div className=" space-x-5 flex items-center">
            <button
              onClick={() => setCategory(0)}
              className={` text-sm px-6 py-4 rounded-2xl ${
                category == 0 ? "bg-white" : "bg-[#ffffff6c]"
              }  uppercase text-black`}
            >
              Curticle Care Towel
            </button>
            <button
              onClick={() => setCategory(100)}
              className={` text-sm px-6 py-4 rounded-2xl ${
                category == 100 ? "bg-white" : "bg-[#ffffff6c]"
              }  uppercase text-black`}
            >
              Hair Rubber Comb
            </button>
          </div>

          <div className=" w-full h-[50vh] overflow-hidden">
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
              </div>
              <div className=" w-full h-full  rounded-xl overflow-hidden relative">
                <Image
                  src={image2}
                  fill
                  alt=""
                  className=" "
                  style={{ objectPosition: "center", objectFit: "cover" }}
                />
              </div>
            </motion.div>
          </div>

          <SlideView delay={0.2}>
            <h3 className=" text-gray-200 text-pretty text-center w-[90%] mx-auto text-lg">
              While choosing the right shampoo and conditioner is essential for
              maintaining the health of your hair and scalp, the role of
              high-quality haircare tools is equally crucial. Consider the
              gentle touch of a cuticle towel that absorbs moisture without
              causing frizz, or the seamless glide of brushes and combs through
              your locks. These tools are key allies in your haircare regimen,
              working in harmony with our products to enhance their
              effectiveness and ensure your hair not only looks but truly feels
              its best.
            </h3>
          </SlideView>

          <button className=" text-white w-[90%] font-bold uppercase text-lg mx-auto bg-[#d53f53] rounded-lg py-4">
            Shop core-radiance
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SaloonProducts;
