"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SevicesCard({
  icon,
  header,
  description,
}: {
  icon: React.ReactElement;
  header: string;
  description: string;
}) {
  return (
    <motion.div
      variants={{
        visible: {
          opacity: 1,
          scale: 1,
        },
        hidden: {
          opacity: 0,
          scale: 0.8,
        },
      }}
      transition={{ duration: 0.3 }}
      className="relative w-72 xl:w-80 xl:h-80 z-10 bg-white-300 dark:bg-gray-800 p-6 rounded-e-[19px] space-y-6 transition-all hover:border-s-4 hover:scale-110 hover:border-primary-200 dark:hover:border-primary-300 border border-transparent group "
    >
      <div className="text-5xl">{icon}</div>
      <h3
        className="text-xl font-semibold group-hover:font-bold transition-all duration-500
              group-hover:bg-clip-text  group-hover:text-transparent group-hover:bg-gradient-to-r  group-hover:from-[#ff4d42] group-hover:to-primary-300"
      >
        {header}
      </h3>
      <p className="text-lg text-gray-500 dark:text-white-400">{description}</p>
      <div className="absolute bottom-0 translate-x-1/2 translate-y-1/2 right-0 w-4 h-4 bg-primary-200 rounded-full group-hover:scale-[2] transition-all" />
    </motion.div>
  );
}
