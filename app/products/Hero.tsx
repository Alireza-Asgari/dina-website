"use client";
import ArrowY from "@/components/animation/ArrowY";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // زمانی که صفحه بارگذاری شد، مقدار state به true تغییر می‌کند
    setIsLoaded(true);
  }, []);
  return (
    <section className="w-full min-h-screen h-full relative flex flex-col justify-center items-center overflow-x-clip text-gray-800 dark:text-white pb-20">
      <svg
        width="489"
        height="671"
        viewBox="0 0 489 671"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 right-0 "
      >
        <path
          d="M31.0059 -22.9855L664.778 -12.2964C686.754 -11.9258 700.885 11.171 691.209 30.9059L386.242 652.932C378.375 668.977 358.314 674.63 343.228 665.053L14.4225 456.338C5.75256 450.834 0.5 441.279 0.5 431.009V7.01024C0.5 -9.75623 14.2418 -23.2682 31.0059 -22.9855Z"
          className="fill-primary-350 dark:fill-[url(#paint1_linear_37_790)]"
          fillOpacity="0.17"
          stroke="url(#paint1_linear_37_790)"
          strokeOpacity="0.33"
        />
        <defs>
          <linearGradient
            id="paint0_linear_37_790"
            x1="354"
            y1="165"
            x2="90.4395"
            y2="573.74"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EEEEEE" stopOpacity="0.69" />
            <stop offset="1" stopColor="#969696" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_37_790"
            x1="60.5"
            y1="486.5"
            x2="342"
            y2="165"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.53" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        width="409"
        height="327"
        viewBox="0 0 409 327"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 bottom-0 md:top-1/2 md:-translate-y-1/2 "
      >
        <path
          d="M-129 21L318.504 0.185843C367.516 -2.09379 408.5 37.0279 408.5 86.093V240.5C408.5 287.996 369.996 326.5 322.5 326.5H-117.5L-129 21Z"
          fill="url(#paint0_linear_37_763)"
          fillOpacity="0.4"
        />
        <path
          d="M-117.018 326L-128.482 21.4764L318.528 0.685304C367.255 -1.58108 408 37.3132 408 86.093V240.5C408 287.72 369.72 326 322.5 326H-117.018Z"
          stroke="url(#paint1_linear_37_763)"
          strokeOpacity="0.33"
        />
        <defs>
          <linearGradient
            id="paint0_linear_37_763"
            x1="354.876"
            y1="74.3898"
            x2="32.9922"
            y2="196.188"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1D1D28" />
            <stop offset="1" stopColor="#090914" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_37_763"
            x1="151.5"
            y1="21"
            x2="151.5"
            y2="381"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.53" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="w-fit relative mx-4 sm:mx-8 mt-10 flex justify-between gap-4 items-center flex-col lg:flex-row ">
        <div className="w-full lg:w-4/12 max-sm:flex-wrap relative z-10 flex flex-col sm:flex-row  lg:flex-col lg:mt-20 ">
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            // animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
          >
            <div className="mx-auto w-80 h-52 sm:w-96 sm:h-56  relative">
              <Image
                src={"/products/passport.png"}
                alt="a product picture"
                width={500}
                height={400}
                className="object-center object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            // animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
          >
            <div className="mx-auto w-80 h-52 sm:w-96 sm:h-56 relative translate-x-0 translate-y-0 xl:-translate-x-1/2 xl:translate-y-4 ">
              <Image
                src={"/products/product2.png"}
                alt="a product picture"
                width={500}
                height={400}
                sizes="100%"
                className="object-cover object-center rounded-md"
              />
            </div>
          </motion.div>
        </div>
        <div className="max-lg:mx-auto max-lg:p-4 lg:w-4/12 text-center relative z-10 space-y-6 order-first lg:order-none mt-20 lg:mt-0">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            محصولات ما
          </h1>
          <p className="paragraph text-gray-800 dark:text-gray-300">
            مفتخریم که تعدادی از استادانه ترین پروژه های اجرا شده با استفاده از
            آخرین فناوری های توسعه وب و جدیدترین گرایش های طراجی وب را به شما
            معرفی کنیم:
          </p>
        </div>
        <div className="w-full relative lg:w-4/12 h-full z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}

            // animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
          >
            <div className="mx-auto w-80 h-52 sm:w-96 sm:h-56  xl:w-[400px] xl:h-64 relative">
              <Image
                src={"/products/product1.png"}
                alt="a product picture"
                width={600}
                height={500}
                className="object-cover object-center rounded-md"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute w-full bottom-4 left-0 right-0 flex justify-center ">
        <h3 className="lg:text-6xl text-xl xl:tracking-[30px] lg:tracking-[20px] sm:tracking-[15px] tracking-[5px] text-border-dark text-border-light mt-5 font-semibold ">
          Dina software company
        </h3>
        <ArrowY />
      </div>
      <div className="h-[650px] w-[550px] sm:h-[761px] sm:w-[676px bg-[#95008633] rounded-[50%] absolute blur-[100px] -bottom-2/3 -right-1/2"></div>
      <div className="h-[650px] w-[550px] sm:h-[761px] sm:w-[676px bg-[#95008633] rounded-[50%] absolute -top-1/4 left-2/3 blur-[100px] max-sm:-translate-x-1/4"></div>
      <div className="w-[325px] h-[663px] bg-[#B1007C12] rounded-[50%] absolute left-[60%] top-1/3 blur-[100px]"></div>
      <div className="w-[325px] h-[663px] bg-[#5C009514] rounded-[50%] absolute left-[50%] top-1/3 -translate-x-1/2 blur-[150px]"></div>
      <div className="w-[325px] h-[663px] bg-[#6E00951A] rounded-[50%] absolute left-1/4  -translate-x-1/2 top-1/3 blur-[100px] "></div>
      <div className="w-[325px] h-[662px] bg-[#8505DB1A] rounded-[50%] absolute left-0 top-1/3 blur-[100px]"></div>
      <div className="w-[840px] h-[820px] rounded-[50%] bg-custom-gradient absolute top-0 left-0 -translate-x-1/3 blur-[100px]"></div>
    </section>
  );
}
