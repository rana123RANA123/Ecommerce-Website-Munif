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
            <h1 className="font-semibold text-[30px]">Login </h1>
          </div>
          <hr />
          <div>
            <p>
              If you have an account with us, sign in below using your email
              address
            </p>
          </div>
          <div className="font-normal mt-3 text-[17px]">
            <p>
              Email Address: <span className="text-red-500"> *</span>
            </p>
          </div>
          <div>
            <input
              type="text"
              placeholder=""
              className="w-[100%] px-3 text-gray-500 focus:outline-none border-[1px] border-gray-300 h-10"
            />
          </div>
          <div className="font-normal mt-3 text-[17px]">
            <p>
              Password: <span className="text-red-500"> *</span>
            </p>
          </div>
          <div>
            <input
              type="password"
              placeholder=""
              className="w-[100%] px-3 text-gray-500 focus:outline-none border-[1px] border-gray-300 h-10"
            />
          </div>

          <div className="flex items-center justify-center mt-6">
            <p className="text-[14px] font-normal underline">
              Forgot your password
            </p>
          </div>
          <div className="flex items-center justify-center mt-6 bg-black border-[1px] border-black hover:bg-white hover:text-black cursor-pointer text-white py-2">
            <p className="text-[16px] font-normal">LOG IN</p>
          </div>
        </div>
      </div>

      <div className="h-[100%] mt-12 mb-20 w-[80%] flex items-center mx-auto justify-center">
        <div>
          <div>
            <h1 className="font-semibold text-[30px]">New Customers</h1>
          </div>
          <hr />
          <div className="mt-3">
            <p className="text-[12px]">
              By creating an account you will be able to shop faster, be up to
              date on offers and keep track.
            </p>
          </div>
          <div className="mt-5">
            <p className="text-[12px]">Registration is FREE, QUICK and EASY.</p>
          </div>

          <div className="flex items-center justify-center cursor-pointer mt-6 bg-black text-white py-2">
            <p className="text-[16px] font-normal">CREATE ACCOUNT</p>
          </div>
        </div>
      </div>

      <LatestArrivals />
      <Footer />
      <FooterLast />
    </>
  );
}
