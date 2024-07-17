"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MinusCircle, PlusCircle } from "lucide-react";
import { motion } from "framer-motion";

const faq = [
  {
    id: 1,
    question: "Why is my hair so dry?",
    answer:
      "Textured hair has a unique structure where curls and coils can hinder the natural oils from your scalp traveling down the hair shaft. This often leads to inherent dryness. Environmental factors, heat styling, and certain haircare products can further strip moisture from your hair. Core Radiance is designed to counteract this by providing deep, lasting hydration that nourishes your hair from the inside out.",
    isopen: false,
  },

  {
    id: 2,
    question: "How do I stop breakage?",
    answer:
      "Breakage often occurs when hair is weakened from dryness, lack of nutrients, or stress from styling. To prevent this, it's crucial to maintain well-hydrated and nourished hair. Core Radiance products are formulated to deeply moisturize and strengthen each strand, reducing the likelihood of breakage. Regular use of our deeply hydrating shampoos, conditioners, and treatments, along with minimizing heat styling and using protective styles, can significantly help in reducing breakage.",
    isopen: false,
  },

  {
    id: 3,
    question: "How is Core Radiance different from other haircare products?",
    answer:
      "Core Radiance is different because from day one it was guided by two unwavering principles: deep hydration as the core of healthy hair, and an uncompromising commitment to natural ingredients. Conceived and formulated by an experienced trichologist, our brand places unparalleled emphasis on providing profound moisture that is essential for textured hair. We focus on hydration not as an afterthought but as the cornerstone of our entire product line. Our dedication to using only highest quality natural ingredients mirrors Mother Nature's own standards: we do not cut corners. This approach occasionally presents challenges, as the supply of high-quality natural ingredients can fluctuate. Unlike others who might opt for readily available lower-quality alternatives, we sometimes have to pause production, waiting for the right, premium ingredients to arrive. This commitment to quality over convenience ensures that every Core Radiance product consistently delivers on its promise of nurturing and revitalizing textured hair, making us a true game-changer in the realm of textured hair care.",
    isopen: false,
  },

  {
    id: 4,
    question: "Can Core Radiance products help in combating dandruff?",
    answer:
      "Dandruff can be a tricky issue, often arising from various skin conditions such as excessively dry or oily scalp, or even due to a yeast-like fungus that thrives on the oils present on most adults' scalps. Another contributing factor can be sensitivity to certain hair care products. Core Radiance addresses these underlying causes in multiple ways. Our products are pH balanced, promoting a healthy scalp environment that keeps conditions like dryness, oiliness, and fungal growth in check. Additionally, being crafted with all-natural, high-quality ingredients, they are inherently gentle on your hair and scalp. This reduces the likelihood of irritation or adverse reactions that can exacerbate or lead to dandruff.",
    isopen: false,
  },
];

const FaqPage = () => {
  const [selected, setSelected] = useState(-1);

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
      <div className=" w-[90%] lg:w-[80%] mx-auto pt-[25vh]">
        <h1
          className=" text-4xl
         lg:text-6xl font-bold font-melodrama"
        >
          FAQ
        </h1>

        <div className=" w-full lg:w-[80%] mt-20 space-y-10">
          {faq.map((item, index) => {
            return (
              <div
                key={index}
                className=" w-full flex justify-between items-center pb-6 border-b-2 border-black"
              >
                <div className=" space-y-6">
                  <h1 className=" font-semibold text-lg lg:text-xl">
                    {item.question}
                  </h1>
                  <motion.div
                    initial={{ height: "0px" }}
                    animate={{ height: selected == index ? "" : "0px" }}
                    transition={{ duration: 0.3, ease: "linear" }}
                    className=" overflow-hidden"
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                </div>
                {selected == index ? (
                  <button onClick={() => setSelected(-1)}>
                    <MinusCircle size={35} />
                  </button>
                ) : (
                  <button onClick={() => setSelected(index)}>
                    <PlusCircle size={35} />
                  </button>
                )}
              </div>
            );
          })}
        </div>
        <br />
        <button className=" mt-6 bg-coregold text-white px-8 py-4 ">
          Ask the question
        </button>
      </div>
    </div>
  );
};

export default FaqPage;
