"use client";
import React from "react";
import { BsChatText } from "react-icons/bs";
import { LuFolderGit } from "react-icons/lu";
import { SiTicktick } from "react-icons/si";
import { VscCodeReview } from "react-icons/vsc";
import LinkComponent from "../ui/Link";
import { ReactTyped } from "react-typed";
import ZoomX from "../animation/ZoomX";

export default function DinaEfficiency() {
  return (
    <section className="dark:bg-primary-700 text-gray-800 dark:text-white bg-bgInnerLight shadow-custom mb-16 mx-4 lg:mx-10  rounded-[32px] relative z-10 min-h-[70vh] flex flex-col justify-center py-8">
      <div className="text-center space-y-4 pb-4 mx-4">
        {/* <h3 className="heading-4">دینا کیفیت و کارایی</h3> */}
        <h3 className="heading-4">
          <ReactTyped
            strings={["دینا ، کیفیت و کارایی"]}
            typeSpeed={100}
            loop
          />
        </h3>
        <h2 className="heading-3">
          اموال سازمان خود را با محصولات دینا، آنلاین رصد کنید
        </h2>
      </div>
      <div className="mx-auto flex flex-col xl:flex-row p-4 sm:p-8 items-center gap-8 lg:gap-16 w-full">
        <ZoomX xValue={"100%"} className="flex-1">
          <p className="paragraph text-justify">
            ما در داده‌کاوان دینا معتقدیم که مدیریت دارایی‌ها و هزینه‌های تعمیر
            و نگهداری اموال و دارایی‌های یک سازمان، نقش مهمی در بهبود عملکرد و
            افزایش بهره‌وری کارکنان دارد. به همین دلیل، نرم‌افزار Help Desk دینا
            با توجه به این اصول و بهره‌گیری از بهترین تاکتیک‌های مدیریتی در
            زمینه فناوری اطلاعات طراحی شده است. ماژول‌های ویژه‌ای که در این
            نرم‌افزار تعبیه شده‌اند، به شما کمک می‌کنند تا مدیریت دارایی‌ها و
            هزینه‌های مرتبط با تعمیر و نگهداری تجهیزات سازمانتان را بهبود بخشید.
            ما همیشه در کنار شما هستیم تا بهترین راه‌حل‌ها را برای نیازهای
            مدیریتی شما ارائه دهیم.
          </p>
          <div className="mt-4 sm:mt-8 place-self-end sm:place-self-start">
            <LinkComponent>
              <p className="tracking-wider font-medium ">اطلاعات بیشتر</p>
            </LinkComponent>
          </div>
        </ZoomX>

        <ZoomX
          xValue={"-100%"}
          className=" mx-auto xl:mx-0 flex flex-col gap-8"
        >
          <div className="flex gap-4 sm:gap-8 items-center">
            <SiTicktick className="text-2xl sm:text-4xl font-semibold" />
            <p className="text-base sm:text-xl">
              شناسایی سریع و آنلاین اطلاعات سخت افزاری
            </p>
          </div>
          <div className="flex gap-4 sm:gap-8 items-center">
            <LuFolderGit className="text-2xl sm:text-4xl font-semibold" />
            <p className="text-base sm:text-xl">
              اتصال هوشمند به اکتیودایرکتوری
            </p>
          </div>
          <div className="flex gap-4 sm:gap-8 items-center">
            <BsChatText className="text-2xl sm:text-4xl font-semibold" />
            <p className="text-base sm:text-xl">اتصال به سیستم پیام رسان</p>
          </div>
          <div className="flex gap-4 sm:gap-8 items-center">
            <VscCodeReview className="text-2xl sm:text-4xl font-semibold" />
            <p className="text-base sm:text-xl">
              ارتباط هوشمند با سرور ایمیل و پست الکترونیک
            </p>
          </div>
        </ZoomX>
      </div>
    </section>
  );
}
