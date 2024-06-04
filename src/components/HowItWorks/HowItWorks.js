import React from "react";
import Text from "../../ui/Text";

function HowItWorks() {
  return (
    <div className="w-[100%] flex justify-center relative overflow-hidden -mt-[70px] pb-[40px]">
      <div className="-rotate-2 bg-[#202229]  w-[calc(100%+50px)] mt-[40px] flex-none pt-[183px] pb-[148px] flex justify-center">
        <img
          src="/images/bg.png"
          alt=""
          className="absolute right-[10%] top-[0px]"
        />
        <div className="rotate-2 lg:px-[100px] w-[100%] flex flex-col items-center px-[50px]">
          <div className="flex lg:flex-row flex-col gap-[30px] lg:gap-[219px] lg:items-end xl:w-[1280px]">
            <div className="flex flex-col gap-[44px]">
              <div className="flex flex-wrap lg:text-[3.375rem] text-[#ffffff] font-[700] lg:leading-[64px] lg:max-w-[379px] text-[2rem] items-center ">
                <p>How it worked</p>
                <p>for Jason</p>
                <img
                  src="/images/img2.svg"
                  alt=""
                  className="rounded-[50px] w-[57px] h-[57px] mx-[10px]"
                />
                <span> </span>
                <p className="mr-[8px] lg:mr-0">at</p>
                <p className="text-[#AF7CFF]">groove</p>
              </div>

              <div className="lg:max-w-[461px]">
                <Text
                  className="text-[#ffffff]"
                  text="Zwilt enabled us to deliver on time and they’ve been heavy
                  hitters in our corner since."
                />
              </div>

              <div className="flex gap-[16px]">
                <div className="w-[49.79px] h-[49.79px] rounded-[20px] bg-[#ffffff] flex items-center justify-center">
                  <img src="/images/marketplace/arrowback.svg" alt="" />
                </div>
                <div className="w-[49.79px] h-[49.79px] rounded-[20px] bg-[#ffffff] flex items-center justify-center">
                  <img src="/images/search_arrow.svg" alt="" />
                </div>
              </div>
            </div>

            <div className="lg:w-[499px]">
              <div className="flex gap-[16px]">
                <div className="h-[99px] w-[99px] rounded-[40px] bg-[#AF7CFF] flex items-center justify-center">
                  <img src="/images/groove.svg" alt="" />
                </div>
                <div>
                  <p className="text-[2.125rem] text-[#ffffff] font-[600]">
                    Jason Makki
                  </p>
                  <p className="text-[1rem] text-[#c6c4c4] font-[500]">
                    Engineer at GROOVE
                  </p>
                  <p className="text-[1rem] text-[#c6c4c4] font-[500]">
                    San Francisco
                  </p>
                </div>
              </div>
              <Text
                className="text-[#ffffff] mt-[56px]"
                text="Zwilt enabled us to deliver on time and they’ve been heavy
                hitters in our corner since. Zwilt enabled us to deliver on time
                and they’ve been heavy hitters in our corner since.Zwilt enabled
                us to deliver on time and they’ve been heavy hitters."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
