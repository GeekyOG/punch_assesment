import clsx from "clsx";
import React, { useState } from "react";

function StepBox({ className, text, step, fullText }) {
  const [showText, setShowText] = useState(false);
  return (
    <div
      className={clsx(
        "lg:w-[635px] border-[1px] border-[#F0F0F0] min-h-[80px] rounded-[7px]  items-center px-[20px] pt-[11px] cursor-pointer",
        className,
        showText ? "shadow-[0_35px_60px_-30px_rgba(0,0,0,0.3)]" : ""
      )}
      onClick={() => setShowText(!showText)}
    >
      <div className="flex gap-[23px] items-center">
        <div
          className={clsx(
            "w-[57px] h-[57px] rounded-[50%] flex items-center justify-center",
            showText ? "bg-[#8BA4FD]" : "bg-[#ECECEC]"
          )}
        >
          {showText ? (
            <img src="/images/activeplay.svg" alt="" />
          ) : (
            <img src="/images/video.svg" alt="" />
          )}
        </div>
        <p className="text-[1rem]">
          <span className="font-[600]">{step}:</span> {text}
        </p>
      </div>

      {showText && (
        <div className="mt-[16px] pb-[19px]">
          <p className="text-[1rem] lg:max-w-[531px]">{fullText}</p>
        </div>
      )}
    </div>
  );
}

export default StepBox;
