import React from "react";

function RightBox({ boxProps, arrowBack }) {
  return (
    <div className="lg:w-[730px] bg-[#ffffff] rounded-[7px] lg:px-[29px] py-[18px] overflow-scroll lg:overflow-auto w-[100vw] px-[30px] ">
      <p className="text-[1rem] font-[500] leading-[23.78px]">
        IT & Development
      </p>
      <div className="flex gap-[20px] mt-[15px] w-[100%]">
        {arrowBack && (
          <div className="flex items-center mt-[12px] flex-col">
            <div className="w-[96px] h-[96px] rounded-[30px] flex item-center justify-center bg-[#f6f6f6]">
              <img src="/images/marketplace/arrowback.svg" alt="" />
            </div>
          </div>
        )}
        {boxProps.map((item, index) => (
          <div key={index} className="flex items-center mt-[12px] flex-col">
            <div className="w-[96px] h-[96px] rounded-[50%] flex item-center justify-center bg-[#f6f6f6]">
              <img src={item.icon} alt="" />
            </div>
            <p className="text-[0.875rem] font-[600] max-w-[60px] text-center">
              {item.text}
            </p>
          </div>
        ))}

        {!arrowBack && (
          <div className="flex items-center mt-[12px] flex-col">
            <div className="w-[96px] h-[96px] rounded-[30px] flex item-center justify-center bg-[#f6f6f6]">
              <img src="/images/search_arrow.svg" alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RightBox;
