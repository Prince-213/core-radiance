"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MinusCircle, PlusCircle } from "lucide-react";
import { motion } from "framer-motion";
import WavyText from "@/components/ace/wavy-text";

const Ingredients = () => {
  return (
    <div className=" w-full pb-10 lg:min-h-screen bg-foral relative">
      <Image
        src={
          "https://assets.website-files.com/63d0c06097974d7738bb5468/63f83ba903ce1c1d09aa81b8_shape-3.svg"
        }
        alt=""
        width={250}
        height={250}
        className=" absolute top-5 -left-20"
      />
      <Image
        src={
          "https://assets.website-files.com/63d0c06097974d7738bb5468/63f83bff98df8623ec29e553_shape-4.svg"
        }
        alt=""
        width={150}
        height={150}
        className=" absolute bottom-0 right-0"
      />
      <div className=" w-[80%] mx-auto pt-[25vh]">
        <h1 className=" text-6xl font-bold font-melodrama">Ingredients</h1>
        <br />
        <div className=" text-3xl">
          <WavyText text="Nature's Finest for Your Hair: The Core Radiance Ingredient Philosophy." />
        </div>
        <div className=" mt-5 space-y-10 text-lg">
          <p>
            {
              "At Core Radiance, our commitment to natural ingredients isn't just a choice; it's our ethos. We meticulously source high-quality, all-natural ingredients globally, prioritizing purity and efficacy, in order to bring you the best of nature's offerings for your hair and scalp. Here's a glimpse into some of these powerful ingredients"
            }
          </p>
          <p>
            {
              "Gingko Biloba: Enhances blood flow to hair follicles, promoting healthy growth with its potent antioxidant properties."
            }
          </p>
          <p>
            {
              "White Willow Bark: Soothes and exfoliates the scalp with anti-inflammatory salicin, enhancing overall scalp health. "
            }
          </p>
          <p>
            {
              "Burdock Root: A natural scalp treatment improving hair strength, shine, and vitality."
            }
          </p>
          <p>
            {
              "Dragon's Blood Fibroblasts: Protects scalp cells and boosts connective tissue formation, fostering healthy hair growth."
            }
          </p>
          <p>
            {
              "Karanja Oil: Rich in antioxidants, it nourishes hair, prevents premature greying, and combats scalp infections."
            }
          </p>
          <p>
            {
              "Ginseng Root: Renowned in traditional medicine, it helps in stress management and restoring hair growth balance."
            }
          </p>
          <p>
            {
              "Sea Buckthorn: Packed with vitamins and antioxidants, it strengthens hair, enhances elasticity, and supports robust growth."
            }
          </p>
          <p>
            {
              "Rooibos: Prevents hair loss by eliminating dead skin cells and nourishes with essential minerals."
            }
          </p>
          <p>
            {
              "Olive Leaf Extract: Repairs, conditions, and strengthens hair, promoting luster and healthy growth."
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
