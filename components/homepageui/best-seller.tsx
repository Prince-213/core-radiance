import React from "react";
import shampoo from "@/lib/images/pngwing.com.png";
import { Star } from "lucide-react";
import Image from "next/image";
import nat from "@/lib/images/nataliya-melnychuk-tnWjbdPmk1M-unsplash.jpg";
import ItemCard from "../custom/itemcard";
import image1 from "@/lib/images/cleansingshampoo.jpg";
import image2 from "@/lib/images/hydrolock.jpg";
import image3 from "@/lib/images/moistboost.jpg";

const content = [
  {
    name: "Fresh Start Deep Cleansing Shampoo 80z/240ml",
    price: "₦42,800.00",
    image: image1,
  },

  {
    name: "Moisture Boost Daily Conditioning Shampoo 8oz/240ml, 32oz/960ml Family Size and 32oz/960ml Family Size Unscented",
    price: "₦39,900.00",
    image: image2,
  },

  {
    name: "Hydro Lock Leave-In Conditioner 8oz/240ml, 32oz/960ml Family Size and 32oz/960ml Family Size Unscented",
    price: "₦44,200.00",
    image: image3,
  },
];

const BestSeller = () => {
  return (
    <div className=" w-[90%] mx-auto lg:overflow-hidden overflow-x-scroll h-fit lg:h-fit py-10">
      <h1 className=" text-center font-semibold text-4xl font-melodrama">
        Best Sellers
      </h1>
      <br />
      <div className=" lg:overflow-hidden flex gap-x-10 h-full mx-auto lg:grid lg:grid-cols-3">
        {content.map((item, index) => {
          return (
            <div className=" lg:min-w-full min-w-[90vw]" key={index}>
              {" "}
              <ItemCard key={index} item={item} />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestSeller;
