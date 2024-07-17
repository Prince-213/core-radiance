"use client";

import Lottie from "lottie-react";
import gif from "@/lib/images/Animation - 1717960377478.json";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className=" w-full h-screen flex items-center justify-center">
      <Lottie
        className=" w-52 h-52"
        width={50}
        height={50}
        animationData={gif}
      />
    </div>
  );
}
