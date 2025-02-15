import { BgShape1 } from "@/components/BgSahpes";
import Button from "@/components/ui/Button";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Descriptions() {
  return (
    <div className="w-full mx-auto min-h-screen overflow-hidden overflow-y-clip relative p-5 sm:p-10 lg:p-20">
      <BgShape1 />
      <div className="relative z-20 mt-28 space-y-10">
        <h1 className="heading-2 ">سوالات خود را مطرح کنید</h1>
        <h2 className="heading-3 ">لورم ایپسوم متن ساختگی با تولید سادگی</h2>
        <p className="paragraph max-w-72 sm:max-w-[500px]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
        </p>
        <Button href="/">
          <p>دکمه پر کردن فرم</p>
        </Button>
      </div>
      <div className="max-sm:mx-auto w-fit relative z-20 bg-primary-300 text-white py-6 px-10 mt-16 rounded-2xl sm:rounded-3xl flex flex-col gap-8 md:gap-28 lg:gap-40 sm:flex-row justify-between items-center ">
        <p className="flex-1 paragraph w-86 text-center">
          با ما در اینستا گرام با support@dinasys. در تماس باشید.
        </p>
        <div className="flex items-center  gap-8 lg:gap-24">
          <p className="paragraph">شماره تماس : ۰۹۳۸۱۱۵۰۲۵۲</p>
          <span>
            <FaArrowLeftLong />
          </span>
        </div>
      </div>
    </div>
  );
}
