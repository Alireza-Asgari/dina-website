import AboutDina from "@/components/mainpage/AboutDina";
import DinaEfficiency from "@/components/mainpage/DinaEfficiency";
import Hero from "@/components/mainpage/Hero";
import MotionVideo from "@/components/mainpage/MotionVideo";
import { MovingCards } from "@/components/mainpage/MovingCards";
import Products from "@/components/mainpage/Products";
import Services from "@/components/mainpage/Services";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full bg-white-200 overflow-x-clip pb-8 dark:bg-primary-900 transition-colors duration-300">
      <Hero />
      <MovingCards />
      <Services />
      <div className="relative overflow-hidden">
        <DinaEfficiency />
        <AboutDina />
        <div className="w-[388px] h-[416px] bg-[#5c009518] rounded-[50%] absolute left-0 top-1/4 -translate-x-1/3 blur-md" />
      </div>
      <MotionVideo />
      <Products />
    </div>
  );
}
