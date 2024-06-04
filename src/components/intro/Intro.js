import React from "react";
import SearchBar from "../../ui/intro/SearchBar";
import Skills from "./Skills";
import { motion } from "framer-motion";

function Intro() {
  return (
    <div className="mt-[144px] flex flex-col items-center justify-center mx-[10px] lg:mx-0">
      <div className="lg:max-w-[671px]">
        <div className="flex flex-wrap justify-center text-[2rem] lg:text-[3.375rem] font-[700] lg:leading-[64px] items-center">
          <p>Finding the right fit</p>
          <div className="relative mr-[10px]">
            <motion.img
              animate={{ x: [10, 20, 10] }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src="/images/zwilt-tba-1-01 2.svg"
              className="h-[43px] right-[10px] absolute top-0 rounded-[50%]"
              alt=""
            />
            <motion.img
              animate={{ x: [0, 3, 0] }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src="/images/img2.svg"
              className="h-[43px] right-[14px] absolute top-0 rounded-[50%]"
              alt=""
            />
            <motion.img
              animate={{ x: [0, -6, 0] }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              src="/images/zwilt-tba-1-01 2.svg"
              className="h-[43px]"
              alt=""
            />
          </div>

          <p className="mr-[8px] lg:mr-0">has</p>
          <p> never been easier.</p>
        </div>

        <div className="mt-[20px]">
          <p className="text-center lg:text-[1.375rem] font-[400] lg:leading-[32px]">
            With our rigorous pre-vetting process, you'll never have to worry
            about finding the ideal candidate ever again.
          </p>
        </div>
      </div>
      <SearchBar />
      <Skills />

      <img src="/images/Union.svg" alt="" className="w-[100%] mt-[76px]" />
    </div>
  );
}

export default Intro;
