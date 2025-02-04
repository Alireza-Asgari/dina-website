import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="min-h-screen  relative z-20 mt-36 ">
      <div className="relative z-30 px-10">
        <h1 className="heading-2 ">درباره ما</h1>
        <p className="paragraph">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>
      </div>
      <div className="w-full h-[50vh] relative">
        <Image
          src={"/about-1.png"}
          fill
          alt="about us"
          className="object-cover"
        />
      </div>
    </div>
  );
}
