import React from "react";
import Heading from "../../ui/Heading";
import SubText from "../../ui/journey/SubText";
import OnboardingContentOne from "./OnboardingContentOne";

function WhyChooseUs() {
  return (
    <div className="lg:pl-[70px] py-[187px] px-[20px] bg-gradient-to-t from-[#edefff] to-[#ffffff] overflow-scroll choose-us lg:px-0">
      <div className="xl:pl-[200px] flex mx-auto lg:flex-row flex-col lg:items-center gap-[30px] justify-between lg:gap-[85px]">
        <div className="flex-none">
          <Heading className="lg:max-w-[380px]" text="Why Choose Zwilt?" />
          <SubText
            className="max-w-[326px] mt-[32px]"
            text="
            We take complex hiring processes - and simplify them. Connecting you
            to the world’s highly qualified talent pool."
          />
        </div>
        <div className="relative flex-1  lg:max-w-[658px] overflow-visible bg-red">
          <OnboardingContentOne />
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
