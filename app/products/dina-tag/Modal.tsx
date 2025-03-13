"use client";
import { motion } from "framer-motion";
import { useState } from "react";
function Modal() {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="save-button"
      >
        Launch modal
      </motion.button>
    </div>
  );
}

export default Modal;
