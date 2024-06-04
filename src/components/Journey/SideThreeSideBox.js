import React from "react";

function SideThreeSideBox() {
  return (
    <div className="rotate-2 flex flex-col">
      <div className="flex w-[468px]">
        <div className="bg-[#D8D2FF] w-[265px] h-[280px] flex-none rounded-[21px] px-[15px] py-[18px]">
          <div className="flex gap-[8px] items-center">
            <img src="/images/journey/allison.png" alt="" className="" />
            <p className="text-[1.375rem] font-[600] w-[70px] -ml-[20px] leading-[23px] -mt-[30px]">
              Allison Parker
            </p>
          </div>

          <div className="px-[28px] flex flex-col gap-[28px]">
            <p className="text-[1.125rem] font-[400] text-[#202229]">
              Ruby Developer
            </p>
            <p className="text-[0.75rem] font-[400] text-[#202229]">
              Redwood City, California 7 years experience
            </p>

            <div>
              <img src="/images/journey/Leelar.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="flex-none">
          <img src="/images/journey/img5.png" alt="" className="-ml-[30px]" />
        </div>
      </div>
      <div className="bg-[#c6edc2] w-[100%] h-[197px] flex-none rounded-[21px] py-[25px] lg:px-[15px] px-[55px]">
        <div className="flex items-center] gap-[16px]">
          <p className="text-[#20A67D] text-[5rem] font-[700] leading-[75px]">
            10X
          </p>
          <p className="text-[#20A67D]  font-[600] text-[2.125rem] leading-[38px]">
            Start building
            <br /> your team.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SideThreeSideBox;
