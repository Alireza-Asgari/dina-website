import React from "react";
import Video from "./Video";
import Image from "next/image";

export default function Grid() {
  return (
    <div className="contaner mt-20 p-10 sm:p-20 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-20 auto-cols-[minmax(300px,600px)] auto-rows-[minmax(200px,280px)] lg:auto-rows-[minmax(400px,530px)] ">
      <div className="col-span-1 sm:col-span-2 w-full rounded-lg overflow-hidden relative ">
        <Video />

        {/* <Image
          src="/products/grid-1.png"
          alt="item"
          fill
          className="object-cover object-center aspect-video"
        /> */}
      </div>
      <div className="col-span-1 bg-red-50 rounded-md w-full relative overflow-hidden  ">
        <Image
          src="/products/grid-1.png"
          alt="item"
          fill
          className="object-cover object-center max-sm:aspect-square"
        />
      </div>
      <div className="col-span-1 bg-red-50 rounded-md w-full relative overflow-hidden ">
        <Image
          src="/products/grid-1.png"
          alt="item"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="col-span-1 bg-red-50 rounded-md w-full relative overflow-hidden ">
        <Image
          src="/products/grid-1.png"
          alt="item"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="col-span-1 bg-red-50 rounded-md w-full relative overflow-hidden ">
        <Image
          src="/products/grid-1.png"
          alt="item"
          fill
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}
