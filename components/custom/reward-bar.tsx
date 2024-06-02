"use client";

import { ArrowRight, ChevronUp, X } from "lucide-react";
import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RewardBar = () => {
  const [view, setView] = useState(false);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <div className=" w-full relative">
        <div className=" font-medium shadow-xl text-center z-50 bg-white  p-2 text-lg flex flex-col items-center justify-center right-5 bottom-5 fixed w-[6rem] h-[6rem] rounded-full">
          <p>Get</p>
          <p className=" text-center text-pretty">20% Off</p>
        </div>
        <button
          onClick={() => setView(false)}
          className=" absolute top-10 right-10"
        >
          <X />
        </button>

        {view && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className=" w-full z-50 border-2 border-gray-200 border-b-0 rounded-tr-xl rounded-tl-xl py-6  bg-white  "
          >
            <div className=" w-[20%] space-y-4 flex flex-col mx-auto justify-center  items-center">
              <h2>Earn 1 point for evey $1 you spend</h2>
              <div className=" flex items-center justify-between px-6 py-3 rounded-lg border-2 border-gray-300 w-full">
                <div>
                  <h1 className=" font-semibold">Join Now</h1>
                  <p>Earn 30 points</p>
                </div>
                <ArrowRight />
              </div>
              <span className=" flex items-center space-x-2">
                <p className=" text-gray-300 text-sm font-medium">
                  Already a member?
                </p>
                <a
                  href="#"
                  className=" font-semibold text-sm text-coregold underline"
                >
                  Log In
                </a>
              </span>
            </div>
          </motion.div>
        )}

        <div className=" flex bg-[wheat] py-2 items-center justify-center">
          <button
            onClick={() => setView(true)}
            className=" uppercase font-medium text-sm"
          >
            core-radiance rewards{" "}
          </button>
          <ChevronUp />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default RewardBar;
