import React from "react";
import shampoo from "@/lib/images/pngwing.com.png";
import { Star } from "lucide-react";
import Image from "next/image";
import nat from "@/lib/images/nataliya-melnychuk-tnWjbdPmk1M-unsplash.jpg";
import ItemCard from "../custom/itemcard";

const BestSeller = () => {
  return (
    <div className=" w-full h-screen py-20">
      <div className=" w-[90%] gap-x-10 h-full mx-auto grid grid-cols-3">
        {[1, 2, 3].map((item, index) => {
          return <ItemCard key={index} />;
        })}
      </div>
    </div>
  );
};

export default BestSeller;
