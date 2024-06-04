import React from "react";
import Heading from "../../ui/Heading";
import Text from "../../ui/Text";
import StepBox from "./StepBox";

function Steps() {
  return (
    <div className="flex flex-col items-center lg:pb-[92px] mx-[20px] lg:mx-0">
      <div className="lg:mt-[149px]  mt-[50px] xl:w-[1280px] flex flex-col gap-[30px] ">
        <Heading
          text="How we ensure you’re in good hands."
          className="lg:max-w-[570px]"
        />
        <Text
          className="lg:max-w-[636px]"
          text="With our comprehensive screening process, we hand-pick highly skilled candidates so you can onboard them in a matter of days."
        />

        <div className="flex flex-col gap-[5px]">
          <StepBox
            step="Step 1"
            text="Resume Screening"
            fullText=" Candidates are assessed through skill based questions in a virtual
          setting. Allowing you to gauge personality and cultural fit."
          />
          <StepBox
            fullText=" Candidates are assessed through skill based questions in a virtual
          setting. Allowing you to gauge personality and cultural fit."
            step="Step 2"
            text="Video Interview"
          />
          <StepBox
            step="Step 3"
            text="Video Interview"
            fullText=" Candidates are assessed through skill based questions in a virtual
          setting. Allowing you to gauge personality and cultural fit."
          />
          <StepBox
            step="Step 4"
            text="Video Interview"
            fullText=" Candidates are assessed through skill based questions in a virtual
          setting. Allowing you to gauge personality and cultural fit."
          />
          <StepBox
            step="Step 5"
            text="Video Interview"
            fullText=" Candidates are assessed through skill based questions in a virtual
          setting. Allowing you to gauge personality and cultural fit."
          />
        </div>
      </div>
    </div>
  );
}

export default Steps;
