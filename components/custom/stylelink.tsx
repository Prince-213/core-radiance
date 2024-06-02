import Link from "next/link";
import React from "react";

const StyledLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className=" relative after:absolute after:w-[0px] hover:after:w-full after:origin-left after:transition-all after:duration-100 after:ease-linear after:h-[2px] after:rounded-xl after:bg-black after:block after:right-0  hover:text-darkslategreen transition-all duration-200 delay-75 ease-in"
    >
      {children}
    </Link>
  );
};

export default StyledLink;
