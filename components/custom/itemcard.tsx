import shampoo from "@/lib/images/pngwing.com.png";
import { Star } from "lucide-react";
import Image from "next/image";
import nat from "@/lib/images/nataliya-melnychuk-tnWjbdPmk1M-unsplash.jpg";
import star from "@/lib/images/icons8-star-64.png";

interface Item {
  name: string;
  price: string;
  image: any;
}
const ItemCard = ({ item }: { item: Item }) => {
  return (
    <div className=" w-full group flex flex-col justify-between relative overflow-hidden pb-0 h-[70vh] bg-[#f4f4f4] rounded-xl ">
      <div className=" absolute top-0 z-10 left-0 w-full flex items-start justify-between">
        <div className=" px-3 py-4 bg-gray-200 rounded-br-xl  text-black uppercase text-sm font-medium w-fit">
          best seller
        </div>
        <div className=" p-2">
          <div className=" flex items-center space-x-2">
            <Image src={star} width={20} height={20} alt="" />
            <Image src={star} width={20} height={20} alt="" />
            <Image src={star} width={20} height={20} alt="" />
            <Image src={star} width={20} height={20} alt="" />
            <Image src={star} width={20} height={20} alt="" />
          </div>
        </div>
      </div>
      <div className=" justify-center flex flex-col relative pt-[25rem] items-center h-[70%] ">
        <Image
          fill
          className=" group-hover:opacity-100 transition-all duration-150 ease-in object-cover object-center  "
          alt=""
          src={item.image}
        />
      </div>
      <div className=" h-[30%] justify-between pt-5 flex flex-col items-center">
        <div className=" text-center">
          <p className=" uppercase text-sm font-medium w-[90%] mx-auto">
            {item.name}
          </p>
          <br />
          <p>{item.price}</p>
        </div>
        <button className=" opacity-75 group-hover:opacity-100 transition-all duration-150 ease-in hover:bg-black bg-red-400 text-white font-medium text-lg text-center w-full py-4">
          Quick Add
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
