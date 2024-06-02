import { CalendarDays } from "lucide-react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import StyledLink from "./stylelink";
import CoreButton from "./corebutton";
import Image from "next/image";

const bestSellers = [
  "Best Sellers",
  "Shampoo",
  "Conditon",
  "Styling + Primers",
  "Refresh + Extend",
  "Treat + Repair",
  "Tools + Accessories",
  "Kids",
  "Liter Sizes",
  "Travel Sizes",
  "All By Product Type",
];

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div>
          <StyledLink href="/">
            <p>Shop</p>
          </StyledLink>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className=" w-[100vw] rounded-none border-none p-0 -translate-x-10 translate-y-5 ">
        <div className="flex font-poppins p-0 pt-5 justify-between h-[65vh] relative">
          <div className=" w-[70%]  h-full">
            <div className=" w-[85%] grid grid-cols-4 mx-auto">
              <div className=" space-y-5">
                <p className=" text-gray-400 mb-5 font-medium text-sm">
                  By Product Type
                </p>

                {bestSellers.map((item, index) => {
                  return (
                    <div key={index} className=" mb-6 w-fit ">
                      <StyledLink key={index} href="/">
                        <p className=" text-sm">{item}</p>
                      </StyledLink>
                    </div>
                  );
                })}
              </div>

              <div className=" space-y-5">
                <p className=" text-gray-400 mb-5 font-medium text-sm">
                  By Product Type
                </p>

                {bestSellers.map((item, index) => {
                  return (
                    <div key={index} className=" mb-6 w-fit ">
                      <StyledLink key={index} href="/">
                        <p className=" text-sm">{item}</p>
                      </StyledLink>
                    </div>
                  );
                })}
              </div>

              <div className=" space-y-5">
                <p className=" text-gray-400 mb-5 font-medium text-sm">
                  By Product Type
                </p>

                {bestSellers.map((item, index) => {
                  return (
                    <div key={index} className=" mb-6 w-fit ">
                      <StyledLink key={index} href="/">
                        <p className=" text-sm">{item}</p>
                      </StyledLink>
                    </div>
                  );
                })}
              </div>

              <div className=" space-y-5">
                <p className=" text-gray-400 mb-5 font-medium text-sm">
                  By Product Type
                </p>

                {bestSellers.map((item, index) => {
                  return (
                    <div key={index} className=" mb-6 w-fit ">
                      <StyledLink key={index} href="/">
                        <p className=" text-sm">{item}</p>
                      </StyledLink>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className=" w-[30%] rounded-tl-xl overflow-hidden h-full relative">
            <Image
              src={
                "https://source.unsplash.com/yellow-and-white-plastic-bottle-Fk5O9bfPYGw"
              }
              fill
              alt=""
              className=" -z-10"
              style={{ objectPosition: "center", objectFit: "cover" }}
            />
            <div className=" space-y-5 absolute w-[60%] bottom-6 left-6">
              <h1 className=" text-xl text-white ">
                30% Off Treat & Repair / Use Code: TREAT4U
              </h1>
              <CoreButton>
                <p className=" uppercase text-lg">shop now</p>
              </CoreButton>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
