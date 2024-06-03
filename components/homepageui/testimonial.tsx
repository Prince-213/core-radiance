import React, { useState } from "react";
import image1 from "@/lib/images/shampoo.jpg";
import image2 from "@/lib/images/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import image3 from "@/lib/images/olamide-gabriel-o5C-KDbZHww-unsplash.jpg";
import Image from "next/image";
import CoreButton from "../custom/corebutton";
import shampoo from "@/lib/images/pngwing.com.png";
import SlideView from "../custom/SlideInView";
import { color, motion } from "framer-motion";
import { Star } from "lucide-react";
import star from "@/lib/images/icons8-star-64.png";
import { TextGenerateEffect } from "../custom/text-generate-effect";
import Typewriter from "../custom/lazyload";
import LazyRenderComponent from "../custom/lazyload";
import { ReactTyped } from "react-typed";

const Testimonial = () => {
  const [category, setCategory] = useState(0);

  const content = [
    {
      name: "Linnea K.",
      city: "Stockholm",
      comment:
        "I have tried some other brands (mostly due to less expensive) but nothing could measure with your products. They are by far the best for my daughers 😍",
    },
    {
      name: "Ulrika D.",
      city: "Stockholm",
      comment:
        "I like the productsl because they make my hair moist not frizzy. The leave-in is not too thick and sticky.",
    },
    {
      name: "Ozturk D.",
      city: "Stockholm",
      comment:
        "Wow! That's so cool. No wonder Ella's hair became fantastic from being at your place and using your products. I hope she will now get used to having someone fix her hair so that it will be nice and grow healthy. 🙏🌺 ",
    },
  ];

  const value = {
    text: "",
    className: "",
  };

  return (
    <motion.div className=" py-20 w-[100vw] overflow-hidden mb-20 h-[90vh] ">
      <div className=" w-[300vw] h-screen overflow-scroll flex">
        {content.map((item, index) => {
          return (
            <div
              key={index}
              className=" w-[100vw]  h-full mx-auto flex items-center justify-between"
            >
              <div className=" w-[45%] h-full  overflow-hidden">
                <motion.div className={` w-full h-full -translate-y-[0%]`}>
                  <div className=" w-full h-[90%] rounded-xl overflow-hidden relative">
                    <Image
                      src={image1}
                      fill
                      alt=""
                      className=" bg-no-repeat "
                      style={{ objectPosition: "center", objectFit: "contain" }}
                    />
                  </div>
                </motion.div>
              </div>

              <div className=" space-y-8 w-[55%] pr-20 h-full flex text-black flex-col items-start justify-center ">
                <div>
                  <p className=" uppercase font-medium">sylist recommended</p>
                  <div className=" flex items-start space-x-2">
                    <Image src={star} width={20} height={20} alt="" />
                    <Image src={star} width={20} height={20} alt="" />
                    <Image src={star} width={20} height={20} alt="" />
                    <Image src={star} width={20} height={20} alt="" />
                    <Image src={star} width={20} height={20} alt="" />
                  </div>
                </div>
                <LazyRenderComponent>
                  {/* <TextGenerateEffect words={item.comment} /> */}
                  <ReactTyped
                    className="text-black font-melodrama text-4xl font-semibold leading-normal"
                    strings={[item.comment]}
                    typeSpeed={40}
                    backSpeed={60}
                  />
                </LazyRenderComponent>

                <SlideView delay={0.2}>
                  <h3 className=" text-black uppercase font-semibold text-left mx-auto text-lg">
                    {item.name}
                  </h3>
                  <p className=" uppercase">{item.city}</p>
                </SlideView>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Testimonial;
