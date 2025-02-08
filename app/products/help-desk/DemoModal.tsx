"use client";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { GrFormClose } from "react-icons/gr";
import { BgShape4 } from "@/components/BgSahpes";
import Image from "next/image";
import Form from "./Form";
import { useState } from "react";
import Success from "@/public/success.svg";
import Error from "@/public/error.svg";
import clsx from "clsx";
const flip = {
  hidden: {
    transform: "scale(0)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1)",
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
  exit: {
    transform: "scale(0)",
    opacity: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const DemoModal = ({
  handleClose,
  text,
}: {
  handleClose: () => void;
  text: string;
}) => {
  const [status, setStatus] = useState<"normal" | "error" | "success">(
    "normal"
  );
  return (
    <Backdrop onClick={handleClose}>
      <div
        dir="ltr"
        className="fixed z-50 w-screen h-screen backdrop-blur-3xl top-0 pt-10 px-[5vw] overflow-y-scroll overflow-x-hidden"
      >
        <motion.div
          dir="rtl"
          onClick={(e) => e.stopPropagation()}
          className={clsx(
            "h-fit overflow-hidden mb-8 bg-white dark:bg-productsBg py-8 text-black dark:text-white rounded-md",
            status !== "normal" ? "w-fit mx-auto" : "w-[90vw]"
          )}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={flip}
        >
          <div className="relative w-full h-full p-4">
            <button
              className="bg-primary-300 relative z-20 text-white dark:bg-white dark:text-productsBg  w-10 h-10 flex justify-center items-center rounded-full"
              onClick={handleClose}
            >
              <GrFormClose className="text-3xl font-black" />
            </button>
            {status === "normal" && (
              <div className="relative w-full mt-4 mb-10 z-20 flex flex-col sm:flex-row justify-between items-center mx-8 gap-20 max-sm:mx-0">
                <div className="basis-full sm:basis-2/3">
                  <Form changeStatus={setStatus} />
                </div>
                <div className="basis-full sm:basis-1/3 flex flex-col justify-center items-start gap-3">
                  <div className="space-y-2 mb-2 max-sm:mx-auto">
                    <h2 className="text-xl font-semibold max-sm:text-center">
                      سفارش شما
                    </h2>
                    <div className="w-80 h-[0.5px] dark:bg-white bg-black-100 bg-opacity-40 dark:bg-opacity-40 rounded-full"></div>
                  </div>
                  <div className="w-72 h-72 rounded-md relative overflow-hidden max-sm:mx-auto">
                    <Image
                      alt="pruduct"
                      className="object-cover object-center"
                      src="/products-m.png"
                      fill
                    />
                  </div>
                  <p className="paragraph  max-sm:mx-auto">
                    سامانه هوشمند هلپ دسک
                  </p>
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="relative w-full mt-4 mb-10 z-20 flex flex-col justify-center items-center gap-10">
                <div className="w-72 h-72 relative sm:w-80 sm:h-80 overflow-hidden rounded-full shadow-error-red bg-white flex justify-center items-center ">
                  <Image
                    src={Error}
                    alt="error"
                    width={185}
                    height={200}
                    className="object-cover"
                  />
                </div>
                <h2 className="text-center text-green-light-300 text-2xl sm:text-4xl font-bold ">
                  متاسفانه سفارش شما ثبت نشد!
                </h2>
                <p className="text-center text-xl sm:text-3xl font-normal">
                  لطفا دوباره تلاش کنید ،اگر بازهم با مشکل مواجه شدید با{" "}
                  <span className="text-primary-300 font-medium">پشتیبانی</span>{" "}
                  تماس بگیرید
                </p>
              </div>
            )}
            {status === "success" && (
              <div className="relative w-full mt-4 mb-10 z-20 flex flex-col justify-center items-center gap-10">
                <div className="w-72 h-72 sm:w-80 sm:h-80 overflow-hidden rounded-full shadow-success-green bg-white flex justify-center items-center ">
                  <Image
                    src={Success}
                    alt="success"
                    width={240}
                    height={233}
                    className="object-cover"
                  />
                </div>
                <h2 className="text-center text-green-light-300 text-2xl sm:text-4xl font-bold ">
                  سفارش شما با موفقیت ثبت شد!
                </h2>
                <p className="text-center text-xl sm:text-3xl font-normal">
                  تیم پشتیبانی به زودی با شما تماس خواهد گرفت.
                </p>
              </div>
            )}
            {/* <div className="w-fit mx-auto relative z-2">
              <button
                type="submit"
                className="bg-primary-300 font-bold text-lg px-9 py-3 rounded-full text-white"
              >
                ثبت سفارش
              </button>
            </div> */}
            <BgShape4 />
          </div>
        </motion.div>
      </div>
    </Backdrop>
  );
};

export default DemoModal;
