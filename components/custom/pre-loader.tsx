"use client";

import { motion, easeOut } from "framer-motion";
import React from "react";
import { FlipWords } from "../ace/flip-word";

const PreLoader = () => {
  return (
    <div className="  w-full h-screen fixed top-0 left-0 z-50 grid grid-cols-5 ">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 6 }}
        className=" absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"
      >
        <FlipWords words={["Natural", "Effective", "Vegan"]} />
      </motion.div>
      {[1, 2, 3, 4, 5].map((item, index) => {
        return (
          <motion.div
            initial={{ height: "100vh" }}
            animate={{ height: "0vh", transformOrigin: "bottom" }}
            transition={{ delay: 6 + index / 2, ease: easeOut }}
            key={item}
            className=" w-full h-[100vh] bg-coregold"
          ></motion.div>
        );
      })}
    </div>
  );
};

export default PreLoader;
