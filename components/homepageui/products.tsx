import React, { useState } from "react";
import image1 from "@/lib/images/nataliya-melnychuk-tnWjbdPmk1M-unsplash.jpg";
import image2 from "@/lib/images/michela-ampolo-7tDGb3HrITg-unsplash.jpg";
import image3 from "@/lib/images/toa-heftiba-GLl6_-L3fxM-unsplash.jpg";
import Image from "next/image";
import CoreButton from "../custom/corebutton";
import shampoo from "@/lib/images/pngwing.com.png";
import SlideView from "../custom/SlideInView";
import { color, motion } from "framer-motion";

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
    {
      index: 200,
      descp:
        " tight curls Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaqu neque odio tempora ut, enim commodi molestiae, debitis delectusipsa laboriosam ea nihil hic reiciendis tenetur inventore? Asperiores deleniti animi at!",
      color: "#C9DBE5",
    },
  ];

  return (
    <motion.div
      //   initial={{ backgroundColor: " c" }}
      //   animate={{ backgroundColor: content[category / 100].color }}
      transition={{ duration: 0.2, ease: "circIn" }}
      className=" py-20 w-full h-screen bg-coregold "
    >
      <div className=" w-[90%] h-full mx-auto flex flex-row-reverse items-center justify-between">
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
            <div className=" w-full h-full  rounded-xl overflow-hidden relative">
              <Image
                src={image3}
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
              Salon-quality products
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
            <h3 className=" text-gray-200 text-center w-[80%] mx-auto text-lg">
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

export default SaloonProducts;
