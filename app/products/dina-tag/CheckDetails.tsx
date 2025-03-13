import DviderMotion from "@/components/DviderMotion";
import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function CheckDetails() {
  return (
    <div className="max-w-[90%] w-full mx-auto bg-productInLight dark:bg-productInDark text-black dark:text-white-500 gradient-border-1 p-4 sm:p-16 ">
      <div className="space-y-8 mb-20">
        <h2 className="heading-3">
          یک ناظر دقیق و هوشمند در کنترل جابجایی ها و ردیابی اموال و تجهیزات
        </h2>
        <p className="paragraph text-justify">
          اگر شما نیز مدیرانی هستید که همیشه دنبال راه حلی برای اطلاع دقیق از
          موقعیت مکانی تجهیزات خود و موجودی های انلاین انبار و کالاهای سازمان
          هستید ، دینا تگ پیشنهادی کاربردی برای رفع تمامی نیازمندی های شماست .
          با کمک آن به راحتی برای اموال خود شناسنامه صادر کنید ، بارکد مفهومی
          تهیه کنید و بعد از آن برای همیشه از تمامی جابجایی ها آنها در هرلحظه
          باخبر شوید .
        </p>
      </div>
      <DviderMotion />
      <div className="space-y-8 my-8">
        <h2 className="heading-3">ویژگی های بارز </h2>
        <div className="w-fit grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
          <div className="flex items-center gap-2 max-w-xl">
            <FaCheck className="w-8 h-8 text-green-400" />
            <p className="paragraph">
              اجرا و اثبات اختصاص اموال به پرسنل تعریف شده به دو روش دستی و
              مبتنی بر پروتکل شبکه
            </p>
          </div>
          <div className="flex items-center gap-2 max-w-xl">
            <FaCheck className="w-8 h-8 text-green-400" />
            <p className="paragraph">
              ثبت عملیات جابجایی های حجیم اموال در اماکن استقرار به صورت دستی و
              مبتنی بر شبکه
            </p>
          </div>
          <div className="flex items-center gap-2 max-w-xl">
            <FaCheck className="w-8 h-8 text-green-400" />
            <p className="paragraph">
              قابلیت شناسایی ساختمان و اتاق با امکان اسکن کد یکتای مکانی{" "}
            </p>
          </div>
          <div className="flex items-center gap-2 max-w-xl">
            <FaCheck className="w-8 h-8 text-green-400" />
            <p className="paragraph">
              نمایش تمامی اموال قابل شناسایی در زمان شروع اسکن
            </p>
          </div>
          <div className="flex items-center gap-2 max-w-xl">
            <FaCheck className="w-8 h-8 text-green-400" />
            <p className="paragraph">شناسایی اموال مستهلک، جدید و جابجا شده </p>
          </div>
          <div className="flex items-center gap-2 max-w-xl">
            <FaCheck className="w-8 h-8 text-green-400" />
            <p className="paragraph">
              قابلیت ثبت گزارش بازدید به ازای هریک از اموال اسکن شده در مکان
              جاری{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
