import {
  Eye,
  Megaphone,
  MessageCircle,
  MessageCircleMoreIcon,
  Search,
  ThumbsUp,
} from "lucide-react";
import Image from "next/image";

import pic from "@/lib/images/autumn-goodman-vTL_qy03D1I-unsplash.jpg";

export default function Page() {
  return (
    <div className=" w-full min-h-screen pt-[10vh]">
      <div className=" w-full relative bg-foralwhite flex items-center justify-center h-[50vh] py-[90px] overflow-hidden">
        <Image
          src={
            "https://assets.website-files.com/63d0c06097974d7738bb5468/63f83ba903ce1c1d09aa81b8_shape-3.svg"
          }
          alt=""
          width={250}
          height={250}
          className=" absolute top-5 -left-20"
        />
        <Image
          src={
            "https://assets.website-files.com/63d0c06097974d7738bb5468/63f83bff98df8623ec29e553_shape-4.svg"
          }
          alt=""
          width={150}
          height={150}
          className=" absolute bottom-0 right-0"
        />
        <div className=" w-[90%] mx-auto flex flex-col items-center space-y-4">
          <h1 className=" text-[60px] text-center font-melodrama">
            Welcome to Our Coummunity
          </h1>
          <div className=" w-[42%] p-4 rounded-lg shadow-lg border-gray-200 border-[1px] bg-white flex items-center space-x-4">
            <Search />
            <input type="text" className=" w-full border-none outline-none" />
          </div>
        </div>
      </div>
      <div className=" mt-20 w-[60%] mx-auto pb-20">
        <div className=" w-full grid grid-cols-2 gap-x-10">
          <button className=" hover:shadow-xl transition-all duration-200 p-5 rounded-lg flex items-center justify-between  border-gray-200 border-[1px] shadow-lg text-2xl font-medium">
            <p>News And Announcements</p>
            <Megaphone size={42} className=" text-coregold" />
          </button>
          <button className=" hover:shadow-xl transition-all duration-200 p-5 rounded-lg flex items-center justify-between  border-gray-200 border-[1px] shadow-lg text-2xl font-medium">
            <p>Ask The Community</p>
            <MessageCircle size={42} className=" text-coregold" />
          </button>
        </div>

        <div className=" pb-5 border-b-gray-200 border-b-2 w-full flex items-center justify-between mt-20">
          <h1 className=" font-semibold text-lg">158 Topics</h1>
          <p>Recently active</p>
        </div>

        <div className=" flex space-x-4 w-full mt-20">
          <div className=" w-[70%]  rounded-lg border-gray-200 border-2 flex flex-col space-y-5 ">
            {[1, 2, 3].map((item, index) => {
              return (
                <div
                  key={index}
                  className=" p-5 border-b-gray-200 border-b-2 flex flex-col space-y-8"
                >
                  <div className=" flex items-center space-x-3">
                    <div className=" bg-coregold p-2 rounded-xl text-white w-fit h-fit">
                      <MessageCircle size={16} />
                    </div>
                    <p className=" font-semibold text-gray-500">
                      Asked the community
                    </p>
                  </div>
                  <div className=" flex items-center space-x-4">
                    <div className=" relative w-14 h-14 rounded-[50%] bg-coregold overflow-hidden">
                      <Image
                        src={pic}
                        fill
                        alt=""
                        className=" object-cover object-center"
                      />
                    </div>
                    <div className=" ">
                      <h1 className=" text-lg font-semibold text-black">
                        Jude Jones
                      </h1>
                      <p className=" text-sm text-gray-400">A day ago</p>
                    </div>
                  </div>
                  <div className=" flex-col space-y-5">
                    <h1 className=" font-semibold text-2xl">
                      A New Feeling Of Fresh Hair
                    </h1>
                    <p className=" text-gray-400">
                      The community {"I'm"} building is based on meeting
                      locations within different neighborhoods in Chicago. Is
                      there a way to add more than the 24 or so options? Do we
                      need to upgrade to a paid plan to take advantage of this
                      feature?
                    </p>
                    <p className=" text-gray-400">
                      Any helpful suggestions are appreciated!
                    </p>
                  </div>
                  <div className=" flex items-center space-x-8">
                    <button className=" px-6 py-3 border-gray-200 shadow-lg flex items-center space-x-3 border-2 rounded-md hover:shadow-xl transition-all duration-200 ease-in">
                      <ThumbsUp />
                      <p>Like</p>
                    </button>
                    <button className=" px-6 py-3 border-gray-200 shadow-lg flex items-center space-x-3 border-2 rounded-md hover:shadow-xl transition-all duration-200 ease-in">
                      <MessageCircleMoreIcon />
                      <p>Reply</p>
                    </button>
                    <div className=" px-6 py-3  flex items-center space-x-3 ">
                      <Eye />
                      <p>15 Views</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" w-[30%] p-5 space-y-5 border-gray-200 border-2 rounded-lg h-fit">
            <h1 className=" text-xl font-semibold">Hello There!</h1>
            <p className=" text-gray-400">Welcome to Core Radiance Community</p>
            <p className=" text-gray-400">
              Connect, share, and engage with community and build relationships.
            </p>
            <p className=" text-gray-400">
              Please log in if you are already a member or sign up for an
              account.
            </p>
            <div className=" space-y-3">
              <button className=" p-3 text-white font-semibold w-full bg-coregold rounded-full">
                Join The Community
              </button>
              <button className=" p-3 text-black font-semibold w-full border-2 border-gray-500 rounded-full">
                Already a member ?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
