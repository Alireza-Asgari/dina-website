"use client";
import React from "react";
import { LuMonitorCog } from "react-icons/lu";
import SevicesCard from "../SevicesCard";
import { motion } from "framer-motion";
const items = [
  {
    icon: <LuMonitorCog />,
    header: "خدمات لورم ایپسوم",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی ",
  },
  {
    icon: <LuMonitorCog />,
    header: "خدمات لورم ایپسوم",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی ",
  },
  {
    icon: <LuMonitorCog />,
    header: "خدمات لورم ایپسوم",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی ",
  },
  {
    icon: <LuMonitorCog />,
    header: "خدمات لورم ایپسوم",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی ",
  },
  {
    icon: <LuMonitorCog />,
    header: "خدمات لورم ایپسوم",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی ",
  },
  {
    icon: <LuMonitorCog />,
    header: "خدمات لورم ایپسوم",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی ",
  },
];
export default function Services() {
  return (
    <section className="pt-14 pb-20 relative overflow-hidden w-full text-primary-900 dark:text-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h2 className="heading-2">ما چه کارهایی انجام میدهیم؟</h2>
      </motion.div>

      <div className="relative ">
        <motion.div
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
            hidden: {},
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          className="mx-auto sm:mx-16 w-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-20 max-sm:w-full justify-items-center"
        >
          {items.map((item, i) => (
            <SevicesCard
              key={i}
              header={item.header}
              icon={item.icon}
              description={item.description}
            />
          ))}
        </motion.div>

        <div className="z-1 opacity-[0.5]">
          <div className="max-lg:hidden w-[700px] h-[700px] bg-[#6C016B1F] absolute left-0 top-0 -translate-x-1/2 rounded-full" />
          <div className="w-[500px] h-[500px] bg-[#6C016B3B] absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full" />
          <div className="w-[230px] h-[230px] bg-[#6C016B] bg-opacity-50 absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full"></div>
        </div>
      </div>
      <div>
        <div className="w-48 h-44 bg-[#9500861A] blur-[40px] rounded-[50%] absolute top-16 right-8" />
        <div className="w-48 h-44 bg-[#B1007C12] blur-[40px] rounded-[50%] absolute top-16 right-16 -translate-x-full" />
        <div className="w-48 h-44 bg-[#5C009514] blur-[40px] rounded-[50%] absolute top-16 right-1/3 " />
        <div className="w-48 h-44 bg-[#6E00951A] blur-[40px] rounded-[50%] absolute top-16 right-1/2 translate-x-1/2 " />
        <div className="w-48 h-44 bg-[#8505DB1A] blur-[40px] rounded-[50%] absolute top-16 right-1/2" />
      </div>
    </section>
  );
}

{
  /* <div className="relative w-72 xl:w-80 xl:h-80 z-10 bg-white-300 dark:bg-gray-800 p-6 rounded-e-[19px] space-y-6 transition-all hover:border-s-4 hover:scale-110 hover:border-primary-200 dark:hover:border-primary-300 border border-transparent group ">
            <LuMonitorCog className="text-5xl" />
            <h3
              className="text-xl font-semibold group-hover:font-bold
            group-hover:bg-clip-text  group-hover:text-transparent group-hover:bg-gradient-to-r  group-hover:from-[#ff4d42] group-hover:to-primary-300"
            >
              خدمات لورم ایپسوم
            </h3>
            <p className="text-lg text-gray-500 dark:text-white-400">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی
            </p>
            <div className="absolute bottom-0 translate-x-1/2 translate-y-1/2 right-0 w-4 h-4 bg-primary-200 rounded-full group-hover:scale-[2] transition-all" />
          </div>
          <div className="relative w-72 xl:w-80 xl:h-80 z-10 bg-white-300 dark:bg-gray-800 p-6 rounded-e-[19px] space-y-6 transition-all hover:border-s-4 hover:scale-110 hover:border-primary-200 dark:hover:border-primary-300 border border-transparent group ">
            <LuMonitorCog className="text-5xl" />
            <h3 className="text-xl ">خدمات لورم ایپسوم</h3>
            <p className="text-lg text-gray-500 dark:text-white-400">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی
            </p>
            <div className="absolute bottom-0 translate-x-1/2 translate-y-1/2 right-0 w-4 h-4 bg-primary-200 rounded-full group-hover:scale-[2] transition-all" />
          </div>
          <div className="relative w-72 xl:w-80 xl:h-80 z-10 bg-white-300 dark:bg-gray-800 p-6 rounded-e-[19px] space-y-6 transition-all hover:border-s-4 hover:scale-110 hover:border-primary-200 dark:hover:border-primary-300 border border-transparent group ">
            <LuMonitorCog className="text-5xl" />
            <h3 className="text-xl ">خدمات لورم ایپسوم</h3>
            <p className="text-lg text-gray-500 dark:text-white-400">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی
            </p>
            <div className="absolute bottom-0 translate-x-1/2 translate-y-1/2 right-0 w-4 h-4 bg-primary-200 rounded-full group-hover:scale-[2] transition-all" />
          </div>
          <div className="relative w-72 xl:w-80 xl:h-80 z-10 bg-white-300 dark:bg-gray-800 p-6 rounded-e-[19px] space-y-6 transition-all hover:border-s-4 hover:scale-110 hover:border-primary-200 dark:hover:border-primary-300 border border-transparent group ">
            <LuMonitorCog className="text-5xl" />
            <h3 className="text-xl ">خدمات لورم ایپسوم</h3>
            <p className="text-lg text-gray-500 dark:text-white-400">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی
            </p>
            <div className="absolute bottom-0 translate-x-1/2 translate-y-1/2 right-0 w-4 h-4 bg-primary-200 rounded-full group-hover:scale-[2] transition-all" />
          </div>
          <div className="relative w-72 xl:w-80 xl:h-80 z-10 bg-white-300 dark:bg-gray-800 p-6 rounded-e-[19px] space-y-6 transition-all hover:border-s-4 hover:scale-110 hover:border-primary-200 dark:hover:border-primary-300 border border-transparent group ">
            <LuMonitorCog className="text-5xl" />
            <h3 className="text-xl ">خدمات لورم ایپسوم</h3>
            <p className="text-lg text-gray-500 dark:text-white-400">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی
            </p>
            <div className="absolute bottom-0 translate-x-1/2 translate-y-1/2 right-0 w-4 h-4 bg-primary-200 rounded-full group-hover:scale-[2] transition-all" />
          </div>
          <div className="relative w-72 xl:w-80 xl:h-80 z-10 bg-white-300 dark:bg-gray-800 p-6 rounded-e-[19px] space-y-6 transition-all hover:border-s-4 hover:scale-110 hover:border-primary-200 dark:hover:border-primary-300 border border-transparent group ">
            <LuMonitorCog className="text-5xl" />
            <h3 className="text-xl ">خدمات لورم ایپسوم</h3>
            <p className="text-lg text-gray-500 dark:text-white-400">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی
            </p>
            <div className="absolute bottom-0 translate-x-1/2 translate-y-1/2 right-0 w-4 h-4 bg-primary-200 rounded-full group-hover:scale-[2] transition-all" />
          </div> */
}
