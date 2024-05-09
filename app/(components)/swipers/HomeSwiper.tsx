"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Grid, Parallax, Pagination } from "swiper/modules";
import FirstSlider from "../firstSlider/FirstSlider";

interface JBLBarProps {}

const HomeSwiper: React.FC<JBLBarProps> = () => {
  return (
    <>
      <div className="hero">
        <Swiper
          grid={{
            fill: "row",
            rows: 1,
          }}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 1,
            },

            992: {
              slidesPerView: 1,
            },
          }}
          spaceBetween={5}
          speed={1000}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Parallax, Pagination]}
          className="mySwiper"
        >
          <div slot="container-start" data-swiper-parallax="-23%"></div>

          <SwiperSlide>
            <FirstSlider />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HomeSwiper;
