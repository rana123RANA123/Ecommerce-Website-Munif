"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import first from "../../../public/newArrivals/1.jpg";
import second from "../../../public/newArrivals/2.jpg";
import third from "../../../public/newArrivals/3.jpg";
import four from "../../../public/newArrivals/4.jpg";
import five from "../../../public/newArrivals/5.jpg";
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { fetchProducts } from "@/app/store/slices/productSlice";
import { cartItem } from "@/app/types/types";

export default function NewArrivals() {
  const products = useAppSelector((state) => state.products.data);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  });
  return (
    <>
      <div>
        <div className="py-3">
          <p className="font-medium text-[35px] text-center">new arrivals</p>
        </div>
      </div>
      <div className="">
        <div className="flex flex-wrap gap-4 py-4 justify-center items-center">
          {/* <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2"> */}
          {/* <div className="w-[70%] md:w-[270px] md:ms-0 ms-6 h-[490px] overflow-hidden">
            <div className="">
              <div className="w-[267px] h-[370px] geeks">
                <Image
                  alt="First"
                  className="h-[370px] secondgeeksimg"
                  src={first}
                />
              </div>
            </div>
            <div className="bg-gray-200 py-2">
              <p className="font-normal text-[13px] text-center">
                <span className="text-red-500">23.99</span> WITH CODE{" "}
                <span className="font-bold"> TAKE20</span>
              </p>
            </div>
            <div className="py-2">
              <p className="font-normal text-[13px] text-center">
                Black Faux Leather Front Lace Up Leggings{" "}
              </p>
            </div>
            <div className="py-2">
              <p className="font-bold text-[22px] text-center">23.99</p>
            </div>
          </div>
          <div className="w-[70%] md:w-[270px] md:ms-0 ms-6 h-[490px] overflow-hidden">
            <div>
              <div className="w-[267px] h-[370px] geeks">
                <Image
                  alt="First"
                  className="h-[370px] secondgeeksimg"
                  src={second}
                />
              </div>
            </div>
            <div className="bg-gray-200 py-2">
              <p className="font-normal text-[13px] text-center">
                <span className="text-red-500">23.99</span> WITH CODE{" "}
                <span className="font-bold"> TAKE20</span>
              </p>
            </div>
            <div className="py-2">
              <p className="font-normal text-[13px] text-center">
                Black Faux Leather Front Lace Up Leggings{" "}
              </p>
            </div>
            <div className="py-2">
              <p className="font-bold text-[22px] text-center">23.99</p>
            </div>
          </div>
          <div className="w-[70%] md:w-[270px] md:ms-0 ms-6  h-[490px] overflow-hidden">
            <div>
              <div className="w-[267px] h-[370px] geeks">
                <Image
                  alt="First"
                  className="h-[370px] secondgeeksimg"
                  src={third}
                />
              </div>
            </div>
            <div className="bg-gray-200 py-2">
              <p className="font-normal text-[13px] text-center">
                <span className="text-red-500">23.99</span> WITH CODE{" "}
                <span className="font-bold"> TAKE20</span>
              </p>
            </div>
            <div className="py-2">
              <p className="font-normal text-[13px] text-center">
                Black Faux Leather Front Lace Up Leggings{" "}
              </p>
            </div>
            <div className="py-2">
              <p className="font-bold text-[22px] text-center">23.99</p>
            </div>
          </div>
          <div className="w-[70%] md:w-[270px] md:ms-0 ms-6 h-[490px] overflow-hidden">
            <div>
              <div className="w-[267px] h-[370px] geeks">
                <Image
                  alt="First"
                  className="h-[370px] secondgeeksimg"
                  src={four}
                />
              </div>
            </div>
            <div className="bg-gray-200 py-2">
              <p className="font-normal text-[13px] text-center">
                <span className="text-red-500">23.99</span> WITH CODE{" "}
                <span className="font-bold"> TAKE20</span>
              </p>
            </div>
            <div className="py-2">
              <p className="font-normal text-[13px] text-center">
                Black Faux Leather Front Lace Up Leggings{" "}
              </p>
            </div>
            <div className="py-2">
              <p className="font-bold text-[22px] text-center">23.99</p>
            </div>
          </div> */}
          {products.map((item: cartItem, i: any) => {
            if (i < 5) {
              return (
                <div key={i}>
                  <div className="w-[70%] md:w-[270px] md:ms-0 ms-6 h-[490px] overflow-hidden">
                    <div>
                      <div className="w-[267px] h-[370px] geeks">
                        <img
                          alt="djf"
                          className="h-[370px] secondgeeksimg"
                          src={item.image || ""}
                        />
                      </div>
                    </div>
                    <div className="bg-gray-200 py-2">
                      <p className="font-normal text-[13px] text-center">
                        <span className="text-red-500">344</span> WITH CODE{" "}
                        <span className="font-bold">rtyu</span>
                      </p>
                    </div>
                    <div className="py-2">
                      <p className="font-normal text-[13px] text-center">
                        fjhhjcjxhj
                      </p>
                    </div>
                    <div className="py-2">
                      <p className="font-bold text-[22px] text-center">
                        dkfjdkfj
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
}
