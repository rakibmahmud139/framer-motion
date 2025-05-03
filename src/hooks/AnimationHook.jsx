import { motion, useAnimationControls } from "motion/react";
import { useEffect, useState } from "react";

const AnimationHook = () => {
  const controls = useAnimationControls();
  const [toggle, setToggle] = useState(false);

  // const handleToggle = () => {
  //   setToggle(!toggle);

  //   if (toggle) {
  //     controls.start({ x: 200 });
  //   } else {
  //     controls.start({ x: -200 });
  //   }
  // };

  useEffect(() => {
    controls.start((i) => ({ x: 200, transition: { delay: i * 1 } }));
  }, []);

  return (
    <div
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() => controls.start({ x: 200, transition: { delay: 1 } })}
      className="border border-red-500 size-[500px] flex flex-col justify-center items-center"
    >
      {/* <button
        onClick={handleToggle}
        className="bg-green-500 mb-10 rounded-lg px-2 py-3"
      >
        Forward
      </button> */}
      <motion.div
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        animate={controls}
        custom={1}
      ></motion.div>
      <motion.div
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        animate={controls}
        custom={2}
      ></motion.div>{" "}
      <motion.div
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        animate={controls}
        custom={3}
      ></motion.div>
    </div>
  );
};

export default AnimationHook;
