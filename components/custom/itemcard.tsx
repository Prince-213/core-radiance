import React from "react";
import Image from "next/image";
import FaButton from "./corebutton";
import CoreButton from "./corebutton";

const ItemCard = () => {
  return (
    <div className=" group">
      <div className=" w-full h-[40vh] relative">
        <Image
          className=" transition-all delay-100 duration-200 ease-in-out "
          src={
            "https://mycoreradiance.com/cdn/shop/files/conditioner_6229bd30-a5f9-4043-88da-96a3121feda4.jpg?v=1683806678&width=540"
          }
          fill
          alt=""
          style={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
            objectPosition: "center",
          }}
        />
        <Image
          className=" opacity-0 group-hover:opacity-100 absolute transition-all delay-100 duration-200 ease-in-out "
          src={"https://source.unsplash.com/votive-candle-r40EYKVyutI"}
          fill
          alt=""
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            objectPosition: "center",
          }}
        />
      </div>
      <div className=" py-5 space-y-5 flex flex-col items-center">
        <h1 className=" text-center text-[20px]">Alpha Arbutin & Vitamin C</h1>
        <div className=" flex flex-col items-center">
          <h1 className=" text-darkslategreen text-[30px] text-center font-melodrama">
            $ 120.00 USD
          </h1>
          <del className=" text-darkslategreen text-lg text-center font-melodrama">
            $ 209.00 USD
          </del>
        </div>
        <CoreButton>
          <p>Shop Now</p>
        </CoreButton>
      </div>
    </div>
  );
};

export default ItemCard;
