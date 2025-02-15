"use client";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgMenuLeft, CgClose } from "react-icons/cg";
import {
  HiOutlineArrowUp,
  HiOutlineSun,
  HiMoon,
  HiOutlineSearch,
} from "react-icons/hi";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  const [currentTheme, setCurrentTheme] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setCurrentTheme(theme ?? "");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setCurrentTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setCurrentTheme("dark");
    }
  };

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showMenu]);
  return (
    <div>
      <header className="fixed left-0 top-0 w-full z-50">
        <div className="container w-full mx-auto p-5 border-b border-white border-opacity-20 flex items-center backdrop-blur-xl bg-opacity-75 justify-between dark:text-white text-gray-800">
          <div className="flex items-end gap-10 ">
            <Link href="/" className="relative w-40 h-12">
              <Image src="/logo.jpg" alt="داده کاوان دینا" fill className="" />
            </Link>
            <div className="group relative hidden md:block">
              <Link
                href="/products"
                className="flex text-lg items-center relative "
              >
                <p className="tracking-wider font-medium flex items-center before:content-[''] before:border-b-2 before:dark:border-white before:border-gray-800 before:w-[140px] before:absolute before:top-7 before:rounded-sm before:right-1">
                  <span className="dark:text-white text-black group-hover:text-white dark:group-hover:text-black z-20 transition-all relative duration-500">
                    مشاهد
                  </span>
                  <span className="">ه محصولات</span>
                </p>
                <HiOutlineArrowUp
                  className="-rotate-45 -translate-y-[2px]"
                  style={{ fontWeight: "bold", fontSize: "24px" }}
                />
              </Link>
              <span className="w-[60px] h-[60px] rounded-full bg-primary-900 dark:bg-white absolute -top-1/2 -right-1  z-10 group opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="text-2xl dark:text-white text-pribg-primary-900"
            >
              <div>
                {currentTheme === "light" ? <HiMoon /> : <HiOutlineSun />}
              </div>
            </button>
            <Link
              href={"/"}
              className="hidden md:block text-gray-800 dark:text-white border-gray-800 dark:border-white border text-lg font-light rounded-full py-2 px-4 "
            >
              واحد پشتیبانی و مشاوره
            </Link>
            <button className="text-gray-800 dark:text-white hidden md:block">
              <HiOutlineSearch
                style={{ fontWeight: "bold", fontSize: "24px" }}
              />
            </button>
            <button
              className="text-gray-800 dark:text-white"
              onClick={() => setShowMenu(true)}
            >
              <CgMenuLeft style={{ fontWeight: "bold", fontSize: "24px" }} />
            </button>
          </div>
        </div>
      </header>
      <motion.div
        initial={{ width: "0vw" }}
        animate={{
          width: showMenu ? "100vw" : "0vw",
          opacity: showMenu ? 1 : 0,
        }}
        transition={{ duration: 0.4 }}
        style={{ width: "100vw", height: "100vh" }}
        className={clsx(
          "fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-primary-700",
          !showMenu && "pointer-events-none "
        )}
      >
        {showMenu && (
          <div className="z-50 font-bold text-white-400">
            <button
              className="p-4 text-2xl rounded-full absolute top-0 left-0 translate-x-1/2 translate-y-1/2 "
              onClick={() => setShowMenu(false)}
            >
              <CgClose />
            </button>
            <ul className="text-2xl max-w-lg grid grid-cols-2 justify-items-center place-items-center p-4 gap-12 sm:gap-24 ">
              <li>
                <p>صفحه اصلی</p>
              </li>
              <li>
                <p>محصولات</p>
              </li>
              <li>
                <p>تماس با ما</p>
              </li>
              <li>
                <p>درباره ما</p>
              </li>
              <li>
                <p>پشتیبانی</p>
              </li>
              <li>
                <p>
                  <HiOutlineSearch />
                </p>
              </li>
              <li>
                <p>ادرس</p>
              </li>
              <li>
                <p>خدمات</p>
              </li>
            </ul>
          </div>
        )}
        <div className="absolute inset-0 z-30">
          {/* <motion.div
            className={clsx(
              "bg-primary-300 h-full absolute left-0 transition-all"
            )}
            initial={{ width: 0 }}
            animate={{ width: showMenu ? "20%" : "0%" }}
            transition={{ duration: 0.2, delay: 0.2, ease: "linear" }}
            style={{ width: "100%" }}
          ></motion.div>
          <motion.div
            className={clsx(
              "bg-primary-300 h-full absolute left-[20%] transition-all"
            )}
            initial={{ width: 0 }}
            animate={{ width: showMenu ? "20%" : "0%" }}
            transition={{ duration: 0.2, delay: 0.2, ease: "linear" }}
            style={{ width: "100%" }}
          ></motion.div>
          <motion.div
            className={clsx(
              "bg-primary-300 h-full absolute left-[40%] transition-all"
            )}
            initial={{ width: 0 }}
            animate={{ width: showMenu ? "20%" : "0%" }}
            transition={{ duration: 0.2, delay: 0.2, ease: "linear" }}
            style={{ width: "100%" }}
          ></motion.div>
          <motion.div
            className={clsx(
              "bg-primary-300 h-full absolute left-[60%] transition-all"
            )}
            initial={{ width: 0 }}
            animate={{ width: showMenu ? "20%" : "0%" }}
            transition={{ duration: 0.2, delay: 0.2, ease: "linear" }}
            style={{ width: "100%" }}
          ></motion.div>
          <motion.div
            className={clsx(
              "bg-primary-300 h-full absolute left-[80%] transition-all"
            )}
            initial={{ width: 0 }}
            animate={{ width: showMenu ? "20%" : "0%" }}
            transition={{ duration: 0.2, delay: 0.2, ease: "linear" }}
            style={{ width: "100%" }}
          ></motion.div> */}
          {[0, 20, 40, 60, 80].map((left) => (
            <DivMotion key={left} left={left} showMenu={showMenu} />
          ))}
        </div>
        {/* <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{
            opacity: showMenu ? 1 : 0,
            width: showMenu ? "100vw" : "0%",
          }}
          style={{ width: "100vw" }}
          transition={{ duration: 0.5, delay: showMenu ? 0.7 : 0 }}
          className="absolute top-0 right-1/2 z-30 p-12 text-white-400 flex justify-center items-center w-screen h-screen "
        >
          <ul className="space-y-6 w-full">
            <li>
              <button
                className="z-50 border-red-100 border-2 p-4 rounded-full "
                onClick={() => setShowMenu(false)}
              >
                Close Menu
              </button>
            </li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </motion.div> */}
      </motion.div>
    </div>
  );
}

function DivMotion({ left, showMenu }: { left: number; showMenu: boolean }) {
  return (
    <motion.div
      className={clsx("bg-primary-350 h-full absolute transition-all")}
      initial={{ width: 0 }}
      animate={{ width: showMenu ? "20%" : "0%" }}
      transition={{ duration: 0.4, ease: "linear" }}
      style={{ width: "100%", left: `${left}%` }}
    ></motion.div>
  );
}
