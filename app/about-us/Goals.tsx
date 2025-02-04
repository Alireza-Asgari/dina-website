import { BgShape2 } from "@/components/BgSahpes";
import Image from "next/image";
import React from "react";

export default function Goals() {
  return (
    <div className="w-full relative">
      <div className="w-full relative z-20 px-4 sm:px-20 my-24 space-y-4">
        <h1 className="heading-2">هدف ما</h1>
        <p className="paragraph2">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>
      </div>
      <BgShape2 />
      <div className="w-full relative z-20 px-4 sm:px-20 my-28 space-y-4">
        <h2 className="heading-1 z-20 relative">
          دینا، گروهی از جوانان مستعد، پرکار و خلاق
        </h2>
        <div className="mx-auto pt-4 z-20 relative gap-4 w-full flex justify-start flex-col lg:flex-row items-start">
          <div className="basis-full relative z-20 lg:basis-5/12 ">
            <p className="paragraph2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
          </div>
          <div className="relative z-20  w-80 sm:w-96 max-lg:self-center lg:basis-2/3 h-96">
            <Image
              src="/about-2.png"
              alt="youngs"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="z-10">
          <span className="w-52 h-[350px] bg-[#950086] bg-opacity-10 rounded-[50%] absolute top-0 -translate-y-4 right-1/3 blur-[100px]" />
          <span className="w-52 h-[350px] bg-[#360034] bg-opacity-55 rounded-[50%] absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/4 blur-[100px] " />
          <span className="w-52 h-[350px] bg-primary-400 bg-opacity-10 rounded-[50%] absolute top-0 right-1/2 -translate-x-1/2 -translate-y-1/4 blur-[40px]  " />
          <span className="w-52 h-[350px] bg-[#6e0095] bg-opacity-10 rounded-[50%] absolute top-0 left-20 translate-x-full -translate-y-1/4 blur-[100px] " />
          <span className="w-52 h-[350px] bg-[#6e0095] bg-opacity-10 rounded-[50%] absolute top-8 left-4 translate-x-1/3 -translate-y-1/4 blur-[100px] " />
        </div>
      </div>
    </div>
  );
}
