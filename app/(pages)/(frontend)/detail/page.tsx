import Footer from "@/app/(components)/footer/Footer";
import FooterLast from "@/app/(components)/footerLast/FooterLast";
import Header from "@/app/(components)/header/Header";
import LatestArrivals from "@/app/(components)/latestArrivals/LatestArrivals";
import SecondHeader from "@/app/(components)/secondHeader/SecondHeader";
import Image from "next/image";
import React from "react";
import picture from "../../../../public/newArrivals/3.jpg";

export default function page() {
  return (
    <div>
      <Header />
      <SecondHeader />

      <div className="">
        <div>
          <div>
            <div className="mx-20 my-5">
              <p className="text-[13px] font-light">
                Home | Grey Rib Knit Extreme High Leg Bodysuit
              </p>
            </div>
            <div>
              <div className="flex my-12 flex-wrap justify-around mx-24">
                <div className="md:h-[600px] my-3 h-[300px] w-[1200px] md:w-[500px]">
                  <Image
                    src={picture}
                    className="w-[100%] h-[100%]"
                    alt="Picture"
                  />
                </div>
                <div className="">
                  <div>
                    <div>
                      <h1 className=" font-semibold md:text-[23px]">
                        Grey Rib Knit Extreme High Leg Bodysuit
                      </h1>
                    </div>
                    <div>
                      <h1 className=" font-light text-center text-[12px] md:text-[15px]">
                        Product Code:{" "}
                        <span className="font-semibold text-[13px] md:text-[16px]">
                          82590
                        </span>
                      </h1>
                    </div>
                    <div>
                      <h1 className=" font-bold text-center text-[25px] md:text-[35px]">
                        $17.68
                      </h1>
                    </div>
                    <div>
                      <h1 className=" font-light text-center mt-8 text-[14px]">
                        COLOUR:{" "}
                        <span className="font-semibold text-[15px]">GREY</span>
                      </h1>
                    </div>
                    <div className="flex items-center justify-center mt-3">
                      <div className="h-[130px] border-[1px] border-black w-[100px]">
                        <Image
                          src={picture}
                          alt="Picture"
                          className="w-[100%] h-[100%]"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-center my-6">
                      <div className="w-[100px] flex item-center justify-center h-[50px] bg-black text-white">
                        <p className="flex items-center justify-center">
                          No Size
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <div className="md:w-[120px] w-[90px] flex h-[30px] md:h-[40px] border-[1px] border-black">
                        <div className=" w-[30px] md:w-[40px] cursor-pointer flex items-center justify-center">
                          <p className="font-light text-gray-500 text-[30px]">
                            +
                          </p>
                        </div>
                        <div className=" w-[30px] md:w-[40px] cursor-pointer flex items-center justify-center">
                          <p className="font-light  text-[19px] md:text-[26px]">
                            1
                          </p>
                        </div>
                        <div className=" w-[30px] md:w-[40px] cursor-pointer flex items-center justify-center">
                          <p className="font-light text-gray-500 text-[30px]">
                            -
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-center mt-6 bg-green-600 border-[1px] border-green-600 hover:bg-white hover:text-black cursor-pointer text-white py-3">
                        <p className="text-[16px] font-normal">ADD TO BAG</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center mt-3 bg-[#F1E4E4] border-[1px] border-[#F1E4E4] hover:bg-white hover:text-black cursor-pointer  py-3">
                        <p className="md:text-[13px] text-[9px] font-normal">
                          <span className="font-bold">$11.41</span> WITH 20% OFF
                          CHECKOUT CODE{" "}
                          <span className="font-bold">'TAKE20'</span>
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center mt-3 border-[1px] border-black hover:bg-white hover:text-black cursor-pointer hover:font-bold py-3">
                        <p className="text-[16px] font-normal">Saved</p>
                      </div>
                    </div>

                    <div className="my-5">
                      <div className="my-2">
                        <p className="font-light text-[15px]">
                          Grey Rib Knit Extreme High Leg Bodysuit
                        </p>
                      </div>
                      <div className="my-2">
                        <p className="font-light text-[15px]">Scoop Neck</p>
                      </div>
                      <div className="my-2">
                        <p className="font-light text-[15px]">
                          Extreme High Leg
                        </p>
                      </div>
                      <div className="my-2">
                        <p className="font-light text-[15px]">Regular Fit</p>
                      </div>
                      <div className="my-2">
                        <p className="font-light text-[15px]">
                          Fabric: 95% polyester 5% elastane
                        </p>
                      </div>
                      <div className="my-2">
                        <p className="font-light text-[15px]">
                          Approx Length is 65cm based on a UK size 10
                        </p>
                      </div>
                      <div className="my-2">
                        <p className="font-light text-[15px]">
                          Model is 5ft 7" & wears UK size 8/EU size 38/US size
                          4/AUS size 8
                        </p>
                      </div>
                      <div className="my-2">
                        <p className="font-light text-[15px]">
                          Machine washable
                        </p>
                      </div>
                      <div className="my-4">
                        <p className="font-semibold hover:underline cursor-pointer text-[18px]">
                          View more like this
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-20 my-5">
                <h2 className="font-medium text-[16px] md:text-[25px]">
                  RECENTLY VIEWED ....
                </h2>
              </div>
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
