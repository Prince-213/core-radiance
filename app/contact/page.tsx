import React from "react";

const Contact = () => {
  return (
    <div className=" w-full min-h-screen pt-[10vh]">
      <div className=" w-full bg-foralwhite py-[90px] ">
        <div className=" w-[90%] mx-auto flex flex-col items-center">
          <h1 className=" text-[80px] text-center font-melodrama">
            Contact Us
          </h1>
        </div>
      </div>
      <div className=" py-[90px] w-[50%] mx-auto">
        <h1 className=" text-[30px] font-melodrama font-semibold  max-w-[70%]">
          You may also fill out the form below and we will respond as quickly as
          possible.
        </h1>
        <div className=" w-[90%] grid grid-cols-2 gap-6 mt-[45px] mb-[90px]">
          <input
            className=" w-full text-black h-16 outline-darkslategreen px-4 bg-foralwhite"
            placeholder="Name"
          ></input>
          <textarea
            className=" w-full h-full bg-foralwhite row-span-3 p-5 "
            placeholder="Message"
          ></textarea>
          <input
            className=" w-full text-black h-16 outline-darkslategreen px-4 bg-foralwhite"
            placeholder="Email Address"
          ></input>
          <input
            className=" w-full text-black h-16 outline-darkslategreen px-4 bg-foralwhite"
            placeholder="Phone Number"
          ></input>
          <input
            className=" w-full text-black h-16 outline-darkslategreen px-4 bg-foralwhite"
            placeholder="Name"
          ></input>
          <button className=" px-8 py-2 bg-coregold text-white">
            <p>Submit</p>
          </button>
        </div>

        {/* <div className=" w-[90%] mt-10 grid grid-cols-3 gap-x-10">
          <div className=" space-y-3 text-lg">
            <h1 className=" font-medium text-lg">Customer service</h1>
            <a href="#" className=" underline">
              info@example.com
            </a>
            <p>Mon - Thu: 9:30 - 18:00 Fri: 9:30 - 15:00</p>
          </div>
          <div className=" space-y-3 text-lg">
            <h1 className=" font-medium text-lg">Call us</h1>
            <a href="#" className=" underline">
              +123 4554
            </a>
          </div>
          <div className=" space-y-3 text-lg">
            <h1 className=" font-medium text-lg">Visit store</h1>
            <p>Chicago HQ Estica Cop. Macomb, MI 48042</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
