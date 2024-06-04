import clsx from "clsx";
import React from "react";

function ImageBox({ image, className, bg, role, about }) {
  return (
    <div
      className={clsx(
        "w-[220px] h-[247px] bg-[#ffffff] flex-none rounded-[21px]",
        className
      )}
    >
      <div className={clsx(" rounded-[21px] h-[141px] flex", bg)}>
        <img src={image} alt="" className="mt-auto" />
      </div>
      <div className="px-[2px] flex flex-col gap-[28px] items-center">
        <p className="text-[1.125rem] font-[400] text-[#202229]">{role}</p>
        <p className="text-[0.75rem] font-[400] text-[#202229] max-w-[143px]">
          {about}
        </p>
      </div>
    </div>
  );
}

export default ImageBox;
