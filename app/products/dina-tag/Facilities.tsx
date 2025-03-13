"use client";
import DviderMotion from "@/components/DviderMotion";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Motion from "./Motion";
import clsx from "clsx";
export default function Facilities() {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const handleOpenModal = (url: string) => {
    setVideoUrl(url);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setVideoUrl("");
  };
  return (
    <div className="max-w-[90%] w-full mx-auto bg-productInLight dark:bg-productInDark text-black dark:text-white-500 gradient-border-1 p-4 sm:p-16 my-16">
      <div className="space-y-8 ">
        <h2 className="heading-3">امکانات کاربردی</h2>
        <div className="w-fit grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 ">
          <div className="flex items-center gap-2 max-w-2xl">
            <span className="w-3 h-3 basis-3 rounded-full bg-black dark:bg-white-500 inline-block" />{" "}
            <p className="paragraph max-w-xl">
              قابلیت ثبت و مدیریت اموال بلاتکلیف و فاقد تگ جهت تعیین تکلیفهای
              مدیریتی برای مدیران ارشد و انبارداران
            </p>
          </div>
          <div className="flex items-center gap-2 max-w-2xl">
            <span className="w-3 h-3 rounded-full bg-black dark:bg-white-500 inline-block" />{" "}
            <p className="paragraph max-w-xl">
              امکان اجرای عملیات ثبت و اموال گردانی در دو مود آفلاین و آنلاین و
              مبتنی بر پردازش تصویر
            </p>
          </div>
          <div className="flex items-center gap-2 max-w-2xl">
            <span className="w-3 h-3 rounded-full bg-black dark:bg-white-500 inline-block" />{" "}
            <p className="paragraph max-w-xl">
              امکان ثبت تمامی سوابق اموال اعم از جابجایی های مکانی و مالکیت ها
            </p>
          </div>
          <div className="flex items-center gap-2 max-w-2xl">
            <span className="w-3 h-3 rounded-full bg-black dark:bg-white-500 inline-block" />{" "}
            <p className="paragraph max-w-xl">
              امکان جست و جوی هوشمند بر اساس تمامی شاخصهای اموال و دارایی{" "}
            </p>
          </div>
          <div className="flex items-center gap-2 max-w-2xl">
            <span className="w-3 h-3 rounded-full bg-black dark:bg-white-500 inline-block" />{" "}
            <p className="paragraph max-w-xl">
              امکان دریافت گزارش وضعیت سوابق اموال بر اساس رسته ، مکان و چارت
              سازمانی
            </p>
          </div>
          <div className="flex items-center gap-2 max-w-2xl">
            <span className="w-3 h-3 rounded-full bg-black dark:bg-white-500 inline-block" />{" "}
            <p className="paragraph max-w-xl">
              دریافت گزارشات اموال گردانی در بازه های زمانی به صورت نموداری،
              فصلی،ماهیانه و...
            </p>
          </div>
        </div>
      </div>
      <DviderMotion className={"my-16"} />
      <h2 className="heading-3 justify-self-start">ویدیو موشن ها</h2>
      <div className="flex w-full justify-between mt-4">
        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() =>
              handleOpenModal(
                "https://www.aparat.com/video/video/embed/videohash/a45pf54/vt/frame?titleShow=true"
              )
            }
            className="text-white relative bg-primary-300 rounded-xl px-4 py-2 sm:px-6 sm:py-3 hover:scale-110 transition-all "
          >
            موشن ۱
          </button>
        </div>
      </div>
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {isOpen && (
          <Motion handleClose={handleCloseModal}>
            <div className="relative w-full h-[170px] sm:h-80 lg:h-[365px] ">
              {!isIframeLoaded && (
                <div className="absolute top-0 left-0 w-full h-full bg-gray-200 flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-white-500 border-t-transparent border-solid rounded-full animate-spin"></div>
                </div>
              )}
              <iframe
                src={videoUrl}
                title="Aparat Video"
                className={clsx(
                  "w-full h-full",
                  isIframeLoaded ? "visible" : "invisible"
                )}
                frameBorder="0"
                allow="autoplay; fullscreen"
                loading="lazy"
                onLoad={() => setIsIframeLoaded(true)}
              />
            </div>
          </Motion>
        )}
      </AnimatePresence>
    </div>
  );
}
