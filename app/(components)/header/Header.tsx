import React from "react";

import logo from "../../../public/header/headerLogo.jpg";
import searchBar from "../../../public/header/searchBar.png";
import heart from "../../../public/header/heart.png";
import cart from "../../../public/header/cart.png";
import Image from "next/image";
import SignInJoinDropdown from "../signIn/SignIn";
import Link from "next/link";
export default function Header() {
  return (
    <div>
      <div>
        <div
          data-aos="fade-down"
          className="md:flex md:mx-28 md:py-0 py-3 mx-7 justify-between items-center md:h-20 max-w-[100%]"
        >
          <Link
            href={"/home"}
            className="flex items-center md:mx-0 mx-auto h-[60px] md:h-[100px] w-[120px] md:w-[200px] justify-center"
          >
            <Image
              src={logo}
              alt="Logo"
              className="flex items-center justify-center"
            />
          </Link>
          <div className="md:flex hidden md:visible">
            <div>
              <input
                type="text"
                placeholder="Enter Product Name or Code"
                className="h-[40px] px-3 w-[350px] focus:outline-none border-b-[1px] border-gray-400"
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src={searchBar}
                alt="Search Bar"
                className="md:h-10 h-5 md:w-10 w-5 border-b-[1px]  border-gray-400"
              />
            </div>
          </div>
          <div className="flex items-center gap-5 justify-center">
            <div>
              <p
                className="font-medium cursor-pointer
              "
              >
                Sign In/Join
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href={"/favorite"}
                className="flex items-center justify-center"
              >
                <Image src={heart} alt="Heart" className="h-8 w-8 relative" />
                <p className="absolute font-light text-[15px]">0</p>
              </Link>
              <Link href={"/cart"} className="flex items-center justify-center">
                <Image src={cart} alt="Cart" className="h-9 w-9 relative" />
                <p className="absolute font-light mt-2 text-[15px]">0</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
