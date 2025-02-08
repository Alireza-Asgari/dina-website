"use client";
import React, { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { CgClose } from "react-icons/cg";
const animationVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0, x: "25%" },
  exit: { opacity: 0, y: -10 },
};
export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState<true | false | "error">(false);
  const handleCopy = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      // استفاده از API مدرن
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopied(true);
        })
        .catch((err) => {
          setCopied("error");
          console.error("Failed to copy text: ", err);
        });
    } else {
      // روش جایگزین برای مرورگرهای قدیمی‌تر
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        const successful = document.execCommand("copy");
        setCopied(successful ? true : "error");
      } catch (err) {
        setCopied("error");
        console.error("Failed to copy text: ", err);
      }
      document.body.removeChild(textArea);
    }
  };
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [copied]);
  return (
    <button
      className="text-white relative w-fit px-4 py-2 sm:px-6 sm:py-3 bg-gray-400 rounded-xl flex items-center gap-2"
      onClick={handleCopy}
    >
      <FaRegCopy />
      <AnimatePresence>
        {copied === true && (
          <motion.span
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animationVariants}
            transition={{ duration: 0.3 }}
            className="z-20 w-10 h-10 absolute top-full translate-y-1 left-0 translate-x-1/2 rounded-xl text-white  flex justify-center items-center bg-green-400"
          >
            <FaCheck className="text-lg" />
          </motion.span>
        )}
        {copied === "error" && (
          <motion.span
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animationVariants}
            transition={{ duration: 0.5 }}
            className="z-20 w-10 h-10 absolute top-full translate-y-1 left-0 translate-x-1/2 rounded-xl text-white  flex justify-center items-center bg-red-300"
          >
            <CgClose className="text-lg" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
