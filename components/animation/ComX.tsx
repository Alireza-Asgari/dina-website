"use client";
import { motion } from "framer-motion";

const ComX = ({
  xValue,
  children,
  className,
  amountValue = "some",
  delay = 0,
}: {
  xValue: number | string;
  children: React.ReactNode;
  className?: string;
  amountValue?: number | "some" | "all";
  delay?: number;
}) => {
  return (
    <motion.div
      className={` ${className} `}
      whileInView={{ x: 0, opacity: 1 }}
      initial={{ x: xValue, opacity: 0 }}
      transition={{
        duration: 0.5,
        delay: delay,
      }}
      viewport={{
        amount: amountValue,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ComX;
