import clsx from "clsx";
import React, { useState } from "react";

const skillsItems = ["IT & Development", "Design and Creative"];
const rowOne = [
  "Python Developer",
  "Shopify Developer",
  "MERN Stack Developer",
  "Full Stack Developer",
];

const rowTwo = [
  "Data Scientist",
  "Frontend Developer",
  "Shopify Developer",
  "Python Developer",
];

const rowThree = [
  "Shopify Developer",
  "Python Developer",
  "Full stack Developer",
  "Explore More",
];

function Skills() {
  const [activeSkill, setActiveSkill] = useState("IT & Development");
  return (
    <div className="lg:w-[920px] px-[8px] lg:px-[65px] bg-[#F8F8F8] mt-[40px] pt-[15px] pb-[30px] rounded-[15px] flex flex-col items-center">
      <div className="bg-[#D2D2D2] rounded-[15px] w-[100%] lg:max-w-[391px] flex justify-between">
        {skillsItems.map((items, index) => (
          <button
            key={index}
            className={clsx(
              "lg:w-[192px] w-[50%] h-[44px] rounded-[15px]",
              activeSkill === items && "bg-[#C7F4C2]"
            )}
            onClick={() => {
              setActiveSkill(items);
            }}
          >
            <p
              className={clsx(
                "text-[1rem] font-[500]",
                activeSkill === items ? "font-600" : "font-[500]"
              )}
            >
              {items}
            </p>
          </button>
        ))}
      </div>

      <div className="mt-[23px] flex justify-between w-[100%] gap-[10px]">
        <div className="flex flex-col gap-[18px]">
          {rowOne.map((item, index) => (
            <p
              key={index}
              className={clsx(
                "lg:text-[1rem] text-[0.75rem]",
                item === "MERN Stack Developer"
                  ? "font-[500] text-[#202229]"
                  : " text-[#959595] font-[400]"
              )}
            >
              {item}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-[18px]">
          {rowTwo.map((item, index) => (
            <p
              key={index}
              className={clsx(
                "lg:text-[1rem] text-[0.75rem] font-[400] text-[#959595]"
              )}
            >
              {item}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-[18px]">
          {rowThree.map((item, index) => (
            <p
              key={index}
              className={clsx(
                "lg:text-[1rem] text-[0.75rem]",
                item === "Explore More"
                  ? "font-[500] text-[#202229]"
                  : "text-[#959595] font-[400]"
              )}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
