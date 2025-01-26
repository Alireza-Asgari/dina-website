"use client";
import { motion } from "framer-motion";

const ZoomX = ({
  xValue,
  children,
  className,
  amountValue = "some",
}: {
  xValue: number | string;
  children: React.ReactNode;
  className?: string;
  amountValue?: number | "some" | "all";
}) => {
  return (
    <motion.div
      className={` ${className} `}
      whileInView={{ x: 0, opacity: 1, scale: 1 }}
      initial={{ x: xValue, opacity: 0, scale: 1.5 }}
      transition={{
        duration: 0.5,
        delay: 0.1,
      }}
      viewport={{
        amount: amountValue,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ZoomX;
