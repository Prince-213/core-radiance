import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className=" w-full bg-foralwhite pb-[60px] pt-[120px]">
      <div className=" w-[80%] mx-auto grid grid-cols-4">
        <div className=" space-y-10">
          <h1 className=" font-melodrama text-[30px] font-semibold">
            Here to Help
          </h1>
          <nav className=" flex flex-col space-y-5">
            <a href="#" className=" text-base">
              Home
            </a>
            <a href="#" className=" text-base">
              About Us
            </a>
            <a href="#" className=" text-base">
              Q&A
            </a>

            <a href="#" className=" text-base">
              Contact Us
            </a>
          </nav>
        </div>
        <div className=" space-y-10">
          <h1 className=" font-melodrama text-[30px] font-semibold">
            Terms & Policies
          </h1>
          <nav className=" flex flex-col space-y-5">
            <a href="#" className=" text-base">
              Refund Policy
            </a>
            <a href="#" className=" text-base">
              Privacy Policy
            </a>
            <a href="#" className=" text-base">
              Terms & Service
            </a>
            <a href="#" className=" text-base">
              Shipping Policy
            </a>
          </nav>
        </div>
        <div className=" space-y-10">
          <h1 className=" font-melodrama text-[30px] font-semibold">
            Contact Info
          </h1>
          <nav className=" flex flex-col space-y-5">
            <span className=" flex items-center space-x-1">
              <p>Email:</p>
              <a href="#" className=" text-base underline">
                info@example.com
              </a>
            </span>

            <a href="#" className=" text-base underline">
              Tel: +46 73 848 58 18
            </a>
          </nav>
        </div>
        <div className=" space-y-10">
          <h1 className=" font-melodrama text-[30px] font-semibold">
            Social Media
          </h1>
          <nav className=" flex flex-col space-y-5">
            <p>
              Core Radiance is for everyone who wants to achieve healthier and
              more radiant hair
            </p>
            <br />
            <div className=" flex items-center space-x-5">
              <Facebook />
              <Instagram />
              <Twitter />
            </div>
          </nav>
        </div>
      </div>
      <br />
      <p className=" mt-14 text-center">
        © Core Radiance 2024 Powered by Shopify
      </p>
    </footer>
  );
};

export default Footer;
