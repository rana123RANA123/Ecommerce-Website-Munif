import React from "react";
import location from "../../../public/home/location.png";
import truck from "../../../public/home/truck.png";
import Image from "next/image";

export default function TopBar() {
  return (
    <div className="bg-white font-poppins shadow-lg">
      <div className="px-[15px] w-[100%] md:px-[50px] lg:px-[60px] xl:px-[70px]">
        <nav className="text-center lightBlack md:flex items-center justify-between py-4">
          <div>
            <p className="text-[14px]">
              Need help? Call us: (+98) 0234 456 789
            </p>
          </div>
          <div className="flex justify-center my-2">
            <div className="flex items-center mx-2">
              <Image alt="Our Store" src={location} className="w-6 h-6" />
              <p className="text-sm mx-1">Our store</p>
            </div>
            <div className="flex items-center mx-2">
              <Image alt="Truck" src={truck} className="w-6 h-6" />
              <p className="text-sm mx-1">Track your order</p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
