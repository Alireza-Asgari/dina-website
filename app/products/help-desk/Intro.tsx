"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { IoArrowRedoSharp, IoEye } from "react-icons/io5";
import DemoModal from "./DemoModal";
import { FaRegCopy } from "react-icons/fa6";
import CopyButton from "@/components/CopyButton";

export default function Intro() {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  return (
    <div className="">
      <section className="relative text-gray-800 dark:text-white">
        <div className="relative max-w-[1700px] w-screen h-[664px] mx-auto z-10">
          <Image
            src="/products/product.png"
            alt="help-desk"
            fill
            className="object-center w-full object-cover"
          />
        </div>
        <div className="absolute z-20 bottom-1/3 lg:bottom-20 right-1/2 max-md:translate-x-1/2 md:right-20 max-w-[90vw] min-w-[320px]:max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl w-full ">
          <div className="relative w-full h-full space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">سامانه هلپ دسک</h1>
            <h2 className="tex-xl lg:text-2xl font-semibold">
              لورم اپیسون متن ساختگی با تولید سادگی
            </h2>
            <p className="paragraph opacity-65">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
          </div>
        </div>
        <div className="absolute left-1/2 max-sm:-translate-x-1/2 sm:left-20 bottom-0 flex gap-4 real translate-y-1/2 z-20">
          <motion.button
            className="text-white relative bg-primary-300 rounded-xl px-4 py-2 sm:px-6 sm:py-3"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => (modalOpen ? close() : open())}
          >
            ثبت سفارش
          </motion.button>
          {/* <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="save-button"
            onClick={() => (modalOpen ? close() : open())}
          >
            Launch modal
          </motion.button> */}
          <span className="text-white relative w-fit px-4 py-2 sm:px-6 sm:py-3 bg-gray-400 rounded-xl flex items-center gap-2">
            ۱۰۰
            <IoEye />
          </span>
          {/* <button className="text-white w-fit px-4 py-2 sm:px-6 sm:py-3 bg-gray-400 rounded-xl flex items-center gap-2">
            <FaRegCopy />
          </button> */}
          <CopyButton text="help desk" />
        </div>
      </section>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && <DemoModal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </div>
  );
}
