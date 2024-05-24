import React from "react";

const FixedAdvertTop = () => {
  return (
    <div className=" z-[9999999] top-0 w-full flex items-center space-x-14 overflow-x-hidden py-[12px] bg-coregold">
      <div className="  flex items-center space-x-[20rem]  min-w-fit animate-infinite-scroll">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
          return (
            <p
              key={item}
              className=" text-base font-[400] min-w-fit text-foralwhite"
            >
              GET 10% OFF ON YOUR FIRST ORDER!
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default FixedAdvertTop;
