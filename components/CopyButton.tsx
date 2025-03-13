import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaRegCopy, FaCheck } from "react-icons/fa6";

import { motion, AnimatePresence } from "framer-motion";
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState("");
  const handleCopy = () => {
    const textToCopy = text;

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => setCopied("copied"))
        .catch((err) => {
          setCopied("error");
          console.error("خطا هنگام کپی:", err);
        });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        setCopied("copied");
      } catch (err) {
        console.error("خطا در کپی:", err);
        setCopied("error");
      }
      document.body.removeChild(textarea);
    }
  };
  useEffect(() => {
    if (copied === "copied") {
      setTimeout(() => {
        setCopied("");
      }, 5000);
    }
    if (copied === "error") {
      setTimeout(() => {
        setCopied("");
      }, 5000);
    }
  }, [copied]);
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-white relative w-fit px-4 py-2 sm:px-6 sm:py-4 bg-gray-400 rounded-xl flex items-center gap-2"
        onClick={handleCopy}
      >
        <FaRegCopy />
      </motion.button>

      {copied === "error" && (
        <motion.span className="absolute text-white top-full left-0 -translate-x-1/2 translate-y-2 w-fit p-3 bg-red-500 rounded-xl flex items-center justify-center">
          <CgClose />
        </motion.span>
      )}
      {copied === "copied" && (
        <motion.span className="absolute text-white top-full left-0 translate-x-1 translate-y-2 w-fit p-3 bg-green-500 rounded-xl flex items-center justify-center">
          <FaCheck />
        </motion.span>
      )}
    </>
  );
}

export default CopyButton;

{
  /* <FaRegCopy /> */
}
