"use client";
import React from "react";
import SevicesCard from "../SevicesCard";
import { MdDeveloperBoard, MdOutlineWarehouse } from "react-icons/md";
import { TbShoppingCartCode } from "react-icons/tb";
import { GrOptimize, GrUpdate } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import FadeDown from "../animation/FadeDown";
const items = [
  {
    icon: <MdDeveloperBoard />,
    header: "توسعه ی نرم افزار از مشاوره تا اجرا ",
    description:
      "ما عاشق برنامه‌نویسی هستیم! از نرم‌افزارهای هلپ دسک که به تیم‌های شما کمک می‌کنند، تا سیستم‌های انبارداری که کارها را ساده‌تر و سریع‌تر می‌کنند، ما همه چیز را تحت پوشش داریم.",
  },
  {
    icon: <TbShoppingCartCode />,
    header: "سامانه های فروشگاهی هوشمند",
    description:
      "اگر نیاز به فروشگاهی دارید که به اندازه مغازه‌های واقعی جذاب و کاربردی باشد، ما بهترین راه‌حل‌ها را داریم. با طراحی سامانه‌های فروشگاهی سفارشی، کسب‌وکار شما همیشه در اوج خواهد بود.",
  },
  {
    icon: <MdOutlineWarehouse />,
    header: "هوشمند سازی و رصد اموال و کالاها",
    description:
      "سامانه Dina Tag با استفاده از فناوری RFID امکان ردیابی و مدیریت آنلاین اموال و موجودی‌های انبار را فراهم می‌کند. این سامانه برای انواع سازمان‌ها از جمله کارخانجات و بیمارستان‌ها مناسب است.",
  },
  {
    icon: <GrOptimize />,
    header: "بهینه سازی سئو و افزایش رتبه وبسایت",
    description:
      "با بهینه‌سازی دقیق سئو، به شما کمک می‌کنیم تا در موتورهای جستجو بهتر دیده شوید و ترافیک وبسایت‌تان را به طور قابل توجهی افزایش دهید. این فرآیند شامل بهینه‌سازی محتوا، استفاده از کلمات کلیدی مناسب و بهبود ساختار وبسایت می‌باشد.",
  },
  {
    icon: <GrUpdate />,
    header: "به روزرسانی و پشتیبانی مستمر",
    description:
      "در دنیای فناوری ، تغییرات سریع هستند. ما با به‌روزرسانی‌ های مستمر نرم‌افزار ها و سامانه‌های شما، کمک می‌کنیم تا همیشه یک قدم جلوتر باشید. این شامل بهبود امنیت، افزودن ویژگی‌های جدید و اصلاح اشکالات موجود می‌باشد تا کارایی و کاربرپسندی سیستم‌های شما حفظ شود.",
  },
  {
    icon: <CgWebsite />,
    header: "تخصص و خلاقیت در تولید و اجرا",
    description:
      "طراحی و توسعه وبسایت‌های کاربرپسند و جذاب، تخصص ماست. ما با بهره‌گیری از جدیدترین فناوری‌ها، وبسایت‌هایی با عملکرد بی‌نظیر برای شما خلق می‌کنیم. همچنین، ما با توجه به نیازها و اهداف شما، وبسایت‌هایی سفارشی و منحصر به فرد ارائه می‌دهیم که تجربه کاربری فوق‌العاده‌ای را به کاربران‌تان ارائه می‌کند.",
  },
];
const variants = {
  hidden: { opacity: 0, transform: "rotateY(100deg) scale(1.1)" },
  visible: (custom: number) => ({
    opacity: 1,
    transform: "rotateY(0deg) scale(1)",
    transition: {
      delay: custom * 0.2,
      duration: 0.5,
      ease: "linear",
    },
  }),
};

export default function Services() {
  return (
    <div className="relative w-full">
      <section className="pt-14 pb-20 container mx-auto overflow-hidden w-full text-primary-900 dark:text-white">
        <FadeDown>
          <h2 className="heading-2 mt-10 text-center">
            ما چه کارهایی انجام میدهیم؟
          </h2>
        </FadeDown>

        <div className="relative ">
          <div className="mx-auto sm:mx-16 w-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-md:gap-x-20 md:gap-12 mt-20 max-sm:w-full justify-items-center">
            {items.map((item, i) => (
              <SevicesCard
                custom={i}
                variants={variants}
                key={i}
                header={item.header}
                icon={item.icon}
                description={item.description}
              />
            ))}
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
      <div className="z-1 opacity-[0.5]">
        <div className="max-lg:hidden w-[700px] h-[700px] bg-[#6C016B1F] rounded-full absolute top-1/2 -translate-x-1/2 left-0 -translate-y-1/2" />
        <div className="w-[500px] h-[500px] bg-[#6C016B3B] absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full" />
        <div className="w-[230px] h-[230px] bg-[#6C016B] bg-opacity-50 absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full"></div>
      </div>
    </div>
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
