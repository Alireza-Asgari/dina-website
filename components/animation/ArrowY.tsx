"use client";
import { motion } from "framer-motion";
import { HiArrowNarrowDown } from "react-icons/hi";
export default function ArrowY() {
  return (
    <motion.div
      className="z-30 mx-auto absolute bottom-10"
      animate={{ y: [0, 20, 0] }}
      transition={{ y: { duration: 3, repeat: Infinity } }}
      style={{ transform: "translateX(50%)" }}
    >
      <button className="p-4 text-xl sm:p-8 sm:text-3xl leading-3 bg-grayOpacity rounded-full border border-gray-800 dark:border-white">
        <HiArrowNarrowDown />
      </button>
    </motion.div>
  );
}
