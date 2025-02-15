"use client";
import { motion } from "framer-motion";

import React from "react";
const floatAnimation1 = {
  y: [0, 20, 0],
  transition: {
    duration: 2,
    ease: "easeInOut",
    repeat: Infinity,
  },
};

const floatAnimation2 = {
  y: [0, -20, 0],
  transition: {
    duration: 2,
    ease: "easeInOut",
    repeat: Infinity,
  },
};

export default function Swinging({
  order,
  children,
  className = "",
}: {
  children: React.ReactNode;
  order: 1 | 2;
  className?: string;
}) {
  const animation = order === 1 ? floatAnimation1 : floatAnimation2;
  return (
    <motion.div animate={animation} className={`${className}`}>
      {children}
    </motion.div>
  );
}
