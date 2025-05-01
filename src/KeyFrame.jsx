import React from "react";
import { motion } from "framer-motion";

const KeyFrame = () => {
  const parent = {
    hidden: { opacity: 0, x: 0, y: 0 },
    visible: {
      x: [0, 300, -300, 0],
      y: [0, 300, -300, 0],
      rotate: [0, 360, -360, 0],

      opacity: 1,
      transition: {
        ease: "linear",
        duration: 5,
        repeat: Infinity,
        opacity: {
          duration: 0.5,
        },
      },
    },
  };

  return (
    <div className="border border-red-500 size-[500px] flex justify-center items-center">
      <motion.div
        className="size-64 bg-pink-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center "
        variants={parent}
        initial="hidden"
        animate="visible"
      ></motion.div>
    </div>
  );
};

export default KeyFrame;
