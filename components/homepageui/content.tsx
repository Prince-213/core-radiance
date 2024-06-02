import React from "react";
import back from "@/lib/images/fleur-kaan-w4Dj3MshHQ0-unsplash (1).jpg";
import Image from "next/image";

const Briefing = () => {
  return (
    <div className=" w-full h-screen bg-gradient-to-b from-transparent to-black relative">
      <Image src={back} fill alt="" className=" object-cover object-left " />
      <div className=" w-full h-full absolute top-0 left-0 bg-gradient-to-b z-30 py-20 from-transparent to-black">
        <div className=" w-[90%] flex flex-col justify-between mx-auto h-full">
          <div>
            <h1 className=" text-3xl font-medium text-white">
              The Curl Experts
            </h1>
          </div>
          <h1 className=" font-melodrama text-6xl text-white font-semibold max-w-[80%]">
            We're sylist created salon perfected and curl approved.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Briefing;
