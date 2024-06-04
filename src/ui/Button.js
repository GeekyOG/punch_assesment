import React from "react";
import { motion } from "framer-motion";

const TextAnimate = {
  initial: { x: 0, color: "#000000" },
  animate: { x: -140, color: "#FFFFFF" },
};
const IconAnimate = {
  animate: {
    width: 180,
    justifyContent: "end",
    paddingRight: "10px",
  },
};
function Button({ text, className }) {
  return (
    <motion.button
      initial="initial"
      animate="initial"
      whileHover="animate"
      className="flex gap-[8px] items-center"
    >
      <motion.div
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        variants={IconAnimate}
        className="h-[50px] w-[50px] rounded-[20px] bg-[#202229] flex items-center justify-center"
      >
        <img src="/images/arrowlight.svg" alt="" />
      </motion.div>
      <motion.p
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        variants={TextAnimate}
        className="text-[#202229]"
      >
        {text}
      </motion.p>
    </motion.button>
  );
}

export default Button;
