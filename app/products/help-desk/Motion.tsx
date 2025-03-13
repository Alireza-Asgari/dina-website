import React from "react";
import Backdrop from "./Backdrop";
import { motion } from "framer-motion";
import clsx from "clsx";
import { CgClose } from "react-icons/cg";
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

const Motion: React.FC<{
  handleClose: () => void;
  children: React.ReactNode;
}> = ({ handleClose, children }) => {
  return (
    <Backdrop onClick={handleClose}>
      <div
        className="fixed top-0 left-0 z-50 w-screen h-screen backdrop-blur-3xl bg-gray-400 bg-opacity-50 flex justify-center items-center"
        onClick={handleClose}
      >
        <motion.div
          dir="rtl"
          onClick={(e) => e.stopPropagation()}
          className={
            "bg-white dark:bg-primary-350 rounded-lg p-3 w-11/12 max-w-2xl text-productsBg dark:text-white "
          }
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={flip}
        >
          <button
            className="absolute -top-20 right-0 bg-white dark:bg-primary-350 rounded-full p-2 z-30 w-12 h-12 flex justify-center items-center font-bold text-2xl"
            onClick={handleClose}
          >
            <CgClose />
          </button>
          {children}
        </motion.div>
      </div>
    </Backdrop>
  );
};

export default Motion;

{
  /* <div
  className="bg-white rounded-lg p-4 w-10/12 max-w-2xl"
  onClick={(e) => e.stopPropagation()}
></div>; */
}
