import React from "react";
import { motion } from "framer-motion";

const Animation = () => {
  const parent = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const child = {
    hidden: { opacity: 0, scale: 0.91 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
      variants={parent}
      initial="hidden"
      animate="visible"
      transition={{
        ease: "easeInOut",
        duration: 1.5,
        delayChildren: 0.5,
        staggerChildren: 0.5,
      }}
    >
      <motion.div
        className="bg-cyan-400 size-20 rounded-sm"
        variants={child}
      ></motion.div>
      <motion.div
        className="bg-cyan-400 size-20 rounded-sm"
        variants={child}
      ></motion.div>
      <motion.div
        className="bg-cyan-400 size-20 rounded-sm "
        variants={child}
      ></motion.div>
      <motion.div
        className="bg-cyan-400 size-20 rounded-sm "
        variants={child}
      ></motion.div>
    </motion.div>
  );
};

export default Animation;
