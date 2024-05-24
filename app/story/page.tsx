import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import FaButton from "@/components/custom/corebutton";

const Story = () => {
  return (
    <div className=" w-full ">
      <div className=" w-full bg-foralwhite py-[90px]">
        <div className=" w-[90%] mx-auto flex flex-col items-center">
          <h1 className=" text-[80px] max-w-[50%] mx-auto text-center font-melodrama">
            Acheive Beautiful Skin with Fabulous Solutions.
          </h1>
          <br />
          <p className=" text-center text-lg w-[50%] mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour
          </p>
        </div>
      </div>
      <div className=" w-[80%] h-[80vh]  mx-auto my-[90px] flex items-center justify-between">
        <div className=" relative w-[35%] rounded-tr-full rounded-tl-full rounded-br-full rounded-bl-full min-h-[80vh] overflow-hidden  ">
          <Image
            src={
              "https://images.unsplash.com/photo-1501644898242-cfea317d7faf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNjI0Mjk3Ng&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
            }
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

        <div className=" w-[58%] h-[70vh] flex flex-col items-start space-y-5">
          <h1 className=" font-melodrama text-[50px] text-darkslategreen">
            Meet our founders
          </h1>

          <p className=" text-lg">
            {
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id perspiciatis ut vel ducimus quae, accusantium maiores veritatis doloremque amet, quod debitis numquam dignissimos aspernatur qui officiis architecto, quas aut excepturi?"
            }
          </p>
          <p className=" text-lg">
            {
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id perspiciatis ut vel ducimus quae, accusantium maiores veritatis doloremque amet, quod debitis numquam dignissimos aspernatur qui officiis architecto, quas aut excepturi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id perspiciatis ut vel ducimus quae, accusantium maiores veritatis doloremque amet, quod debitis numquam dignissimos aspernatur qui officiis architecto, quas aut excepturi?"
            }
          </p>
          <div className=" border-l-[6px] border-darkslategreen pl-4">
            <p className=" text-lg">
              {
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id perspiciatis ut vel ducimus quae, accusantium maiores veritatis doloremque amet, quod debitis numquam dignissimos aspernatur qui officiis architecto, quas aut excepturi?"
              }
            </p>
            <br />
            <p className=" font-medium text-lg">Lori Stevens</p>
          </div>
        </div>
      </div>
      <div className=" w-full py-[90px] relative bg-[#ffffff54]">
        <Image
          src={
            "https://source.unsplash.com/white-and-clear-glass-container-on-brown-wooden-table-AxKIWMgUJOI"
          }
          fill
          alt=""
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",

            objectPosition: "center",
          }}
          className=" -z-10"
        />
        <div className="  z-[99999] w-[80%] mx-auto">
          <h1 className=" max-w-[50%] text-[50px] font-melodrama text-darkslategreen">
            Consistent tanning and rare burning define melanin-rich skin
          </h1>
          <br />
          <div className=" flex flex-col space-y-10">
            <span className=" flex items-center space-x-10">
              <div className=" bg-darkslategreen h-[4rem] rounded-tr-full rounded-tl-full w-[4rem] flex items-center justify-center">
                <CheckCircle size={24} color="white" />
              </div>
              <p className=" text-xl">
                Consciously Formulated: 95% Naturally-Derived.
              </p>
            </span>
            <span className=" flex items-center space-x-10">
              <div className=" bg-darkslategreen h-[4rem] rounded-tr-full rounded-tl-full w-[4rem] flex items-center justify-center">
                <CheckCircle size={24} color="white" />
              </div>
              <p className=" text-xl">
                Consciously Formulated: 95% Naturally-Derived.
              </p>
            </span>
            <span className=" flex items-center space-x-10">
              <div className=" bg-darkslategreen h-[4rem] rounded-tr-full rounded-tl-full w-[4rem] flex items-center justify-center">
                <CheckCircle size={24} color="white" />
              </div>
              <p className=" text-xl">
                Consciously Formulated: 95% Naturally-Derived.
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className=" w-[45%] mx-auto py-[90px]">
        <h1 className=" text-center text-[50px] font-melodrama text-darkslategreen">
          Subscribe and get 15% off your first order.
        </h1>
        <p className=" text-lg text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className=" mt-16 w-[80%] flex items-stretch justify-center mx-auto">
          <input
            placeholder="Email address"
            type="text"
            className=" px-3 outline-darkslategreen w-[80%] bg-foralwhite"
          />
          <FaButton style="10rem">
            <p>{"I'm in"}</p>
          </FaButton>
        </div>
      </div>
    </div>
  );
};

export default Story;
