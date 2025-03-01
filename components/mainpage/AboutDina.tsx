"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function AboutDina() {
  return (
    <section className="dark:bg-primary-700 relative shadow-custom text-gray-800 dark:text-white bg-bgInnerLight margin-1 py-4 pe-4 ps-4 lg:ps-8  rounded-[32px] flex flex-col lg:flex-row mb-10 items-center gap-8 md:gap-12 z-10 min-h-[calc(100svh-100px)]  ">
      <div className="space-y-6 pb-4 basis-1/2 h-full  ">
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className="w-full space-y-2"
        >
          <h3 className="heading-4">درباره مجموعه دینا</h3>
          <h2 className="heading-3">
            ارزش‌های ما و آنچه در مسیرمان طی کرده‌ایم
          </h2>
          <p className="paragraph">
            در شرکت نرم‌افزاری داده‌کاوان دینا، تیم تخصصی و پرشور ما، عاشق
            فناوری و برنامه‌نویسی است. با تعهد و دقت، نرم‌افزارهای کاربردی و
            نوآورانه‌ای تولید می‌کنیم که نیازهای مدیریتی شما را برطرف می‌کنند.
            ما همچنین با ارائه مشاوره‌های تخصصی و طراحی‌های منحصر به فرد، در
            کنار شما هستیم تا بهترین راه‌حل‌ها را برای کسب‌وکار شما فراهم کنیم.
          </p>
          <p className="paragraph">
            یکی از نقاط قوت ما تولید سامانه‌های هلپ دسک و مدیریت اموال است.
            نرم‌افزار Help Desk دینا با هدف بهبود فرآیندهای پشتیبانی و مدیریت
            دارایی‌ها طراحی شده است. این نرم‌افزار به شما کمک می‌کند تا به
            بهترین شکل ممکن دارایی‌ها و تجهیزات سازمان خود را مدیریت کرده و
            هزینه‌های مرتبط با تعمیر و نگهداری را کاهش دهید.
          </p>
          <p className="paragraph text-center">
            با داده‌کاوان دینا، همیشه یک قدم جلوتر خواهید بود و می‌توانید با
            اطمینان به آینده نگاه کنید.
          </p>
        </motion.div>
        <div className="w-40 h-40 relative justify-self-end">
          <Image
            src={"/mainpage/sign.png"}
            alt="sign image"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="relative basis-1/2 flex justify-center items-center gap-4 ">
        <div className="w-72 sm:w-96 lg:w-104 xl:w-114 h-auto aspect-square justify-center flex items-center z-30 relative mx-auto">
          {/* <Image
            src="/mainPage/about-dina-2.svg"
            width={700}
            height={700}
            className="object-cover object-center"
            alt="about-dina"
          /> */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ amount: 0.5 }}
            className="absolute inset-0 z-30"
          >
            <Image
              src={"/mainPage/svg/about/character.svg"}
              width={500}
              height={500}
              alt="monitor"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ amount: 0.5 }}
            className="absolute inset-0 z-30"
          >
            <Image
              src={"/mainPage/svg/about/bg.svg"}
              width={500}
              height={500}
              alt="monitor"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -200, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ amount: 0.5 }}
            className="absolute inset-0 z-30"
          >
            <Image
              src={"/mainPage/svg/about/city.svg"}
              width={500}
              height={500}
              alt="monitor"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 1.5, x: 0, y: 60 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.5 }}
            className="absolute inset-0 z-30 "
          >
            <Image
              src={"/mainPage/svg/about/lamp.svg"}
              width={500}
              height={500}
              alt="lamp"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 0, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ amount: 0.5 }}
            className="absolute inset-0 z-30 "
          >
            <Image
              src={"/mainPage/svg/about/plant.svg"}
              width={500}
              height={500}
              alt="lamp"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
