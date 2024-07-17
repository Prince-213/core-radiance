import ItemCard from "@/components/custom/othercard";
import React from "react";

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

const Page = () => {
  return (
    <div className=" w-full min-h-screen pb-[90px] pt-[10vh] ">
      <div className=" w-full bg-foralwhite py-[60px] lg:py-[90px]">
        <div className=" w-[90%] mx-auto flex flex-col items-center">
          <h1 className=" text-3xl lg:text-[80px] text-center font-melodrama">
            Shop All
          </h1>
          <br />
          <div className=" flex lg:flex-row flex-col items-center space-x-3 lg:space-x-6">
            <h1 className=" text-lg">Shop by category:</h1>
            <nav className=" flex items-center space-x-6 text-sm lg:text-lg">
              <a
                href="#"
                className=" hover:underline transition-all duration-200 ease-in"
              >
                Shampoo
              </a>
              <a
                href="#"
                className=" hover:underline transition-all duration-200 ease-in"
              >
                Conditioners
              </a>
              <a
                href="#"
                className=" hover:underline transition-all duration-200 ease-in"
              >
                Hair Care Tools
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className=" w-[90%] lg:w-[80%] flex flex-col items-center mx-auto pt-[90px]">
        <div className=" w-full grid grid-cols-1 lg:grid-cols-3">
          {content.map((item, index) => {
            return (
              <div className=" lg:min-w-full min-w-[90vw]" key={index}>
                {" "}
                <ItemCard key={index} />{" "}
              </div>
            );
          })}
        </div>
        <br />

        <div className=" w-[20%] justify-between  mx-auto flex items-center pt-[100px] ">
          <p className=" text-lg">1/2</p>
          <button>
            <p>Next</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
