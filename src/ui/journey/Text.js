import clsx from "clsx";
import React from "react";

function Text({ text, className }) {
  return (
    <p className={clsx("lg:text-[2.125rem] font-[600]", className)}>{text}</p>
  );
}

export default Text;
