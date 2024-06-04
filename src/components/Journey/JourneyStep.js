import React from "react";
import InfoBox from "./InfoBox";
import clsx from "clsx";

function JourneyStep({
  step,
  gradientStart,
  gradientEnd,
  className,
  sideBox,
  infoData,
}) {
  return (
    <div
      className={clsx(
        "lg:w-[100%] w-[100vw] relative flex justify-center overflow-hidden pb-[30px] pt-[25px]"
      )}
    >
      <div
        className={clsx(
          "-rotate-2 lg:w-[calc(100%+50px)] flex-none flex flex-col lg:flex-row justify-center lg:px-[50px] overflow-hidden lg:max-h-[387px]",
          className
        )}
      >
        <InfoBox
          infoData={infoData}
          step={step}
          gradientEnd={gradientEnd}
          gradientStart={gradientStart}
        />
        {sideBox}
      </div>
    </div>
  );
}

export default JourneyStep;
