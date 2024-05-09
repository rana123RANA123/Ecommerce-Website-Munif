"use client";
import Affordable from "@/app/(components)/affordable/Affordable";
import FirstSlider from "@/app/(components)/firstSlider/FirstSlider";
import Footer from "@/app/(components)/footer/Footer";
import FooterLast from "@/app/(components)/footerLast/FooterLast";
import Header from "@/app/(components)/header/Header";
import LatestArrivals from "@/app/(components)/latestArrivals/LatestArrivals";
// import Navbar from "@/app/(components)/navbar/Navbar";
import NewArrivals from "@/app/(components)/newArrivals/NewArrivals";
import SecondHeader from "@/app/(components)/secondHeader/SecondHeader";
import ShopFirst from "@/app/(components)/shopFirst/ShopFirst";
import Slider from "@/app/(components)/slider/Slider";
import HomeSwiper from "@/app/(components)/swipers/HomeSwiper";
import TopBar from "@/app/(components)/topBar/TopBar";
import React from "react";

export default function page() {
  return (
    <>
      {/* <TopBar /> */}
      <Header />
      {/* <Navbar /> */}
      {/* <HomeSwiper /> */}
      <SecondHeader />
      <Slider />
      <NewArrivals />
      <ShopFirst />
      <Affordable />
      <LatestArrivals />
      <Footer />
      <FooterLast />
    </>
  );
}
