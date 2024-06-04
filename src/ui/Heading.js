import clsx from "clsx";
import React from "react";

function Heading({ text, className }) {
  return (
    <p
      className={clsx("lg:text-[3.375rem] font-[600] text-[1.5rem]", className)}
    >
      {text}
    </p>
  );
}

export default Heading;
