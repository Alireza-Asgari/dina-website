import LinkComponent from "@/components/ui/Link";
import Image from "next/image";
import React from "react";

export default function Product() {
  return (
    <section className="overflow-x-hidden px-4 lg:px-10 px-auto mt-20 text-gray-800 relative dark:text-white">
      <div className="flex-image-text mt-10 md:mt-32">
        <div className="flex-text">
          <h2 className="heading-3 ">سامانه هلپ دسک</h2>
          <p className="paragraph text-justify">
            سامانه هلپ دسک یک نرم افزار جامع برای مدیران IT شرکت‌ها و سازمان‌های
            متوسط و بزرگ است. این سامانه از بخش‌های مختلفی تشکیل شده که هر کدام
            از این بخش‌ها می‌توانند به راحتی نیازهای بسیاری را پوشش داده و با
            ارائه یک راهکار مناسب در سریع‌ترین زمان ممکن مشکل سازمان ف کاربران و
            یا بخش IT را برطرف کنند.
          </p>
          <LinkComponent>
            <p className="tracking-wider font-medium ">اطلاعات بیشتر</p>
          </LinkComponent>
        </div>
        <div className="relative md:w-1/3 md:ml-10 group">
          <Image
            alt="help desk"
            src="/mainPage/helpDesk.png"
            width={550}
            height={330}
            className="w-full h-full object-cover"
          />
          <div className="w-full h-full absolute top-0 right-0 border-4 -translate-x-2 md:-translate-x-8 translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-all border-gray-800 dark:border-white " />
        </div>
      </div>
      <div className="flex-image-text md:flex-row-reverse mt-20 relative">
        <div className="flex-text">
          <h2 className="heading-3 ">نرم افزار سوپر مارکت آنلاین</h2>
          <p className="paragraph text-justify">
            نرم افزار سوپر مارکت آنلاین که با نام فروشگاه آنلاین دینا سود نیز
            شناخته می‌شود یکی از برترین نرم‌افزارهای مربوط به فروش آنلاین
            محصولات در سوپر مارکت ها است. این نرم افزار دارای نسخه وب و اپلیکیشن
            است.
          </p>
          <LinkComponent>
            <p className="tracking-wider font-medium ">اطلاعات بیشتر</p>
          </LinkComponent>
        </div>
        <div className="relative w-fit h-fit group">
          <Image
            alt="help desk"
            src="/mainPage/superMarket.png"
            width={338}
            height={560}
            className="relative z-10 mx-auto "
          />
          <div className="w-full h-full absolute top-0 left-0 translate-x-6 z-10 -translate-y-6 group-hover:translate-x-0 border-4 group-hover:translate-y-0 transition-all border-gray-800 dark:border-white " />
        </div>
        <span className="absolute top-0 right-0 bg-[#5C009514] w-[200px] h-[350px] rounded-[50%] blur-[130px]" />
        <span className="absolute -top-14 right-60 translate-x-1/2 bg-[#5C009514] w-[200px] h-[350px] rounded-[50%] blur-[70px]" />
        <span className="absolute -top-14 right-1/4 bg-[#6E00951A] w-[200px] h-[350px] rounded-[50%] blur-[70px]" />
        <span className="absolute -top-14 right-1/3 -translate-x-1/2 bg-[#6C016B1F] w-[200px] h-[350px] rounded-[50%] blur-[70px]" />
      </div>
    </section>
  );
}
