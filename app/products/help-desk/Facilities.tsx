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
      <h2 className="heading-3 justify-self-start">ویدیو موشن ها</h2>
      <div className="flex w-full justify-between mt-4">
        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() =>
              handleOpenModal(
                "https://www.aparat.com/video/video/embed/videohash/a16xixy/vt/frame?titleShow=true"
              )
            }
            className="text-white relative bg-primary-300 rounded-xl px-4 py-2 sm:px-6 sm:py-3 hover:scale-110 transition-all "
          >
            موشن ۱
          </button>
          <button
            onClick={() =>
              handleOpenModal(
                "https://www.aparat.com/video/video/embed/videohash/z13ym8n/vt/frame?titleShow=true"
              )
            }
            className="text-white relative bg-primary-300 rounded-xl px-4 py-2 sm:px-6 sm:py-3 hover:scale-110 transition-all "
          >
            موشن ۲
          </button>
          <button
            onClick={() =>
              handleOpenModal(
                "https://www.aparat.com/video/video/embed/videohash/p87o073/vt/frame"
              )
            }
            className="text-white relative bg-primary-300 rounded-xl px-4 py-2 sm:px-6 sm:py-3 hover:scale-110 transition-all "
          >
            موشن ۳
          </button>
          <button
            onClick={() =>
              handleOpenModal(
                "https://www.aparat.com/video/video/embed/videohash/z33l4po/vt/frame?titleShow=true"
              )
            }
            className="text-white relative bg-primary-300 rounded-xl px-4 py-2 sm:px-6 sm:py-3 hover:scale-110 transition-all "
          >
            موشن ۴
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
