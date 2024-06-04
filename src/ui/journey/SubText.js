import clsx from "clsx";
import React from "react";

function SubText({ text, className }) {
  return (
    <p className={clsx("lg:text-[1.375rem] font-[400]", className)}>{text}</p>
  );
}

export default SubText;
