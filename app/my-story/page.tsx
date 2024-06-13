"use client";

import React from "react";
import Image from "next/image";
import banner from "@/lib/images/my_core_radiance_symbols_720x (1).jpg";
import profile from "@/lib/images/Screenshot_2023-06-09_at_18.04.54 (1).png";
import WavyText from "@/components/ace/wavy-text";
import { ReactTyped } from "react-typed";

const MyStoryPage = () => {
  return (
    <div className=" w-full min-h-screen pt-[15vh]">
      <div className="  relative w-full lg:h-[60vh] flex items-center justify-center  ">
        <div className=" z-30 lg:pl-[5%] flex flex-col justify-center  absolute w-full h-full bg-gradient-to-r from-30% from-coregold to-transparent">
          <div className="  z-40 h-fit py-5 text-white text-7xl font-melodrama font-semibold">
            <WavyText text="My Journey of Passion " />
          </div>
          <div className="  z-40 h-fit py-5 text-white text-4xl font-melodrama font-semibold">
            <WavyText text="Crafting Deep Hydration " />
          </div>
        </div>
        <div className=" w-[20%] h-full"></div>

        <div className=" w-[80%] h-full relative">
          <Image
            src={banner}
            alt=""
            fill
            style={{ objectPosition: "center", objectFit: "cover" }}
          />
        </div>
      </div>
      <div className=" my-[8vh] w-[80%] mx-auto lg:grid lg:grid-cols-2 lg:gap-x-10">
        <div className=" relative lg:min-h-[50vh]">
          <Image
            src={profile}
            alt=""
            fill
            style={{ objectPosition: "center", objectFit: "cover" }}
          />
        </div>

        <div>
          <div className=" ">
            <ReactTyped
              className="text-black font-melodrama text-5xl font-semibold leading-normal"
              strings={["Hello, I’m Lyota Swainson 👋"]}
              typeSpeed={40}
              backSpeed={60}
            />
            <div className=" mt-5 space-y-5">
              <p>
                {
                  "The owner of two hair salons and a professional trichologist. Like many of you, I have textured hair and understand the challenges it brings, especially when it comes to finding the right hydration solutions. My journey into creating Core Radiance wasn't unique – many set out to fill a gap in the market. However, while only a few truly succeed, the outcome of my quest has been truly remarkable."
                }
              </p>
              <p>
                {
                  "My exploration into effective haircare took me across the globe. I delved into the rich, nourishing properties of natural ingredients like Shea Butter, Argan Oil, and Aloe Vera. I ventured into incorporating diverse botanicals such as Jamaican herbs and roots in our Nature Island Nourishing Oil and South African red rooibos for its cellular repair properties in our Moisture Boost Daily Conditioning Shampoo and Healthy Scalp Stimulating & Soothing Solution. My travels to India opened a new world of Ayurvedic knowledge, further enriching our product formulations."
                }
              </p>
              <p>
                {
                  " The results were transformative – not just in appearance but in the health and resilience of hair. My clients, who faced a variety of hair concerns, saw significant improvements. Their feedback in 2018 was the catalyst that transformed my personal quest into Core Radiance haircare line.  "
                }
              </p>
              <p>
                {
                  "Core Radiance is a testament to my passion for trichology and unwavering commitment to natural, sustainable practices. We don't just manufacture products; we craft solutions that cater to the unique needs of textured hair. Our aim is to offer a holistic approach to haircare, focusing on deep hydration and overall hair health, in harmony with nature."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyStoryPage;
