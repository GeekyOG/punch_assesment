import clsx from "clsx";
import React from "react";

function FaqTab({ sideText, text, active, SideTextTwo }) {
  return (
    <div
      className={clsx(
        " border-t-[1px] border-b-[1px] w-[100%] flex border-[#D6D6D6] flex-col lg:flex-row",
        active && "bg-[#E8E8E8]"
      )}
    >
      {sideText && (
        <p
          className={clsx(
            "text-[1.375rem] font-[600] leading-[24px] lg:border-r-[1px] border-t-[1px] border-b-[1px] lg:border-t-0 lg:border-b-0 py-[44px] text-center border-[#D6D6D6] lg:w-[240px] ",
            SideTextTwo && "bg-[#E8E8E8]"
          )}
        >
          {sideText}
        </p>
      )}
      {SideTextTwo && (
        <p
          className={clsx(
            "text-[1.375rem] font-[600] leading-[24px] lg:border-r-[1px] border-t-[1px] border-b-[1px] lg:border-t-0 lg:border-b-0 py-[44px] text-center border-[#D6D6D6] lg:w-[240px] "
          )}
        >
          {SideTextTwo}
        </p>
      )}
      <p
        className={clsx(
          "text-[1.375rem] font-[400] leading-[24px] flex-1  py-[44px] lg:pl-[550px] text-center lg:text-left",
          !sideText && "lg:ml-[240px]",
          SideTextTwo && "lg:-ml-[240px]"
        )}
      >
        {text}
      </p>
    </div>
  );
}

export default FaqTab;
