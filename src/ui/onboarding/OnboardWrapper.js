import React from "react";
import Button from "../Button";
import Heading from "../Heading";

function OnboardWrapper({ heading, skills, rightContent }) {
  return (
    <div className="py-[42px] lg:px-[58px] px-[24px] bg-[#FFFFFF] rounded-[20px] lg:w-[1300px] lg:h-[652px] h-[1300px] relative">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:mt-[133px]">
          <Heading text={heading} className="max-w-[464px]" />

          <div>
            <div className="flex items-center gap-[16px]">
              <div className="w-[18px] h-[7px] rounded-[21px] bg-[#50589F]"></div>
              <p className="lg:text-[1.375rem] text-[0.75rem]">
                We pick the best for you to select.
              </p>
            </div>
            <div className="flex items-center gap-[16px]">
              <div className="w-[18px] h-[7px] rounded-[21px] bg-[#50589F]"></div>
              <p className="lg:text-[1.375rem] text-[0.75rem]">
                Thousands of vetted candidates in dozens of categories.
              </p>
            </div>
            <div className="flex items-center gap-[16px]">
              <div className="w-[18px] h-[7px] rounded-[21px] bg-[#50589F]"></div>
              <p className="lg:text-[1.375rem] text-[0.75rem]">
                Risk-free resource swapping for the best fit.
              </p>
            </div>
          </div>
          <div className="mt-[44px]">
            <Button text={"Join Now"} />
          </div>
        </div>

        {rightContent}
      </div>
    </div>
  );
}

export default OnboardWrapper;
