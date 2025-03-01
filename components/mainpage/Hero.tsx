"use client";
import React, { lazy, Suspense } from "react";
import ZoomSides from "../animation/ZoomX";
import ArrowY from "../animation/ArrowY";
import Swinging from "../animation/Swinging";
import Image from "next/image";
// import Swinging from "../animation/Swinging";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <div className="w-full h-screen relative py-4">
      <section className="container p-4 lg:p-8 h-full mx-auto flex flex-col justify-center items-center overflow-x-clip text-gray-800 dark:text-white">
        <div className="flex flex-col lg:flex-row mx-auto lg:mx-20 w-full justify-between relative overflow-y-visible ">
          <ZoomSides
            xValue={"100%"}
            animate={true}
            className="max-lg:basis-full mx-auto lg:basis-1/2 max-lg:text-center space-y-6 relative"
          >
            <h2 className="font-semibold 2xl:text-6xl lg:text-4xl sm:text-4xl text-3xl lg:leading-[95px] leading-10">
              پیشرو در
              <span className="font-bold">تخصص</span> و خلاقیت
            </h2>
            <h3 className="heading-3 lg:mt-2">
              حس خوب یک همکاری مثبت و پایداری را باما تجربه کنید
            </h3>
            <p className="paragraph mt-3 max-w-lg mx-auto lg:mx-0">
              با محصولات دینا، اموال و دارایی‌های سازمان خود را به‌صورت آنلاین و
              لحظه‌ای مدیریت کنید. بهره‌وری را افزایش دهید و با نظارت دقیق،
              هزینه‌ها را کاهش دهید!
            </p>
            <button className="relative inline-flex h-12 mt-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="font-medium lg:text-lg text-base inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white-200 dark:bg-primary-900 px-3 py-1 dark:text-white text-gray-800 backdrop-blur-3xl">
                از دینا بیشتر بدانید
              </span>
            </button>
          </ZoomSides>
          {/* <div className="z-30 cursor-auto relative pointer-events-auto flex justify-center items-center">
            <Suspense fallback={<p>Loading...</p>}>
              <MyComponent />
            </Suspense>
          </div> */}
          {/* <div className="flex z-30 max-sm:my-10 relative justify-center items-center mb-8 lg:mb-0 lg:ml-8 gap-0">
            <Swinging
              order={2}
              className="relative z-30 w-64 sm:w-96 lg:w-[500px] h-72 lg:h-[500px] sm:h-96"
            >
              <Image
                src="/mainPage/hero-2.png"
                fill
                className="object-contain"
                alt="hero image"
              />
            </Swinging>
            <Swinging
              order={1}
              className="z-30 relative w-64 sm:w-96 h-72 sm:h-96 lg:w-[500px] lg:h-[500px]"
            >
              <Image
                src="/mainPage/hero-1.png"
                fill
                className="object-contain"
                alt="hero image"
              />
            </Swinging>
          </div> */}
          {/* <div className="flex flex-col z-30 max-sm:my-10 relative justify-center items-center mb-8 lg:mb-0 lg:ml-8 gap-0">
            <div className="relative flex w-full h-full ">
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: "-40%", scale: 1.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative"
              >
                <Image
                  src="/mainPage/case.svg"
                  width={700}
                  height={700}
                  className="object-cover"
                  alt="hero image"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: "40%", scale: 1.3 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className=""
              >
                <Image
                  src="/mainPage/monitor.svg"
                  width={700}
                  height={700}
                  className="object-contain"
                  alt="hero image"
                />
              </motion.div>
            </div>
            <div className="absolute">
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, y: -30, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=""
              >
                <Image
                  src="/mainPage/keyboard.svg"
                  width={700}
                  height={300}
                  className="object-contain"
                  alt="hero image"
                />
              </motion.div>
            </div>
          </div> */}
          <div className="w-72 sm:w-96 mx-auto lg:basis-1/2 flex z-30 my-10 relative justify-center items-center mb-40">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 z-30"
            >
              <Image
                src={"/mainPage/svg/case.svg"}
                width={500}
                height={500}
                alt="monitor"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute inset-0 z-30"
            >
              {/* <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    dir="ltr"
                    className="bg-black absolute inset-0 !-translate-x-[114px] w-[280px] top-11 h-[150px] p-2"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </motion.div> */}
              <Image
                src={"/mainPage/svg/monitor.svg"}
                width={500}
                height={500}
                alt="monitor"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute inset-0 z-30 origin-center"
            >
              <Image
                src={"/mainPage/svg/palnet.svg"}
                width={500}
                height={500}
                alt="monitor"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="absolute inset-0 max-sm:top-7 max-sm:-left-4 z-20 "
            >
              <Image
                src={"/mainPage/svg/pad.svg"}
                width={600}
                height={500}
                alt="monitor"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute inset-0 z-20"
            >
              <Image
                src={"/mainPage/svg/mouse.svg"}
                width={500}
                height={500}
                alt="mouse"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute inset-0 -top-2 z-20"
            >
              <Image
                src={"/mainPage/svg/keyboard.svg"}
                width={500}
                height={500}
                alt="monitor"
              />
            </motion.div>

            {/* <div className="absolute">
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, y: -30, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=""
              >
                <Image
                  src="/mainPage/keyboard.svg"
                  width={700}
                  height={300}
                  className="object-contain"
                  alt="hero image"
                />
              </motion.div>
            </div> */}
          </div>
        </div>
        <div className="absolute w-full bottom-0 left-0 right-0 flex justify-center ">
          <h3 className="lg:text-6xl text-xl xl:tracking-[30px] lg:tracking-[20px] sm:tracking-[15px] tracking-[5px] text-border-dark text-border-light mt-5 font-semibold ">
            Dina software company
          </h3>
        </div>
        <ArrowY />
        <div className="h-[650px] w-[550px] sm:h-[761px] sm:w-[676px bg-[#95008633] rounded-[50%] absolute blur-[100px] -bottom-2/3 -right-1/2"></div>
        <div className="h-[650px] w-[550px] sm:h-[761px] sm:w-[676px bg-[#95008633] rounded-[50%] absolute -top-1/4 left-2/3 blur-[100px] max-sm:-translate-x-1/4"></div>
        <div className="w-[325px] h-[663px] bg-[#B1007C12] rounded-[50%] absolute left-[60%] top-1/3 blur-[100px]"></div>
        <div className="w-[325px] h-[663px] bg-[#5C009514] rounded-[50%] absolute left-[50%] top-1/3 -translate-x-1/2 blur-[100px]"></div>
        <div className="w-[625px] h-[463px] bg-[#5C0095] bg-opacity-20 rounded-[50%] absolute left-0 translate-x-1/3 top-1/4 blur-[50px]"></div>
        <div className="w-[325px] h-[663px] bg-[#6E00951A] rounded-[50%] absolute left-1/4  -translate-x-1/2 top-1/3 blur-[100px] "></div>
        <div className="w-[325px] h-[662px] bg-[#8505DB1A] rounded-[50%] absolute left-0 top-1/3 blur-[100px]"></div>
        <div className="w-[840px] h-[820px] rounded-[50%] bg-custom-gradient absolute top-0 left-0 -translate-x-1/3 blur-[100px]"></div>
      </section>
    </div>
  );
}
