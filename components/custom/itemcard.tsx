import shampoo from "@/lib/images/pngwing.com.png";
import { Star } from "lucide-react";
import Image from "next/image";
import nat from "@/lib/images/nataliya-melnychuk-tnWjbdPmk1M-unsplash.jpg";


interface Item {
  name: string;
  price: string;
  image: any;
}
const ItemCard = ({ item }: { item: Item }) => {
  return (
    <div className=" w-full group relative overflow-hidden h-[90%] bg-[#ffffffb4] rounded-xl ">
      <div className=" absolute top-0 z-10 left-0 w-full flex items-start justify-between">
        <div className=" p-2 bg-gray-200 rounded-br-xl  text-black uppercase text-sm font-medium w-fit">
          best seller
        </div>
        <div className=" p-2">
          <div className=" flex items-center space-x-2">
            <Star size={24} />
            <Star size={24} />
            <Star size={24} />
            <Star size={24} />
            <Star size={24} />
          </div>
        </div>
      </div>
      <div className=" justify-center flex flex-col relative items-center h-[75%] ">
        <Image
          width={500}
          height={500}
          className="  "
          alt=""
          src={item.image}
        />
        <Image
          fill
          className=" group-hover:opacity-100 transition-all duration-150 ease-in object-cover object-center  "
          alt=""
          src={item.image}
        />
      </div>
      <div className=" h-[25%] justify-between pt-5 flex flex-col items-center">
        <div className=" text-center">
          <p className=" uppercase text-sm font-medium">{item.name}</p>

          <p>{item.price}</p>
        </div>
        <button className=" bg-red-400 text-white font-medium text-lg text-center w-full py-4">
          Quick Add
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
