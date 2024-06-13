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

export function AboutHover() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div>
          <StyledLink href="/my-story">
            <p>About</p>
          </StyledLink>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className=" w-fit h-fit  rounded-none border-none px-8 py-5 bg-white -translate-x-10 translate-y-5 ">
        <div className=" space-y-10 ">
          <StyledLink href="/my-story">
            <p className="  uppercase ">my story</p>
          </StyledLink>

          <StyledLink href="/faq">
            <p className="  mt-4  uppercase ">Q&A</p>
          </StyledLink>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
