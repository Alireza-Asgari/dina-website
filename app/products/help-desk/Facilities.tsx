import DviderMotion from "@/components/DviderMotion";
import React from "react";

export default function Facilities() {
  return (
    <div className="max-w-[90%] w-full mx-auto bg-productInLight dark:bg-productInDark text-black dark:text-white-500 gradient-border-1 p-4 sm:p-16 my-16">
      <div className="space-y-8 ">
        <h2 className="heading-3">امکانات کاربردی</h2>
        <div className="w-fit grid grid-cols-1 sm:grid-cols-2 gap-y-4">
          <div className="flex items-center gap-2">
            <p className="paragraph">
              &ndash; پاسخگویی آنلاین کارشناسان انفورماتیک
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="paragraph">
              &ndash; توزیع هوشمند درخواست های تخصصی کاربران
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="paragraph">&ndash; مجهز به فرم ساز هوشمند</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="paragraph">
              &ndash; اتصال پویا به اکتیودایرکتوری و واکاوی چارت سازمانی
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="paragraph">
              &ndash; قابلیت تعریف شعب، مناطق و نمایندگی ها
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="paragraph">
              &ndash; تعریف فرآیند های فناوری اطلاعات مبتنی بر سطوح دسترسی و
              تخصصی کارشناسان
            </p>
          </div>
        </div>
      </div>
      <DviderMotion className={"my-16"} />
      <h2 className="heading-3 justify-self-start">ابزارها</h2>
      <div className="flex w-full justify-between mt-4">
        <div className="flex gap-4">
          <div className="w-6 h-6 rounded-md bg-purple-500" />
          <div className="w-6 h-6 rounded-md bg-purple-500" />
        </div>
        <p>download</p>
      </div>
    </div>
  );
}
