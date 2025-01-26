import React from "react";
import { BsChatText } from "react-icons/bs";
import { LuFolderGit } from "react-icons/lu";
import { SiTicktick } from "react-icons/si";
import { VscCodeReview } from "react-icons/vsc";
import LinkComponent from "../ui/Link";

export default function DinaEfficiency() {
  return (
    <section className="dark:bg-primary-700 text-gray-800 dark:text-white bg-bgInnerLight shadow-custom mb-16 mx-4 lg:mx-10 py-10 rounded-[32px] relative z-10">
      <div className="text-center space-y-4 pb-4 mx-4">
        <h3 className="heading-4">دینا کیفیت و کارایی</h3>
        <h2 className="heading-3">
          اموال سازمان خود را با محصولات دینا، آنلاین رصد کنید
        </h2>
      </div>
      <div className=" flex flex-col xl:flex-row p-4 items-center gap-8 lg:gap-16 w-full">
        <div className="xl:max-w-3xl">
          <p className="paragraph text-justify">
            شرکت نرم افزاری داده کاوان دینادر زمینه نرم افزار های مدیریتی فعالیت
            دارد.مدیریت دارایی ها و هزینه های تعمیرات و نگهداری اموال و دارایی
            های یک سازمان به عنوان ابزار کارکرد و سرمایه فیزیکی و هزینه ساز یک
            سازمان نقش بسیار مهمی در چگونگی شکل گیری فرایند ها و نحوه ی بازدهی
            کارکنان ایفا میکند نرم افزار Help Deskدینا با درنظر داشتن این اصل
            مهم و بهره مندی از تاکتیک های مدیریتی رایج در عرصه فناوری اطالعات
            اقدام به تولید ماژول های ویژه ای در بخش مدیریت دارایی ها و هزینه های
            مرتبط با تعمیرات و نگهداری تجهیزات سازمان شما نموده است.
          </p>
          <div className="mt-4 sm:mt-8 place-self-end sm:place-self-start">
            <LinkComponent>
              <p className="tracking-wider font-medium ">اطلاعات بیشتر</p>
            </LinkComponent>
          </div>
        </div>

        <div className=" mx-auto xl:mx-0 flex flex-col gap-8">
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
        </div>
      </div>
    </section>
  );
}
