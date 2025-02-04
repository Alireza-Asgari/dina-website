import DviderMotion from "@/components/DviderMotion";
import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function CheckDetails() {
  return (
    <div className="max-w-[90%] w-full mx-auto bg-productInLight dark:bg-productInDark text-black dark:text-white-500 gradient-border-1 p-4 sm:p-16 ">
      <div className="space-y-8 mb-20">
        <h2 className="heading-3">بررسی جزئیات</h2>
        <p className="paragraph text-justify">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
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
