import { motion, useInView } from "framer-motion";
import React from "react";
import { useRef } from "react";


const UseInViewHook = () => {
    const ref= useRef<HTMLDivElement>(null)

    const inView = useInView(ref, {once:true})
    console.log(inView)
  return (
     <div className="border border-red-500 size-[500px] flex flex-col justify-center items-center">
          <motion.div
            className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
          ref={ref}  
          animate={inView?{opacity:1, x:0, transition:{delay:1}}:{opacity:0, x:-500}}
          ></motion.div>
        </div>
      
  )
}

export default UseInViewHook
