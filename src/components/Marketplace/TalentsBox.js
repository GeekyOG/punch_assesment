import React from "react";
import RightBox from "../../ui/marketplace/RightBox";
import LeftBox from "../../ui/marketplace/LeftBox.js";
import { motion } from "framer-motion";

const boxOneProps = [
  { icon: "/images/marketplace/shopify.svg", text: "Shopify Developer" },
  { icon: "/images/marketplace/img9.svg", text: "Magento Developer" },
  { icon: "/images//marketplace/img6.svg", text: "Data Scientist" },
  { icon: "/images/marketplace/img8.svg", text: "Webflow Developer" },
  { icon: "/images/marketplace/img7.svg", text: "Dot Net Developer" },
];

const boxTwoProps = [
  { icon: "/images/marketplace/img1.svg", text: "UX Designer" },
  { icon: "/images/marketplace/img3.svg", text: "Graphics Designer" },
  { icon: "/images/marketplace/img2.svg", text: "illustration Artist" },
  { icon: "/images/marketplace/img4.svg", text: "Unreal Engine" },
  { icon: "/images/marketplace/img5.svg", text: "Cinema 4D" },
];

const TextAnimate = {
  initial: { x: 0, color: "#000000" },
  animate: { x: -200, color: "#FFFFFF" },
};
const IconAnimate = {
  animate: {
    width: 200,
    justifyContent: "end",
    paddingRight: "10px",
  },
};

function TalentsBox() {
  return (
    <div className="lg:mt-[90px] flex flex-col gap-[30px] mt-[40px]">
      <div className="flex lg:flex-row flex-col lg:gap-[190px] gap-[30px]">
        <LeftBox />
        <RightBox boxProps={boxOneProps} />
      </div>
      <div className="flex lg:flex-row flex-col lg:gap-[190px]  gap-[30px]">
        <div>
          <LeftBox />
          <motion.button
            initial="initial"
            animate="initial"
            whileHover="animate"
            className="lg:flex mt-[90px] items-center gap-[12px] hidden "
          >
            <motion.div
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              variants={IconAnimate}
              className="w-[74px] h-[74px] rounded-[30px] flex item-center justify-center bg-[#202229]"
            >
              <img src="/images/arrowlight.svg" alt="" className="w-[25px]" />
            </motion.div>
            <motion.p
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              variants={TextAnimate}
              className="text-[1.375rem] font-[500]"
            >
              Explore More
            </motion.p>
          </motion.button>
        </div>

        <div>
          <RightBox boxProps={boxTwoProps} arrowBack={true} />
          <div className="mt-[35px] ml-[20px] lg:ml-0">
            <p className="text-[1.375rem]">
              <span className="font-[700]">30 more</span> to explore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TalentsBox;
