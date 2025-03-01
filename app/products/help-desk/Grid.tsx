import React from "react";
import Video from "./Video";
import Image from "next/image";
import MotionVideo from "@/components/mainpage/MotionVideo";
import Motion from "../../../components/Motion";
const images = [
  "/helpDesk/help-2.jpg",
  "/helpDesk/help-3.jpg",
  "/helpDesk/help-4.jpg",
  "/helpDesk/login.jpg",
];
// auto-rows-[minmax(200px,280px)] lg:auto-rows-[minmax(400px,530px)]
export default function Grid() {
  return (
    <div className="container mt-20 p-10 sm:p-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10  auto-cols-[minmax(300px,600px)] ">
      <div className="col-span-1 sm:col-span-2 w-full rounded-lg overflow-hidden relative ">
        {/* <Video /> */}
        <Motion src="/products/help-desk.mp4" />

        {/* <Image
          src="/products/grid-1.png"
          alt="item"
          fill
          className="object-cover object-center aspect-video"
        /> */}
      </div>
      {images.map((img, i) => (
        <div
          key={i}
          className="col-span-1 rounded-md w-full relative overflow-hidden h-72  md:h-96 "
        >
          <Image
            src={img}
            alt="item"
            fill
            className="object-fill object-center aspect-video "
          />
        </div>
      ))}
      {/* <div className="col-span-1 bg-red-50 rounded-md w-full relative overflow-hidden  ">
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
      </div> */}
    </div>
  );
}
