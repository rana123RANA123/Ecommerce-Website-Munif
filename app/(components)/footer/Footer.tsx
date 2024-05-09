import Image from "next/image";
import React from "react";
import logo from "../../../public/footer/footerLogo.jpg";

export default function Footer() {
  return (
    <div className="">
      <div className="flex justify-around flex-wrap">
        <div className="py-7">
          <div>
            <h1 className="text-[18px] font-semibold">Information</h1>
          </div>
          <div className="text-[16px] mt-2 font-normal">delivery</div>
          <div className="text-[16px] mt-2 font-normal">Returns & Refunds</div>
          <div className="text-[16px] mt-2 font-normal">Payment Methods</div>
          <div className="text-[16px] mt-2 font-normal">About Missrebel</div>
          <div className="text-[16px] mt-2 font-normal">Contact Us</div>
        </div>
        <div className=" py-7">
          <div>
            <h1 className="text-[18px] font-semibold">ACCOUNT</h1>
          </div>
          <div className="text-[16px] mt-2 font-normal">Sign-in/Register</div>
          <div className="text-[16px] mt-2 font-normal">My Favourites</div>
          <div className="text-[16px] mt-2 font-normal">Terms & Conditions</div>
          <div className="text-[16px] mt-2 font-normal">Privacy Policy</div>
        </div>
        <div className=" py-7">
          <div>
            <h1 className="text-[18px] font-semibold">DELIVERY</h1>
          </div>
          <div className="text-[16px] mt-2 font-normal">
            UK STANDARD 3-5 Days £2.95
          </div>
          <div className="text-[16px] mt-2 font-normal">
            UK EXPRESS 1-2 Days £4.95
          </div>
          <div className="text-[16px] mt-2 font-normal">Europe from £9.95</div>
          <div className="text-[16px] mt-2 font-normal">
            International from £14.95
          </div>
        </div>
        <div className="py-7">
          <h1 className="text-[18px] font-semibold">CONTACT US</h1>

          <div className="text-[16px] mt-2 font-normal">
            customerservice@missrebel.co.uk
          </div>
          <div className="mt-3">
            <Image src={logo} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
