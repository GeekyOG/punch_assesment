import React from "react";
import TalentsBox from "./TalentsBox";
import Heading from "../../ui/Heading";

function Marketplace() {
  return (
    <div className="w-[100%] relative flex justify-center overflow-hidden pb-[30px] -mt-[30px]">
      <div className="-rotate-2 bg-[#EDEFFF] w-[calc(100%+50px)] mt-[40px] flex-none lg:pt-[183px] pt-[60px] pb-[148px] flex justify-center">
        <div className="rotate-2 lg:px-[100px] w-[100%] px-[30px]  flex flex-col items-center ">
          <Heading
            text="Your one-stop marketplace for finding the talent your business needs."
            className="lg:max-w-[977px] text-center"
          />

          <TalentsBox />
        </div>
      </div>
    </div>
  );
}

export default Marketplace;
