import React from "react";
import Image from "next/image";
import picture from "../../../public/newArrivals/1.jpg";

export default function FirstSlider() {
  return (
    <>
      <div className="flex w-[full] flex-wrap-reverse justify-between md:px-[170px] md:mt-10 px-10 mt-10 items-center">
        <div className="text lg:mx-0 mx-auto">
          <h1 className="text-[43px] text-center sm:text-left font-[700] text-[#1B5A7D] md:w-20">
            Canon camera
          </h1>
          <div className="flex flex-wrap md:gap-3 my-3 md:my-5">
            <button className="bg-[#EDA415] w-full h-[61px] text-[16px] font-semibold sm:w-[144px] my-3 sm:my-0 text-white rounded-[20px]">
              Shop now
            </button>
            <button className="py-4 w-full sm:w-[144px] text-[16px] font-semibold border-[1px] border-[#316887] text-[#1B5A7D] rounded-[20px]">
              View more
            </button>
          </div>
        </div>
        <div className="img">
          <Image src={picture} alt="hello" className="relative" />
          <div className="bg-[#EDA415] w-[120px] h-[114.61px] flex justify-center items-center absolute top-[225px] right-[7px] md:top-[250px] md:right-[210px] rounded-full font-medium text-white text-[21.57px]">
            <span>
              only
              <br />
              $89
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
