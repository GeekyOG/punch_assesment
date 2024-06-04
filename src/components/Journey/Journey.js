import React from "react";
import Heading from "../../ui/Heading";
import JourneyStep from "./JourneyStep";
import StepOneSideBox from "./StepOneSideBox";
import SideTwoSideBox from "./SideTwoSideBox";
import SideThreeSideBox from "./SideThreeSideBox";

const infoBoxProps = [
  {
    step: "1",
    gradientStart: "#D1C4E275 46%",
    gradientEnd: "#A387D1 100%",
    sideBox: <StepOneSideBox />,
    infoData: {
      heading: "Find your next star performer.",
      text: "Explore the vast Zwilt marketplace to find the candidate that meets your needs.",
      buttonText: "Join Now",
    },
    className: "bg-[#EDEFFF]",
  },
  {
    step: "2",
    gradientStart: "#FFBD2E0A 0%",
    gradientEnd: "#FFBE2E 76%",
    sideBox: <SideTwoSideBox />,
    infoData: {
      heading: "Evaluate to your heart’s content.",
      text: "Assess the candidate through work history, transparent tests and video interviews.",
      buttonText: "Browse More",
    },
    className: "bg-[#fff7e1]",
  },
  {
    step: "3",
    gradientStart: "#e8e8e8 27%",
    gradientEnd: "#c6c6c6 76%",
    sideBox: <SideThreeSideBox />,
    infoData: {
      heading: "Start building your team.",
      text: "Explore the vast Zwilt marketplace to find the candidate that meets your needs.",
      buttonText: "Join Now",
    },
    className: "bg-[#f3f3f3]",
  },
];
function Journey() {
  return (
    <div className="flex flex-col items-center pb-[92px] lg:px-[70px] px-[24px]">
      <div className="mt-[144px] xl:w-[1280px] flex flex-col gap-[30px] ">
        <Heading text="Start your journey today." className="text-center" />
        {infoBoxProps.map((item, index) => (
          <div key={index}>
            <JourneyStep
              step={item.step}
              gradientStart={item.gradientStart}
              gradientEnd={item.gradientEnd}
              sideBox={item.sideBox}
              infoData={item.infoData}
              className={item.className}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Journey;
