import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className=" w-full bg-foralwhite py-[120px]">
      <div className=" w-[80%] mx-auto grid grid-cols-4">
        <div className=" space-y-10">
          <h1 className=" font-melodrama text-[30px] font-semibold">Fab</h1>
          <nav className=" flex flex-col space-y-5">
            <a href="#" className=" text-base">
              Home
            </a>
            <a href="#" className=" text-base">
              Shop All
            </a>
            <a href="#" className=" text-base">
              Our Story
            </a>
            <a href="#" className=" text-base">
              {"FAQ's"}
            </a>
            <a href="#" className=" text-base">
              Contact Us
            </a>
          </nav>
        </div>
        <div className=" space-y-10">
          <h1 className=" font-melodrama text-[30px] font-semibold">Pages</h1>
          <nav className=" flex flex-col space-y-5">
            <a href="#" className=" text-base">
              Licences
            </a>
            <a href="#" className=" text-base">
              Privacy Policy
            </a>
            <a href="#" className=" text-base">
              Terms & Conditions
            </a>
            <a href="#" className=" text-base">
              Forums
            </a>
            <a href="#" className=" text-base">
              Changelog
            </a>
          </nav>
        </div>
        <div className=" space-y-10">
          <h1 className=" font-melodrama text-[30px] font-semibold">
            Contact Us
          </h1>
          <nav className=" flex flex-col space-y-5">
            <div className=" text-base">Have Questions or suggestions?</div>
            <a href="#" className=" text-base underline">
              info@example.com
            </a>
            <br />
            <div className=" text-base">Need assistance? give us a cll</div>
            <a href="#" className=" text-base underline">
              +123 2345
            </a>
          </nav>
        </div>
        <div className=" space-y-10">
          <h1 className=" font-melodrama text-[30px] font-semibold">
            {"Wer'e here for you"}
          </h1>
          <nav className=" flex flex-col space-y-5">
            <div className=" text-base">Monday - Thursday: 9:30 - 18:00</div>
            <p className=" text-base ">Friday: 9:30 - 15:00</p>
            <br />
            <div className=" flex items-center space-x-5">
              <Facebook />
              <Instagram />
              <Twitter />
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
