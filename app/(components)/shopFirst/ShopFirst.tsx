import Image from "next/image";
import React from "react";
import four from "../../../public/footer/first.jpg";
import five from "../../../public/footer/second.jpg";
import six from "../../../public/footer/third.jpg";
import first from "../../../public/footer/four.jpg";
import second from "../../../public/footer/five.jpg";
import third from "../../../public/footer/six.jpg";

export default function ShopFirst() {
  return (
    <div>
      <div className="w-[86%] ml-[7%] py-5">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div>
              <Image src={first} alt="First" />
              <p className="p-2 text-center text-[25px] font-semibold">
                shop loungewear
              </p>
            </div>
          </div>
          <div>
            <div>
              <Image src={second} alt="First" />
              <p className="p-2 text-center text-[25px] font-semibold">
                shop sale
              </p>
            </div>
          </div>
          <div>
            <div>
              <Image src={third} alt="First" />
              <p className="p-2 text-center text-[25px] font-semibold">
                shop basics
              </p>
            </div>
          </div>
          <div>
            <div>
              <Image src={four} alt="First" />
              <p className="p-2 text-center text-[25px] font-semibold">
                shop tops
              </p>
            </div>
          </div>
          <div>
            <div>
              <Image src={five} alt="First" />
              <p className="p-2 text-center text-[25px] font-semibold">
                under £10
              </p>
            </div>
          </div>
          <div>
            <div>
              <Image src={six} alt="First" />
              <p className="p-2 text-center text-[25px] font-semibold">
                shop dresses
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
