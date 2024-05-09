import React from "react";
import facebook from "../../../public/footer/facebook.jpg";
import instagram from "../../../public/footer/instagram.jpg";
import Image from "next/image";
export default function Affordable() {
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center py-3">
          <h1 className="font-semibold text-[17px] md:text-[20px]">
            AFFORDABLE WOMENS CLOTHING
          </h1>
          <p className="font-light text-center text-[12px] mt-3 md:text-[15px] md:px-32 px-6">
            AT MISSREBEL, WE PROVIDE WOMEN'S CLOTHES THAT ARE STYLISH, HIGH
            QUALITY AND ON TREND. WE PRIDE OURSELVES ON BEING ONE OF THE LEADERS
            OF WOMEN'S CLOTHING ONLINE WITH AFFORDABLE QUALITY FASHION ITEMS
            THROUGHOUT OUR WEBSITE. OUR SELECTION OF CHEAP WOMEN'S CLOTHES
            INJECTS KEY FASHIONABLE PIECES INTO YOUR WARDROBE AT LOW PRICES. OUR
            EXTENSIVE RANGE OF DRESSES, BLAZERS, JUMPSUITS AND PLAYSUITS,
            SWEATSHIRTS, TOPS, COATS ANE MORE ENSURES THERE WILL BE SOMETHING
            FOR EVERYONE.
          </p>
          <div className="flex gap-4 mt-3">
            <div>
              <Image alt="facebook" src={facebook} />
            </div>
            <div>
              <Image alt="instagram" src={instagram} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
