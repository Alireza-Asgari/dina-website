"use client";
import { motion } from "framer-motion";
export default function DviderMotion({
  className = "",
}: {
  className?: string;
}) {
  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "90%" }}
      viewport={{ amount: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`gradient-border-2 mx-auto ${className}`}
    />
  );
}
