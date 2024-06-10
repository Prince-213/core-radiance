import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CurrencySelect } from "./currencyselect";
const Footer = () => {
  return (
    <footer className=" w-full bg-foralwhite pb-[30px] lg:pb-[60px] lg:pt-[120px] pt-[60px]">
      <div className=" w-[90%] lg:w-[80%] mx-auto gap-10  lg:gap-y-20 grid grid-cols-2 lg:grid-cols-3">
        <div className=" hidden lg:block space-y-10">
          <Image
            src={
              "https://mycoreradiance.com/cdn/shop/files/Screenshot_2022-10-21_at_22.02.57_220x.png?v=1666382669"
            }
            width={200}
            height={200}
            alt=""
          />
          <div className=" space-y-6 max-w-[70%]">
            <h1 className="  font-melodrama font-semibold text-3xl">
              Subscribe & Get 10% Off Your First Order
            </h1>
            <p>
              Subscribe to receive special offers, free giveaways, and
              once-in-a-lifetime deals.
            </p>
            <div>
              <div className=" flex items-center justify-between px-6 py-3 rounded-lg border-2 border-gray-300 w-full">
                {/* <div>
                  <h1 className=" font-semibold">Join Now</h1>
                  <p>Earn 30 points</p>
                </div>
                <ArrowRight /> */}
                <input
                  type="email"
                  className=" bg-transparent w-[80%] border-none outline-transparent"
                  placeholder="Email"
                />
                <button>SUBSCRIBE</button>
              </div>
              <p className=" text-sm">
                Privacy Policy and Terms of Service apply.
              </p>
            </div>
          </div>
        </div>
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
            <span className=" hidden  lg:flex items-center space-x-1">
              <p>Email:</p>
              <br />
              <a href="#" className=" text-base w-[90%] mx-auto underline">
                hello@mycoreradiance.com
              </a>
            </span>

            <a href="#" className=" text-base underline">
              Tel: +46 73 848 58 18
            </a>

            <p>Email:</p>
            <a href="#" className=" text-sm underline">
              hello@mycoreradiance.com
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
              <Link
                href={
                  "https://web.facebook.com/GenesiisBeautyCare/?_rdc=1&_rdr"
                }
              >
                <Facebook className=" hover:text-coregold transition-all duration-150 ease-in" />
              </Link>

              <Link href={"https://www.instagram.com/coreradiance/?hl=en"}>
                <Instagram className=" hover:text-coregold transition-all duration-150 ease-in" />
              </Link>

              <Link href={"https://x.com/core_radiance?mx=2"}>
                <Twitter className=" hover:text-coregold transition-all duration-150 ease-in" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
      <br />
      <div className=" hidden w-[80%] mx-auto lg:flex justify-between items-center">
        <div className=" ">
          <CurrencySelect />
        </div>
        <p className=" ">© Core Radiance 2024 Powered by Shopify</p>
      </div>
    </footer>
  );
};

export default Footer;
