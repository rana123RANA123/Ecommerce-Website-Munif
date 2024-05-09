import Footer from "@/app/(components)/footer/Footer";
import FooterLast from "@/app/(components)/footerLast/FooterLast";
import Header from "@/app/(components)/header/Header";
import LatestArrivals from "@/app/(components)/latestArrivals/LatestArrivals";
import SecondHeader from "@/app/(components)/secondHeader/SecondHeader";
import Link from "next/link";
import React from "react";
import picture from "../../../../public/newArrivals/5.jpg";
import Image from "next/image";
export default function Page() {
  return (
    <div>
      <Header />
      <SecondHeader />

      <>
        <div className="px-[15px] my-20 w-[100%] md:px-[50px] lg:px-[60px] xl:px-[70px] mx-auto mb-[96px] ">
          {/* {cart.length ? ( */}
          <div className="flex flex-wrap justify-evenly mt-[10px]">
            <div className="w-[100%]  lg:w-[69%]">
              <div className="relative overflow-x-auto mb-8">
                <table className="w-full text-sm text-left rtl:text-right">
                  <thead className="text-xs text-gray-700 uppercase bg-footer">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Product
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-3">
                        SubTotal
                      </th>
                      <th scope="col" className="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {cart.map((item, i) => {
                        let title = item.title.slice(0, 15);
                        return ( */}
                    <tr className="border-b-2 relative">
                      <th scope="row" className="px-6 py-10 font-medium">
                        <div className="flex items-center">
                          <Image
                            src={picture}
                            alt="image"
                            className="min-w-[50px] min-h-[50px] max-w-0 me-4"
                          />
                          <h3>ertyui</h3>
                        </div>
                      </th>
                      <td className="px-6 py-10">$67</td>
                      <td className="px-6 py-10">
                        <div className="flex ms-3">
                          <button
                            className="outline-none py-2 px-3 border-gray-950 border bg-gray-200"
                            // onClick={setDecrease}
                          >
                            -
                          </button>
                          <button className="outline-none py-2 px-7 border-gray-950 border bg-gray-200">
                            234
                          </button>
                          <button className="outline-none py-2 px-3 border-gray-950 border bg-gray-200">
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-10">
                        {/* ${Math.round(amount * item.price)} */}
                        23434
                      </td>
                      <td className="px-6 py-10">
                        <button
                          className="btn absolute right-4 top-14"
                          // onClick={() => dispatch(removeproduct(item.id))}
                        >
                          {/* <img src={xmark} />{" "} */}
                        </button>
                      </td>
                    </tr>
                    {/* );
                      })} */}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-wrap justify-center mb-5 sm:justify-between items-center font-medium">
                <Link
                  href={"/catalog"}
                  className="bg-warning text-white py-3 px-8 uppercase rounded-full"
                >
                  Continue shopping
                </Link>
                <Link
                  href={"/cart"}
                  className=" border-2 border-black py-3 px-8 uppercase rounded-full"
                >
                  Clear cart
                </Link>
              </div>
            </div>
            <div className="w-[100%]  lg:w-[29%] ">
              <div className="border-2">
                <h2 className="text-xs text-gray-700 uppercase bg-footer mb-0 text-center  font-bold py-3">
                  Cart Total
                </h2>
                <form className="flex flex-col mx-6 my-4">
                  <div className="flex flex-wrap justify-between py-3 border-b-2 font-medium">
                    <span>SubTotal</span> <span>$457674</span>
                  </div>
                  <div className="flex justify-between border-2 rounded-2xl my-[33px] items-center ">
                    <input
                      type="email"
                      className="w-9/12 outline-none ps-3  text-gray-400"
                      placeholder="Enter coupon"
                    />
                    <button className="text-sm text-primary p-3">Apply</button>
                  </div>
                  <span className="border-b-2"></span>
                  <div className="flex justify-between border-2 mb-3  mt-[33px] items-center rounded-2xl">
                    <input
                      className="outline-none ps-3 w-9/12 text-gray-400"
                      placeholder="County"
                    />
                    <button className=" text-end font-semibold text-primary p-2">
                      {/* <img src={arrrow} alt="" /> */}
                    </button>
                  </div>
                  <div className="flex flex-wrap justify-between py-3">
                    <span>Total Amount</span> <span>$457674</span>
                  </div>
                  <Link
                    href={"/"}
                    className="bg-warning text-white py-3 text-center uppercase rounded-full"
                  >
                    Proceed to ckeckout
                  </Link>
                </form>
              </div>
            </div>
          </div>
          {/* ) : ( */}
          {/* <>
            <h1 className="sm:text-[55px] text-[25px] text-center sm:text-left">
              <span className="text-primary">No</span>
              <span className="text-warning sm:text-[50px]"> Product in</span>
              <span className="text-primary"> Your</span>
              <span className="text-warning sm:text-[50px]"> Cart</span>
            </h1>
            <div className="sm:text-left text-center my-4">
              <Link
                href={"/catalog"}
                className="bg-warning text-white py-3 px-8 uppercase rounded-full"
              >
                Continue shopping
              </Link>
            </div>
          </> */}
          {/* )} */}
        </div>
      </>

      <LatestArrivals />
      <Footer />
      <FooterLast />
    </div>
  );
}
