import Link from "next/link";
import Svg from "../public/not-found.svg";
import Ball from "../public/ball.svg";
import Image from "next/image";
export default function NotFound() {
  return (
    <div className="w-screen relative overflow-x-hidden min-h-screen pt-32 pb-20 bg-white dark:bg-primary-950 text-black flex flex-col justify-center items-center dark:text-white gap-8">
      <div className="container rea mx-auto relative z-20 flex flex-col justify-center items-center gap-4">
        <h2 className="heading-2 text-center ">این صفحه در دسترس نیست !</h2>
        <p className="paragraph text-center max-w-md ">
          به نظر می رسد این صفحه وجود ندارد. سعی کنید به عقب برگردید یا روی دکمه
          زیر کلیک کنید و ما شما را به خانه می بریم.
        </p>
        <Link
          href="/"
          className="bg-primary-300 whitespace-nowrap px-8 sm:px-12 py-4 rounded-full text-lg font-medium text-white"
        >
          بازگشت به سایت
        </Link>
      </div>
      <div>
        <Image priority src={Svg} alt="404" />
      </div>
      <div>
        <div className="absolute left-10 bottom-20 lg:top-2/3 lg:left-40">
          <Image priority src={Ball} alt="ball icon" />
        </div>
        <div className="absolute right-10 top-1/2 lg:right-64">
          <Image priority src={Ball} alt="ball icon" />
        </div>
        <div className="absolute right-20 top-1/3 scale-50 lg:right-32">
          <Image priority src={Ball} alt="ball icon" />
        </div>
        <div className="absolute right-20 bottom-20 scale-50 lg:hidden">
          <Image priority src={Ball} alt="ball icon" />
        </div>
        <div className="absolute hidden scale-50 lg:block lg:left-60 top-1/2">
          <Image priority src={Ball} alt="ball icon" />
        </div>
        <div className="absolute left-20 top-1/4 scale-50 lg:top-1/3 lg:left-28">
          <Image priority src={Ball} alt="ball icon" />
        </div>
      </div>
    </div>
  );
}
