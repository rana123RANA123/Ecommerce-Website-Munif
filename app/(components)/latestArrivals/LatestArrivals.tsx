import Image from "next/image";
import React from "react";
import emailLogo from "../../../public/footer/emailLogo.png";

export default function LatestArrivals() {
  return (
    <div className="bg-[#F1E4E4] md:w-[100%] w-[110%] py-3 flex items-center justify-center flex-col">
      <div className="">
        <p className="text-[18px] text-center md:text-left font-medium">
          SIGN UP FOR OFFERS AND LATEST ARRIVALS.
        </p>
      </div>
      <div className="flex mx-4 justify-center items-center">
        <input
          type="text"
          name="email"
          placeholder="Enter your email address.."
          className="border-[1px] text-[12px] md:text-[15px] border-black w-[200px] px-3 sm:w-[370px] md:w-[600px] my-2 h-[40px]"
        />
        <div className="h-[40px] w-[80px] border-[1px] border-black bg-black flex items-center justify-center ">
          <Image src={emailLogo} className="w-6 h-6" alt="Email Logo" />
        </div>
      </div>
    </div>
  );
}
