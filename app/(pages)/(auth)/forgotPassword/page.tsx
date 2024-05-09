import Footer from "@/app/(components)/footer/Footer";
import FooterLast from "@/app/(components)/footerLast/FooterLast";
import Header from "@/app/(components)/header/Header";
import LatestArrivals from "@/app/(components)/latestArrivals/LatestArrivals";
import SecondHeader from "@/app/(components)/secondHeader/SecondHeader";
import React from "react";

export default function page() {
  return (
    <>
      <Header />
      <SecondHeader />

      <div className="h-[100%] mt-12 mb-20 w-[80%] flex items-center mx-auto justify-center">
        <div>
          <div>
            <h1 className="font-semibold text-[30px]">Forgot Password </h1>
          </div>
          <hr />
          <div className="font-normal mt-5 text-[17px]">
            <p>
              Please enter you email address:{" "}
              <span className="text-red-500"> *</span>
            </p>
          </div>
          <div>
            <input
              type="text"
              placeholder=""
              className="w-[400px]  text-gray-500 focus:outline-none px-3 border-[1px] mt-3 border-gray-300 h-10"
            />
          </div>
          <div className="flex items-center justify-center mt-8 bg-black border-[1px] border-black hover:bg-white hover:text-black cursor-pointer text-white py-2">
            <p className="text-[16px] font-normal">Submit</p>
          </div>
        </div>
      </div>
      <LatestArrivals />
      <Footer />
      <FooterLast />
    </>
  );
}
