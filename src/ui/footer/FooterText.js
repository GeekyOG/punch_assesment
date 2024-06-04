import React from "react";

function FooterText({ text }) {
  return (
    <div>
      <p className="lg:text-[1.125rem] font-[500] py-[11px] text-[0.85rem]">
        {text}
      </p>

      {text === "Find Work" && (
        <div className="h-[1px] w-[85px] bg-gradient-to-r from-[#ffffff]"></div>
      )}
    </div>
  );
}

export default FooterText;
