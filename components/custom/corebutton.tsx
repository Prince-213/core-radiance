"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const CoreButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.button
      whileHover={{ backgroundColor: "#000", transition: { duration: 0.6 } }}
      className=" bg-coregold text-white text-lg max-w-[10rem] min-w-fit py-2 px-4"
    >
      {children}
    </motion.button>
  );
};

export default CoreButton;
