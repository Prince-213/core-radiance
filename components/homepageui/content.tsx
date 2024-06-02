import React from "react";
import back from "@/lib/images/coregirls.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const Briefing = () => {
  return (
    <div className=" w-full h-[90vh] bg-gradient-to-b from-transparent to-black relative">
      <Image src={back} fill alt="" className=" object-cover object-left " />
      <div className=" w-full h-full absolute top-0 left-0 bg-gradient-to-b z-30 py-20 from-transparent to-black">
        <div className=" w-[90%] flex flex-col justify-between mx-auto h-full">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className=" text-3xl font-medium text-white"
            >
              Dicover the benefits of core radiance
            </motion.h1>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className=" font-melodrama text-6xl text-white font-semibold max-w-[80%]"
          >
            {
              " We're All-Natural, All-Effective: Better for Your Hair, Better for the Planet"
            }
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default Briefing;
