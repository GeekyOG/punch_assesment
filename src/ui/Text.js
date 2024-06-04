import clsx from "clsx";
import React from "react";

function Text({ text, className }) {
  return (
    <p className={clsx("lg:text-[1.375rem] font-[400]", className)}>{text}</p>
  );
}

export default Text;
