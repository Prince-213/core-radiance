"use client";
import FixedAdvertTop from "@/components/custom/FixedAdvertTop";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Facebook,
  Instagram,
  Search,
  ShoppingBagIcon,
  Twitter,
} from "lucide-react";
import world from "@/lib/icons/icons8-world-100.png";
import skin from "@/lib/icons/icons8-skin-64.png";
import face from "@/lib/icons/icons8-smile-100.png";
import ItemCard from "@/components/custom/itemcard";
import FaButton from "@/components/custom/corebutton";
import Header from "@/components/custom/header";
import CoreButton from "@/components/custom/corebutton";
import { FlipWords } from "@/components/ace/flip-word";
import { easeOut, motion } from "framer-motion";
import { Leaf, Flower, Vegan } from "lucide-react";
import PreLoader from "@/components/custom/pre-loader";

export default function Home() {
  return (
    <div className=" relative font-poppins w-full min-h-screen">
      <PreLoader />
      <div className=" w-full h-screen relative">
        <Image
          src={
            "https://static.wixstatic.com/media/84770f_7e1fd038ec794adca3177c99916bd044~mv2.jpg/v1/fill/w_1208,h_576,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/Final-image.jpg"
          }
          fill
          alt=""
          className=" -z-10"
          style={{ objectPosition: "center", objectFit: "cover" }}
        />
        <div className=" w-[90%] space-y-4 h-full flex-col flex justify-center mx-auto text-white">
          <p className=" text-xl text-gray-200">
            MOISTURE + DEFINITION + CURL FORMATION
          </p>
          <h1 className=" text-gray-100 font-melodrama max-w-[40%] text-[50px] font-[500]">
            Hydration that holds. Beauty that lasts.
          </h1>
          <p className=" text-lg">Deep hydration for textured hair.</p>
          <CoreButton>
            <p>SHOP NOW</p>
          </CoreButton>
        </div>
      </div>
      <div className=" w-[50%] gap-x-12 my-[90px] mx-auto grid grid-cols-3">
        <div className=" w-full flex flex-col space-y-4 items-center space-x-5 text-coregold text-xl font-[500]">
          <Leaf size={32} />
          <p className=" text-black">All-natural ingridients</p>
        </div>
        <div className=" w-full flex flex-col space-y-4 items-center space-x-5 text-coregold text-xl font-[500]">
          <Flower size={32} />
          <p className=" text-black">Delicately scented</p>
        </div>
        <div className=" w-full flex flex-col space-y-4 items-center space-x-5 text-coregold text-xl font-[500]">
          <Leaf size={32} />
          <p className=" text-black">Vegan Friendly</p>
        </div>
      </div>
      <div className=" w-[90%] mx-auto mb-[90px]">
        <h1 className=" text-center font-melodrama text-[50px] mb-10 ">
          Best Sellers
        </h1>
        <div className=" w-full grid grid-cols-3">
          {[1, 2, 3].map((item, index) => {
            return <ItemCard key={item} />;
          })}
        </div>
      </div>
      <div className=" h-[60vh] w-full mb-[90px] grid grid-cols-2">
        <div className=" space-y-4 bg-foralwhite h-full relative flex flex-col  justify-center p-10 ">
          <Image
            src={
              "https://assets.website-files.com/63d0c06097974d7738bb5468/63f83ba903ce1c1d09aa81b8_shape-3.svg"
            }
            alt=""
            width={200}
            height={200}
            className=" absolute top-0 left-0"
          />
          <h1 className=" text-[30px] font-melodrama">
            Welcome to Core Radiance: The Heart of Deep Hydration for Textured
            Hair
          </h1>
          <p className=" text-lg">
            Immerse yourself in our world of all-natural haircare, where every
            product enriched with organic extracts, vitamins, and antioxidants,
            is specifically designed to nourish, strengthen, and hydrate. Core
            Radiance is more than just haircare – it represents a holistic
            approach to hair health, helping you achieve and maintain lustrous,
            vibrant curls, waves, and coils. Join us in celebrating the
            transformative power of deep hydration and natural ingredients, and
            experience the vibrant, lustrous beauty of your hair.
          </p>
          <br />
          <CoreButton>
            <p>OUR STORY</p>
          </CoreButton>
        </div>
        <div className=" h-full relative">
          <Image
            src={
              "https://static.wixstatic.com/media/84770f_7e1fd038ec794adca3177c99916bd044~mv2.jpg/v1/fill/w_1208,h_576,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/Final-image.jpg"
            }
            fill
            alt=""
            className=" -z-10"
            style={{ objectPosition: "center", objectFit: "cover" }}
          />
        </div>
      </div>
      <div className=" w-full h-[90vh]">
        <div className=" w-full h-[80vh] relative">
          <Image
            src={
              "https://source.unsplash.com/green-vegetable-beside-ceramic-bowl-kXQ3J7_2fpc"
            }
            fill
            alt=""
            className=" -z-10"
            style={{ objectPosition: "center", objectFit: "cover" }}
          />
          <div className=" w-full h-full bg-gradient-to-b from-[#c79816cf] from-10% to-[90%] pt-5  to-transparent">
            <h1 className=" text-center text-[50px] max-w-[50%] mx-auto text-white font-melodrama">
              All-Natural, All-Effective: Better for Your Hair, Better for the
              Planet
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
