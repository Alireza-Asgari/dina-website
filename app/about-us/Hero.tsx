import { BgShape1 } from "@/components/BgSahpes";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="min-h-screen relative z-20 pt-16 sm:pt-20">
      <div className="relative z-30 px-4 sm:px-20 my-14 max-w-3xl space-y-4">
        <h1 className="heading-2">درباره ما</h1>
        <p className="paragraph2">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است.
        </p>
      </div>
      <div className="w-full h-[55vh] relative z-20">
        <Image
          src={"/about-1.png"}
          fill
          alt="about us"
          className="object-cover object-center"
        />
      </div>
      <BgShape1 className={"max-h-screen h-full"} />
    </div>
  );
}
