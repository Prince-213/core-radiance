import { CalendarDays } from "lucide-react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import StyledLink from "./stylelink";
import CoreButton from "./corebutton";
import Image from "next/image";
import image1 from "@/lib/images/shampoo.jpg";

const bestSellers = ["Shampoo", "Conditioners"];
const bestSeller = ["Cutticle Care Towel", "Hair Rubber Comb"];
import Link from 'next/link'
export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div>
          <StyledLink href="/shop">
            <p>Shop</p>
          </StyledLink>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className=" w-[100vw] rounded-none border-none p-0 -translate-x-10 translate-y-5 ">
        <div className="flex font-poppins p-0 pt-5 justify-between h-[40vh] relative">
          <div className=" w-[70%]  h-full">
            <div className=" w-[85%] grid grid-cols-4 mx-auto">
              <div className=" space-y-5">
                <p className=" text-gray-400 mb-5 font-medium text-sm">
                  Hair Products
                </p>

                {bestSellers.map((item, index) => {
                  return (
                    <div key={index} className=" mb-6 w-fit ">
                      <StyledLink key={index} href="/shop">
                        <p className=" text-sm">{item}</p>
                      </StyledLink>
                    </div>
                  );
                })}
              </div>

              <div className=" space-y-5">
                <p className=" text-gray-400 mb-5 font-medium text-sm">
                  Hair Care Tools
                </p>

                {bestSeller.map((item, index) => {
                  return (
                    <div key={index} className=" mb-6 w-fit ">
                      <StyledLink key={index} href="/shop">
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
              src={image1}
              fill
              alt=""
              className=" -z-10"
              style={{ objectPosition: "center", objectFit: "contain" }}
            />
            <div className=" space-y-5 absolute w-[60%] bottom-6 left-6">
              {/* <h1 className=" text-xl text-black ">
                30% Off Treat & Repair / Use Code: TREAT4U
              </h1> */}
              <CoreButton>
                <Link href="/shop">
                <p className=" uppercase text-lg">shop now</p>
                </Link>

              </CoreButton>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
