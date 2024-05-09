import Footer from "@/app/(components)/footer/Footer";
import FooterLast from "@/app/(components)/footerLast/FooterLast";
import Header from "@/app/(components)/header/Header";
import LatestArrivals from "@/app/(components)/latestArrivals/LatestArrivals";
import SecondHeader from "@/app/(components)/secondHeader/SecondHeader";
import picture from "../../../../public/newArrivals/2.jpg";
import picture2 from "../../../../public/newArrivals/4.jpg";
import Image from "next/image";
import React from "react";

export default function Favorite() {
  return (
    <div>
      <Header />
      <SecondHeader />

      <div className="my-10 mx-28">
        <p className="font-semibold text-[24px]">My Favorites</p>
      </div>
      <hr />
      <div className="my-20 mx-28 flex gap-5 flex-wrap">
        <div className=" w-[240px] h-[450px] ">
          <div className="geeks w-[240px]  h-[340px] md:h-[350px]  ">
            <Image src={picture} className="secondgeeksimg" alt="Picture" />
          </div>
          <div>
            <div className="bg-black text-white text-center py-1">
              <p className="text-[15px]">ADD TO CART</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="">
              <p className="text-[15px] text-center">
                Green Leopard Collar Detail Smock Top
              </p>
            </div>
            <div>12</div>
          </div>

          <div className="my-3">
            <div>
              <p className="font-normal text-[18px] text-center">$24.76</p>
            </div>
          </div>
        </div>
        <div className=" w-[240px] h-[450px] ">
          <div className="geeks w-[240px] h-[340px] md:h-[350px] ">
            <Image src={picture2} className="secondgeeksimg" alt="Picture" />
          </div>
          <div>
            <div className="bg-black text-white text-center py-1">
              <p className="text-[15px]">ADD TO CART</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="">
              <p className="text-[15px] text-center">
                Green Leopard Collar Detail Smock Top
              </p>
            </div>
            <div>12</div>
          </div>

          <div className="my-3">
            <div>
              <p className="font-normal text-[18px] text-center">$24.76</p>
            </div>
          </div>
        </div>
      </div>

      <LatestArrivals />
      <Footer />
      <FooterLast />
    </div>
  );
}
