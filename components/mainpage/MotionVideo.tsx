"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import LinkComponent from "../ui/Link";
import { RiChatVoiceAiLine } from "react-icons/ri";
import { TbClockHour5 } from "react-icons/tb";
import { GrShieldSecurity } from "react-icons/gr";
import ComX from "../animation/ComX";
import ZoomX from "../animation/ZoomX";
export default function MotionVideo() {
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setIsActive(false);
          }
        });
      },
      { threshold: 0.1 }
    );
    const sectionRefcurrent = sectionRef.current;
    if (sectionRefcurrent) {
      observer.observe(sectionRefcurrent);
    }

    return () => {
      if (sectionRefcurrent) {
        observer.unobserve(sectionRefcurrent);
      }
    };
  }, []);

  return (
    <div
      onClick={(e) => {
        console.log((e.target as HTMLElement).dispatchEvent);
        if ((e.target as HTMLElement).id === "play") {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      }}
    >
      <section className="pb-10 relative overflow-hidden">
        <div className="text-gray-800 mx-auto relative dark:text-white text-center space-y-6 p-4 pt-16">
          <h2 className="heading-2 ">
            در کنار شما هستیم.از آموزش تا پیاده‌سازی
          </h2>
          <p className="paragraph max-w-6xl mx-auto">
            گروه نرم افزاری دینا متشکل از جوانان متعهد و حرفه ای در صنعت نرم
            افزار و طراحی سیستم است که طی سالیان متوالی در امر تولید نرم افزار و
            اپلیکیشن ، طراحی و معماری سیستم های نرم افزاری و ارائه پشتیبانی های
            فنی به مشتریان خود فعالانه تلاش می کنند .
          </p>
        </div>
        <div className="absolute w-[354px] h-[318px] bg-[#5C009514] rounded-[50%] top-0 right-1/2 translate-x-1/2 blur-3xl" />
        <div className="relative w-full flex items-center justify-center mt-8">
          <motion.div
            className={clsx(
              "bg-cover bg-no-repeat relative overflow-clip  [--height-from:200px] [--width-from:200px] [--height-to:183px] [--width-to:325px] sm:[--height-from:300px] sm:[--width-from:300px] sm:[--height-to:280px] sm:[--width-to:520px] md:[--height-from:300px] md:[--width-from:300px] md:[--height-to:360px] md:[--width-to:640px] xl:[--height-from:400px] xl:[--width-from:400px] xl:[--height-to:450px] xl:[--width-to:800px] flex justify-center items-center border-2 border-primary-300 dark:border-gray-500 ",
              !isActive && "video-poster"
            )}
            variants={{
              active: {
                width: "var(--width-to)",
                height: "var(--height-to)",
                borderRadius: "20px",
              },
              inActive: {
                borderRadius: "50%",
                width: "var(--width-from)",
                height: "var(--height-from)",
                x: "100%",
                rotate: 360,
                opacity: 0,
                transition: {
                  duration: 5,
                },
              },
            }}
            whileInView={{
              x: 0,
              rotate: 0,
              opacity: 1,
              transition: {
                delay: 0.2,
                duration: 0.8,
              },
            }}
            viewport={{ amount: 0.6, once: true }}
            initial="inActive"
            animate={isActive ? "active" : "inactive"}
          >
            {isActive ? (
              <video
                className="w-full h-full object-contain pointer-events-auto z-30 "
                controls={isActive}
                autoPlay={isActive}
                preload={isActive ? "auto" : "none"}
              >
                <source src="mainPage/motion.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div
                className="w-16 h-16 sm:w-32 sm:h-32 cursor-pointer bg-primary-300 rounded-full flex justify-center items-center z-20"
                id="play"
              >
                <svg
                  width="37"
                  height="42"
                  viewBox="0 0 37 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-8 sm:w-9 sm:h-11 translate-x-1 pointer-events-none"
                >
                  <path
                    d="M34.2773 16.8231C37.6107 18.7476 37.6107 23.5588 34.2773 25.4833L7.54266 40.9186C4.20932 42.8431 0.0426539 40.4375 0.0426541 36.5885L0.0426554 5.71793C0.0426556 1.86892 4.20932 -0.536705 7.54266 1.3878L34.2773 16.8231Z"
                    fill="white"
                  />
                </svg>
              </div>
            )}
            {!isActive && (
              <div className="bg-[#C4C4C4] w-full h-full object-cover absolute top-0 left-0 z-10 opacity-60" />
            )}
          </motion.div>

          {!isActive && (
            <motion.div
              exit={{ opacity: 100 }}
              className="absolute bottom-0 right-1/2 translate-x-1/2 pointer-events-none z-20"
            >
              <svg
                width="586"
                height="190"
                viewBox="0 0 586 190"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.38869 0.868798C64.7522 89.6715 217.402 249.401 382.67 135.403C399.683 123.668 424.119 81.6669 417.966 60.7096C405.607 18.6121 324.644 58.8584 407.866 139.267C491.089 219.676 560.556 183.046 584.887 154.68"
                  stroke="url(#paint0_linear_47_1226)"
                  strokeWidth="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_47_1226"
                    x1="316.059"
                    y1="15.364"
                    x2="257.203"
                    y2="175.617"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#6C016B" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          )}
        </div>
      </section>
      <section className="dark:bg-primary-700 relative shadow-custom text-gray-800 dark:text-white bg-bgInnerLight margin-1 p-4 sm:p-10 py-12 pb-20 rounded-[32px] z-10 mb-10 flex flex-col gap-8">
        <ComX
          xValue={"100%"}
          className="flex justify-between  flex-col items-center gap-4 sm:flex-row"
        >
          <h2 className="heading-3">آنچه باید از ما بدانید</h2>
          <LinkComponent>
            <p className="tracking-wider font-medium ">اطلاعات بیشتر</p>
          </LinkComponent>
        </ComX>
        <ZoomX xValue={"100%"}>
          <p className="text-base font-normal sm:text-xl text-justify">
            شرکت نرم افزاری داده کاوان دینا فعالیت خود را از سال 1397 با نام
            گروه نرم افزاری دینا و با همکاری گروهی از فارغ‌التحصیلان گرایش های
            رشته کامپیوتر و نرم افزار آغاز کرد . هدف این شرکت در ابتدا،
            تولید سامانه های جامع Help Desk مرتبط با فعالیت ها و عملکردهای واحد
            فناوری اطلاعات در تمامی سازمان ها و ادارات دولتی ، کارخانجات و تمامی
            مجموعه های خصوصی و دولتی است که در همین راستا شروع به تحلیل، طراحی و
            تولید سامانه جامع Help Desk دینا نمود .
          </p>
        </ZoomX>

        <div className="w-full flex gap-6 mt-4 flex-col lg:flex-row">
          <div className="flex items-center gap-4">
            <RiChatVoiceAiLine className=" text-6xl" />

            <div className="space-y-2">
              <h3 className="heading-5">پشتیبانی اختصاصی</h3>
              <p className="paragraph">
                تیم پشتیبانی ما در شرایط مختلف آموزش ، اجرا و نگهداری سامانه به
                صورت آنلاین و حضوری در کنار شما خواهد بود .
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <TbClockHour5 className="text-6xl" />

            <div className="space-y-2">
              <h3 className="heading-5">پشتیبانی اختصاصی</h3>
              <p className="paragraph">
                تیم پشتیبانی ما در شرایط مختلف آموزش ، اجرا و نگهداری سامانه به
                صورت آنلاین و حضوری در کنار شما خواهد بود .
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <GrShieldSecurity className="text-8xl" />

            <div className="space-y-2">
              <h3 className="heading-5">پشتیبانی اختصاصی</h3>
              <p className="paragraph">
                تیم پشتیبانی ما در شرایط مختلف آموزش ، اجرا و نگهداری سامانه به
                صورت آنلاین و حضوری در کنار شما خواهد بود .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

{
  /* {!isActive && (
          <div className="absolute bottom-0 right-1/2 translate-x-1/2 pointer-events-none">
            <svg
              width="586"
              height="190"
              viewBox="0 0 586 190"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.38869 0.868798C64.7522 89.6715 217.402 249.401 382.67 135.403C399.683 123.668 424.119 81.6669 417.966 60.7096C405.607 18.6121 324.644 58.8584 407.866 139.267C491.089 219.676 560.556 183.046 584.887 154.68"
                stroke="url(#paint0_linear_47_1226)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_47_1226"
                  x1="316.059"
                  y1="15.364"
                  x2="257.203"
                  y2="175.617"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6C016B" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        )} */
}
