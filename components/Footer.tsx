import React from "react";
import { BsFillPhoneFill, BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot, FaTelegram } from "react-icons/fa6";
import Button from "./ui/Button";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { RiWhatsappFill } from "react-icons/ri";
import { GrTwitter } from "react-icons/gr";

export default function Footer() {
  return (
    <div className="relative overflow-hidden overflow-y-visible z-20 ">
      <span className="w-52 h-[350px] bg-[#9500861A] absolute bottom-40 rounded-[50%] right-0 -translate-y-1/2 translate-x-1/4 blur-[130px] " />
      <span className="w-52 h-[353px] bg-[#3600349C] absolute bottom-30 rounded-[50%] right-0 -translate-y-1/2 -translate-x-2/3 blur-[130px] " />
      <span className="w-52 h-[3503x] bg-[#5C009514] absolute bottom-30 rounded-[50%] right-32 -translate-y-1/2 -translate-x-full blur-[70px] " />
      <span className="w-52 h-[350px] bg-[#6E00951A] absolute bottom-30 rounded-[50%] left-1/2 -translate-y-1/2 translate-x-1/2 blur-[70px] " />
      <span className="w-52 h-[350px] bg-[#9500861A] absolute bottom-30 rounded-[50%] left-1/2 -translate-y-1/2 -translate-x-1/2 blur-[60px] " />
      <footer className="h-fit w-full pb-8 text-gray-800 dark:text-white pt-20 overflow-x-hidden overflow-y-visible">
        <div className="relative  grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-10 justify-items-center lg:justify-items content-center mx-4 sm:mx-8 lg:mx-16 xl:mx-32">
          <div className="col-span-2 space-y-6 ">
            <div className="text-6xl max-sm:text-center">لوگو شمـا</div>
            <p className="paragraph text-justify">
              گروه نرم افزاری دینا متشکل از جوانان متعهد و حرفه ای در صنعت نرم
              افزار و طراحی سیستم است که طی سالیان متوالی در امر تولید نرم افزار
              و اپلیکیشن ، طراحی و معماری سیستم های نرم افزاری و ارائه پشتیبانی
              های فنی به مشتریان خود فعالانه تلاش می کنند .
            </p>
          </div>

          <div className="flex flex-col gap-6 col-span-2">
            <div className="flex gap-2">
              <div className="bg-gray-300 dark:bg-white dark:bg-opacity-15 w-12 h-12 rounded-lg flex justify-center items-center">
                <BsFillPhoneFill className="text-3xl" />
              </div>
              <div>
                <p className="text-sm text-gray-600 ">شماره موبایل</p>
                <p className="paragraph">شماره موبایل شما</p>
              </div>
            </div>
            <ul className="flex flex-col gap-3">
              <li>
                <h2 className="text-3xl font-semibold">محصولات</h2>
              </li>
              <li>
                <p className="paragraph">سامانه Help Desk دینا</p>
              </li>
              <li>
                <p className="paragraph">نرم افزار چیدمان فروشگاهی</p>
              </li>
              <li>
                <p className="paragraph">تگ RFID - دینا تگ</p>
              </li>
              <li>
                <p className="paragraph">سامانه Help Desk دینا</p>
              </li>
              <li>
                <p className="paragraph">سامانه دینا سود</p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6 col-span-2">
            <div className="flex gap-2">
              <div className="bg-gray-300 dark:bg-white dark:bg-opacity-15 w-12 h-12 rounded-lg flex justify-center items-center">
                <BsFillTelephoneFill className="text-3xl" />
              </div>
              <div>
                <p className="text-sm text-gray-600 ">شماره تماس</p>
                <p className="paragraph">شماره تماس شما</p>
              </div>
            </div>
            <ul className="flex flex-col gap-3">
              <li>
                <h2 className="text-3xl font-semibold">دسترسی سریع</h2>
              </li>
              <li>
                <p className="paragraph">درباره ما</p>
              </li>
              <li>
                <p className="paragraph">تماس با ما</p>
              </li>
              <li>
                <p className="paragraph">پیوستن به ما</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 col-span-2">
            <div className="flex gap-2">
              <div className="bg-gray-300 dark:bg-white dark:bg-opacity-15 w-12 h-12 rounded-lg flex justify-center items-center">
                <FaLocationDot className="text-3xl" />
              </div>
              <div>
                <p className="text-sm text-gray-600 ">آدرس</p>
                <p className="paragraph">آدرس شما</p>
              </div>
            </div>
            <ul className="flex flex-col gap-3">
              <li>
                <h2 className="text-3xl font-semibold">ساعات کاری</h2>
              </li>
              <li>
                <p className="paragraph">تمامی روزهای هفته</p>
              </li>
              <li>
                <p className="paragraph">از ساعت ۸ تا ۱۸</p>
              </li>
              <li>
                <p className="paragraph">تعطیلات: تعطیلات رسمی</p>
              </li>
              <li>
                <Button href="/">
                  <p className="paragraph">جدیدترین ایتم</p>
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex justify-center md:justify-end md:pl-24 gap-4 mt-12 text-white dark:text-black ">
          <span className="w-10 h-10 rounded-full bg-gray-800 dark:bg-white flex justify-center items-center">
            <BiLogoInstagramAlt className="text-3xl" />
          </span>
          <span className="w-10 h-10 rounded-full bg-gray-800 dark:bg-white flex justify-center items-center">
            <TbBrandLinkedinFilled className="text-3xl" />
          </span>
          <span className="w-10 h-10 rounded-full bg-gray-800 dark:bg-white flex justify-center items-center">
            <RiWhatsappFill className="text-3xl" />
          </span>
          <span className="w-10 h-10 rounded-full bg-gray-800 dark:bg-white flex justify-center items-center">
            <FaTelegram className="text-3xl" />
          </span>
          <span className="w-10 h-10 rounded-full bg-gray-800 dark:bg-white flex justify-center items-center">
            <GrTwitter className="text-3xl" />
          </span>
        </div>
        <div className="w-full text-center space-y-8 mt-20">
          <p className="paragraph">
            تمام حقوق مادی و معنوی متعلق به شرکت دینا می باشد. ©
          </p>

          <div className="w-full mx-auto flex justify-center gap-20 opacity-50">
            <p className="paragraph ">حریم خصوصی</p>
            <p className="paragraph">شرایط و ضوابط</p>
          </div>
        </div>

        <span className="w-52 h-[350px] bg-[#9500861A] absolute bottom-32 max-sm:bottom-1/4 left-0 -translate-x-1/4 rounded-[50%] blur-[60px] " />
        <span className="w-52 h-[350px] bg-[#6E00951A] absolute bottom-36 left-0 translate-x-1/2 rounded-[50%] blur-[60px] " />
        <span className="w-52 h-[350px] bg-[#5C009514] absolute bottom-36 right-2/3 -translate-x-1/3 rounded-[50%] blur-[60px] " />
        <span className="w-52 h-[350px] bg-[#3600349C] absolute bottom-36 right-1/2 max-sm:translate-x-1/2 max-sm:-translate-y-3/4 -translate-x-1/3 rounded-[50%] blur-[120px] " />
        <span className="w-52 h-[350px] bg-[#3600349C] absolute bottom-36 right-1/2 translate-x-1/2 rounded-[50%] blur-[100px] " />
      </footer>
    </div>
  );
}
