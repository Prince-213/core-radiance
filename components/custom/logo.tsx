import Link from "next/link";
import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={
          "https://mycoreradiance.com/cdn/shop/files/Screenshot_2022-10-21_at_22.02.57_220x.png?v=1666382669"
        }
        width={150}
        height={150}
        alt=""
      />
    </Link>
  );
};

export default Logo;
