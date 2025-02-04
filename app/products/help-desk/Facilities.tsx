import DviderMotion from "@/components/DviderMotion";
import React from "react";

export default function Facilities() {
  return (
    <div className="max-w-[90%] w-full mx-auto bg-productInLight dark:bg-productInDark text-black dark:text-white-500 gradient-border-1 p-4 sm:p-16 my-16">
      <div className="space-y-8 ">
        <h2 className="heading-3">امکانات</h2>
        <div className="max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-y-4">
          <div className="flex items-center gap-2">
            <p className="paragraph">&ndash; لورم ایپسوم متن ساختگی </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="paragraph">&ndash; تولید سادگی نامفهوم از صنعت چاپ</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="paragraph">&ndash; با استفاده از</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="paragraph">&ndash; تولید سادگی نامفهوم از صنعت چاپ</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="paragraph">&ndash; با استفاده از</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="paragraph">&ndash; با استفاده از</p>
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
