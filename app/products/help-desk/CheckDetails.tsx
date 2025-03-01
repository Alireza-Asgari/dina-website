import DviderMotion from "@/components/DviderMotion";
import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function CheckDetails() {
  return (
    <div className="max-w-[90%] w-full mx-auto bg-productInLight dark:bg-productInDark text-black dark:text-white-500 gradient-border-1 p-4 sm:p-16 ">
      <div className="space-y-8 mb-20">
        <h2 className="heading-3">
          سامانه Help Desk دینا پوششی همه جانبه از فرآیند های انفورماتیک
        </h2>
        <p className="paragraph text-justify">
          شما چه مدیر واحد یا سرپرست بخش های زیر مجموعه باشید ، چه کارشناس باشید
          و چه کاربر درهرحال این سامانه قادر است فرآیندی نو را برای شما رقم بزند
          بسته به نیاز مندی که که دارید قادر خواهید بود تا به نحو احسن با کمک
          ابزار حرفه ای و دردسترس تعاملی سازنده با کاربران و کارمندان سازمان خود
          برقرار سازید اهمیت سامانه های Help Desk آنچنان گسترده ست که پلتفرم‌های
          متنوعی برای آن طراحی و ارائه‌شده است و روزبه‌روز بر گسترش استفاده از
          آن افزوده می‌شود
        </p>
      </div>
      <DviderMotion />
      <div className="space-y-8 my-8">
        <h2 className="heading-3">ویژگی های خاص</h2>
        <div className="max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-y-4">
          <div className="flex items-center gap-2">
            <FaCheck className="w-8 h-8 text-green-400" />
            <p className="paragraph">لورم ایپسوم متن ساختگی </p>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="w-8 h-8 text-green-400" />
            <p className="paragraph">تولید سادگی نامفهوم از صنعت چاپ</p>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="w-8 h-8 text-green-400" />
            <p className="paragraph">با استفاده از</p>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="w-8 h-8 text-green-400" />
            <p className="paragraph">تولید سادگی نامفهوم از صنعت چاپ</p>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="w-8 h-8 text-green-400" />
            <p className="paragraph">با استفاده از</p>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="w-8 h-8 text-green-400" />
            <p className="paragraph">با استفاده از</p>
          </div>
        </div>
      </div>
    </div>
  );
}
