import React from "react";

function SideTwoSideBox() {
  return (
    <div className="rotate-2 lg:w-[466px] mr-[37px] flex flex-col gap-[24px]">
      <div className=" flex gap-[20px] mt-[29px]">
        <div className="bg-[#ffffff] flex-none rounded-[21px] relative w-[200px] h-[295px]">
          <img
            src="/images/journey/skeleton1.png"
            alt=""
            className="top-[33px] left-[29px] absolute "
          />
        </div>
        <div className="flex-none rounded-[21px] bg-[#ffffff]  lg:bg-[transparent] relative h-[295px] w-[223px] -mt-[65px]">
          <img
            src="/images/journey/skeleton2.png"
            alt=""
            className="mt-[33px] w-[223px] absolute h-[295px]"
          />
        </div>
      </div>

      <div className=" flex mt-[29px]">
        <div className=" flex-none rounded-[21px] pl-[29px] relative w-[223px] h-[295px]"></div>
        <div className="bg-[#ffffff] flex-none rounded-[21px]  w-[223px] h-[295px] -mt-[100px]">
          <img
            src="/images/journey/skeleton3.png"
            alt=""
            className="mt-[33px] w-[168px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default SideTwoSideBox;
