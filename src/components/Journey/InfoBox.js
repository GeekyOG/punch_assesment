import React from "react";
import Text from "../../ui/journey/Text";
import Button from "../../ui/Button";

function InfoBox({ step, gradientStart, gradientEnd, infoData }) {
  return (
    <div className="rotate-2 lg:w-[100%] py-[90px] flex w-[100vw] ml-[60px] lg:pl-0 px-[10px] lg:px-0">
      <div>
        <p
          className="text-[7rem] font-[700] leading-[83px]"
          style={{
            backgroundImage: `linear-gradient(360deg, ${gradientStart}, ${gradientEnd})`,
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {step}
        </p>
      </div>
      <div className=" flex flex-col gap-[20px] ">
        <Text
          text={infoData.heading}
          className="lg:max-w-[445px] leading-[44px]"
        />
        <p className="text-[1rem] font-[400] text-[#202229CC] lg:max-w-[407px]">
          {infoData.text}
        </p>

        <Button text={infoData.buttonText} />
      </div>
    </div>
  );
}

export default InfoBox;
