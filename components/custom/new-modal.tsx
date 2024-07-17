"use client";

import React, { Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { XCircle } from "lucide-react";
import Image from "next/image";
import advert from "@/lib/images/autumn-goodman-vTL_qy03D1I-unsplash.jpg";
import useStore from "@/store";

const NewsModal = () => {
  const { modal, openModal } = useStore();

  return (
    <div>
      <AnimatePresence mode="wait">
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className=" w-full h-screen fixed z-[100] bg-[#00000081] flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
              className=" w-[90%] lg:w-[45%] h-[30rem] lg:h-[40rem] flex  bg-foral"
            >
              <div className=" relative hidden lg:block w-[50%] h-full">
                <Image
                  src={advert}
                  className=" object-cover object-center"
                  fill
                  alt=""
                />
              </div>
              <div className=" w-full lg:w-[50%] p-10 relative ">
                <button
                  onClick={() => openModal()}
                  className=" absolute top-5 right-5"
                >
                  <XCircle size={38} />
                </button>
                <br />
                <div className=" min-w-full py-6 text-center flex flex-col items-center justify-between h-full">
                  <h1 className=" text-xl lg:text-4xl font-medium leading-loose ">
                    Love your curls &{" "}
                    <span className=" font-semibold text-3xl lg:text-5xl">
                      get 20% OFF
                    </span>
                  </h1>

                  <div className=" min-w-full space-y-6">
                    <input
                      type="text"
                      placeholder="Enter your email address"
                      className=" border-coregold border-2 bg-white p-4 min-w-full"
                    />

                    <button className=" min-w-full p-4 rounded-md text-center text-white bg-buttonpink border-none outline-none  ">
                      <p className=" uppercase text-xl font-medium">Sign up</p>
                    </button>

                    <button className=" text-base lg:text-lg text-center">
                      No Thank You
                    </button>
                  </div>

                  <p className=" text-sm">
                    Offer valid for new subscribers and first orders only. By
                    subscribing, you consent to the terms of our{" "}
                    <a href="/" className=" text-blue-600 ">
                      Privacy Policy
                    </a>
                    . You can unsubscribe at any time.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NewsModal;
