import FaButton from "@/components/custom/corebutton";
import ItemCard from "@/components/custom/itemcard";
import React from "react";

const Shop = () => {
  return (
    <div className=" w-full min-h-screen pb-[90px]">
      <div className=" w-full bg-foralwhite py-[90px]">
        <div className=" w-[90%] mx-auto flex flex-col items-center">
          <h1 className=" text-[80px] text-center font-melodrama">Shop All</h1>
          <br />
          <div className=" flex items-center space-x-6">
            <h1 className=" text-lg">Shop by category:</h1>
            <nav className=" flex items-center space-x-6 text-lg">
              <a
                href="#"
                className=" hover:underline transition-all duration-200 ease-in"
              >
                Body Wash
              </a>
              <a
                href="#"
                className=" hover:underline transition-all duration-200 ease-in"
              >
                Face Wash
              </a>
              <a
                href="#"
                className=" hover:underline transition-all duration-200 ease-in"
              >
                Cleanser
              </a>
              <a
                href="#"
                className=" hover:underline transition-all duration-200 ease-in"
              >
                Serum
              </a>
              <a
                href="#"
                className=" hover:underline transition-all duration-200 ease-in"
              >
                Night Cream
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className=" w-[80%] mx-auto pt-[90px]">
        <div className=" w-full grid grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
            return <ItemCard key={item} />;
          })}
        </div>
        <br />

        <div className=" w-[20%] justify-between  mx-auto flex items-center pt-[100px] ">
          <p className=" text-lg">1/2</p>
          <FaButton style="10rem">
            <p>Next</p>
          </FaButton>
        </div>
      </div>
    </div>
  );
};

export default Shop;
