import React from "react";
const props = [
  { icon: "/images/Vector-1.svg", text: "989 Skills" },
  { icon: "/images/Vector-2.svg", text: "45 Sub-Categoriess" },
  { icon: "/images/Vector-3.svg", text: "1011 Profiles" },
];
function LeftBox() {
  return (
    <div className="lg:w-[380px] px-[30px] lg:px-0">
      <p className="lg:text-[1.5rem] font-[500] leading-[34px]">
        Find Dev and IT professionals to scale your business.
      </p>
      <div className="flex justify-between flex-wrap gap-[8px] mt-[20px]">
        {props.map((item, index) => (
          <div
            key={index}
            className="flex w-[calc(50%-8px)] gap-[8px] items-center"
          >
            <img src={item.icon} alt="" />
            <p className="text-[1rem] font-[400]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftBox;
