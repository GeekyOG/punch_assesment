import React from "react";
import ImageBox from "./ImageBox";

function StepOneSideBox() {
  return (
    <div className="rotate-2 lg:w-[466px] mr-[37px] flex flex-col gap-[24px]">
      <div className=" flex gap-[24px] ">
        <ImageBox
          image="/images/journey/img1.png"
          bg="bg-[#ffdace]"
          about="  Redwood City, California 7 years experience"
          role="Ruby Developer"
        />
        <ImageBox
          image="/images/journey/img3.png"
          className="-mt-[55px]"
          bg="bg-[#c8efc4]"
          role="System ops engineer"
          about="Abu Dhabi, UAE 5 years experience"
        />
      </div>
      <div className=" flex gap-[24px] ">
        <ImageBox image="/images/journey/img2.png" bg="bg-[#d8d2ff]" />

        <ImageBox
          image="/images/journey/img4.png"
          bg="bg-[#fddd8b]"
          className="-mt-[55px]"
        />
      </div>
    </div>
  );
}

export default StepOneSideBox;
