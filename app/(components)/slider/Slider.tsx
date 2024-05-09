import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import four from "../../../public/newArrivals/1.jpg";
// import five from "../../../public/newArrivals/2.jpg";
// import one from "../../../public/newArrivals/3.jpg";
// import two from "../../../public/newArrivals/4.jpg";
// import three from "../../../public/newArrivals/5.jpg";
// import seven from "../../../public/footer/first.jpg";
// import eight from "../../../public/footer/second.jpg";
// import nine from "../../../public/footer/third.jpg";
import first from "../../../public/swiper/firstSwiper.jpg";
import second from "../../../public/swiper/twoSwiper.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

export default function App() {
  return (
    <div className="bg-red">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper mt-4 w-[100%] md:h-[600px] h-[380px]"
      >
        <SwiperSlide className="md:mx-14 mx-8">
          <Image src={first} className="" alt="One" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={second} className="" alt="Two" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
