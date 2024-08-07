import React from "react";
import Image from "next/image";
import image3 from "@/lib/images/moistboost.jpg";

const ItemCard = () => {
  return (
    <div className=" group">
      <div className=" w-full h-[40vh] relative">
        <Image
          className=" transition-all delay-100 duration-200 ease-in-out "
          src={image3}
          fill
          alt=""
          style={{
            objectFit: "cover",
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
        <h1 className=" text-center w-[80%] mx-auto  text-[20px]">
          Fresh Start Deep Cleansing Shampoo 80z/240ml
        </h1>
        <div className=" flex flex-col items-center">
          <h1 className=" text-black text-[24px] text-center font-poppins font-medium">
            ₦ 42,800.00 NGN
          </h1>
        </div>
        <button
          className={
            "  px-10  mx-auto bg-coregold py-4 hover:bg-black transition-all duration-200 ease-in text-white text-center"
          }
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
