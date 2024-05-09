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

      <div className="h-[100%] mt-12 mb-20 w-[60%] flex items-center mx-auto justify-center">
        <div>
          <div>
            <h1 className="font-semibold text-[30px]">Create Account</h1>
          </div>
          <hr />
          <div>
            <p>
              Enter the information below to create your account profile. Please
              complete all fields.
            </p>
          </div>
          <div className="mt-6">
            <h1 className="font-medium text-[20px]">Your Details</h1>
          </div>
          <div className="font-normal mt-3 text-[17px]">
            <p>
              Title: <span className="text-red-500"> *</span>
            </p>
          </div>
          <div>
            <input
              type="text"
              placeholder=""
              className="w-[100%] px-3  text-gray-500 focus:outline-none border-[1px] border-gray-300 h-10"
            />
          </div>
          <div className="font-normal mt-3 text-[17px]">
            <p>
              Full Name: <span className="text-red-500"> *</span>
            </p>
          </div>
          <div>
            <input
              type="text"
              placeholder=""
              className="w-[100%] px-3  text-gray-500 focus:outline-none border-[1px] border-gray-300 h-10"
            />
          </div>
          <div className="font-normal mt-3 text-[17px]">
            <p>
              Last Name: <span className="text-red-500"> *</span>
            </p>
          </div>
          <div>
            <input
              type="text"
              placeholder=""
              className="w-[100%] px-3  text-gray-500 focus:outline-none border-[1px] border-gray-300 h-10"
            />
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
              className="w-[100%] px-3  text-gray-500 focus:outline-none border-[1px] border-gray-300 h-10"
            />
          </div>
          <div className="font-normal mt-3 text-[17px]">
            <p>
              Mobile Number: <span className="text-red-500"> *</span>{" "}
              <span className="font-light text-[11px]">
                Required for text message notifications
              </span>
            </p>
          </div>
          <div>
            <input
              type="text"
              placeholder=""
              className="w-[100%] px-3  text-gray-500 focus:outline-none border-[1px] border-gray-300 h-10"
            />
          </div>

          <div className="my-4">
            <h2 className="font-medium text-[12px]">
              Password are between 8 and 20 Characters containing 1 capital, 1
              numeric and 1 lowercase.
            </h2>
          </div>
          <div className="font-normal mt-3 text-[17px]">
            <p>
              Create Password: <span className="text-red-500"> *</span>
            </p>
          </div>
          <div>
            <input
              type="password"
              placeholder=""
              className="w-[100%] px-3 text-gray-500 focus:outline-none border-[1px] border-gray-300 h-10"
            />
          </div>
          <div className="font-normal mt-3 text-[17px]">
            <p>
              Re-enter Password: <span className="text-red-500"> *</span>
            </p>
          </div>
          <div>
            <input
              type="password"
              placeholder=""
              className="w-[100%] px-3  text-gray-500 focus:outline-none border-[1px] border-gray-300 h-10"
            />
          </div>
          <div className="font-normal mt-3 text-[14px]">
            <p>Yes, I would like to receive email offers and discounts</p>
          </div>
          <div className="flex items-center justify-center mt-6 bg-black border-[1px] border-black hover:bg-white hover:text-black cursor-pointer text-white py-2">
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
