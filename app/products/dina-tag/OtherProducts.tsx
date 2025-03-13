import DviderMotion from "@/components/DviderMotion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoArrowRedoSharp } from "react-icons/io5";

export default function OtherProducts() {
  return (
    <div className="max-w-[90%] w-full text-center mx-auto mb-16 mt-28 text-gray-750 dark:text-white">
      <h2 className="text-3xl font-bold">
        دیدن محصولات بیشتر از
        <span className="text-primary-300">دینا</span>
      </h2>
      <div className="mt-10 w-full h-fit grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 justify-items-center gap-8 place-content-center ">
        <div className="group col-span-1 sm:col-span-2 md:col-span-1 rounded-md w-72 md:max-w-sm lg:max-w-md md:w-full relative overflow-x-hidden overflow-y-clip aspect-video flex flex-col ">
          {/* <div className="group col-span-1 sm:col-span-2 md:col-span-1 rounded-md w-72 md:max-w-sm lg:max-w-md md:w-full relative overflow-x-hidden overflow-y-clip aspect-square flex flex-col "> */}
          <div className="w-full h-[90%] overflow-hidden relative">
            <Image
              src="/helpDesk/help-1.jpg"
              alt="product"
              fill
              className="object-contain object-center"
            />
            <HoverMask />
          </div>
          <div className="overflow-visible h-fit text-gray-800 dark:text-white w-full flex flex-col">
            <p className="paragraph mx-auto">سامانه هوشمند هلپ دسک</p>
            <DviderMotion />
          </div>
        </div>
        <div className="group col-span-1 sm:col-span-2 md:col-span-1 rounded-md w-72 md:max-w-sm lg:max-w-md md:w-full relative overflow-x-hidden overflow-y-clip aspect-video flex flex-col  ">
          <div className="w-full h-[90%] overflow-hidden relative">
            <Image
              src="/helpDesk/help-2.jpg"
              alt="product"
              fill
              className="object-contain object-center"
            />
            <HoverMask />
          </div>
          <div className="overflow-visible h-fit text-gray-800 dark:text-white w-full flex flex-col">
            <p className="paragraph mx-auto">سامانه هوشمند هلپ دسک</p>
            <DviderMotion />
          </div>
        </div>
        <div className="group col-span-1 sm:col-span-2 sm:col-start-2 md:col-span-1 rounded-md w-72 md:max-w-sm lg:max-w-md md:w-full relative overflow-x-hidden overflow-y-clip aspect-video flex flex-col ">
          <div className="w-full h-[90%] overflow-hidden relative">
            <Image
              src="/helpDesk/help-3.jpg"
              alt="product"
              fill
              className="object-contain object-center"
            />
            <HoverMask />
          </div>
          <div className="overflow-visible h-fit text-gray-800 dark:text-white w-full flex flex-col">
            <p className="paragraph mx-auto">سامانه هوشمند هلپ دسک</p>
            <DviderMotion />
          </div>
        </div>
      </div>
    </div>
  );
}

function HoverMask({ href1, href2 }: { href1?: string; href2?: string }) {
  return (
    <div className="absolute inset-0 bg-primary-400 bg-opacity-40 dark:bg-black dark:bg-opacity-70 flex justify-center items-center gap-3 text-3xl text-black translate-x-full group-hover:translate-x-0 transition-transform duration-300">
      <Link href={`/${href1}`} className="bg-bgInnerLight p-3 rounded-xl">
        <FaCartShopping />
      </Link>
      <Link href={`/${href2}`} className="bg-bgInnerLight p-3 rounded-xl">
        <IoArrowRedoSharp />
      </Link>
    </div>
  );
}
