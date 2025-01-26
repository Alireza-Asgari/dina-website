import Image from "next/image";
import React from "react";

export default function AboutDina() {
  return (
    <section className="dark:bg-primary-700 relative shadow-custom text-gray-800 dark:text-white bg-bgInnerLight margin-1 py-4 pe-4 ps-4 lg:ps-8  rounded-[32px] flex flex-col lg:flex-row mb-10 items-center gap-8 lg:gap-16 z-10">
      <div className="space-y-6 pb-4 basis-1/2">
        <h3 className="heading-4">درباره مجموعه دینا</h3>
        <h2 className="heading-3">ارزش‌های ما و آنچه در مسیرمان طی کرده‌ایم</h2>
        <p className="paragraph text-justify">
          شرکت نرم افزاری داده کاوان دینادر زمینه نرم افزار های مدیریتی فعالیت
          دارد.مدیریت دارایی ها و هزینه های تعمیرات و نگهداری اموال و دارایی های
          یک سازمان به عنوان ابزار کارکرد و سرمایه فیزیکی و هزینه ساز یک سازمان
          نقش بسیار مهمی در چگونگی شکل گیری فرایند ها و نحوه ی بازدهی کارکنان
          ایفا میکند نرم افزار Help Deskدینا با درنظر داشتن این اصل مهم و بهره
          مندی از تاکتیک های مدیریتی رایج در عرصه فناوری اطالعات اقدام به تولید
          ماژول های ویژه ای در بخش مدیریت دارایی ها و هزینه های مرتبط با تعمیرات
          و نگهداری تجهیزات سازمان شما نموده است.
        </p>
        <div className="w-40 h-40 relative justify-self-end">
          <Image
            src={"/mainpage/sign.png"}
            alt="sign image"
            fill
            className="object-cover"
            sizes="100%"
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="relative w-full h-full">
          <Image
            src="/mainPage/about-dina.png"
            width={573}
            height={616}
            sizes="100vw"
            className="w-full h-auto"
            alt="about-dina"
          />
        </div>
      </div>
    </section>
  );
}
