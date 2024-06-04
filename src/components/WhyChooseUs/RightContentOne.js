import React from "react";
const skills = ["3d Modeling", "Character Rigging", "Environment Design"];

function RightContentOne() {
  return (
    <div className="lg:w-[658px] lg:absolute h-[569px] top-[44px] left-[602px] mt-[30px] lg:mt-0">
      <img
        src="/images/onboarding/star2.svg"
        alt=""
        className="absolute hidden lg:block right-[165px] top-[103px]"
      />
      <div className="w-[100%] h-[100%] relative">
        <img
          src="/images/onboarding/womaninvideo.svg"
          alt=""
          className="relative"
        />
        <div className="lg:absolute lg:left-[122px] top-[92px]">
          <div className="bg-[#ffffff] shadow-xl w-[280px] pb-[27px] rounded-[16px] pt-[32px] px-[25px] relative z-[10]">
            <img
              src="/images/onboarding/woman.svg"
              alt=""
              className="mx-[auto] "
            />

            <p
              className="text-[1.625rem] text-center font-[600]"
              style={{
                backgroundImage:
                  " linear-gradient(90.32deg, #50589F 0.28%, #FFBE2E 102.68%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Ariana Marie
            </p>

            <div className="flex gap-[4px] mt-[24px] mb-[16px]">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="rounded-[24px] bg-[#E2E2E2] flex-none"
                >
                  <p className="text-[0.5rem] font-[700] leading-[10.43px] px-[6px] py-[3px]">
                    {skill}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-[3px] font-[700] text-[0.875rem] text-[#1C1C2582]">
                <p>5.0 </p>
                <img
                  src="/images/onboarding/star.svg"
                  className="h-[12px]"
                  alt=""
                />
                <p>15</p>
              </div>

              <button className="bg-[#181818] w-[109px] h-[30px] flex justify-center items-center rounded-[8px]">
                <p className="text-[#ffffff] font-[500] text-[0.688rem]">
                  Take Interview
                </p>
              </button>
            </div>
          </div>

          <div className="lg:absolute -left-[200px] mt-[30px] lg:mt-0">
            <div className="bg-[#ffffff] shadow-xl lg:w-[347px] h-[172px] rounded-[16px] py-[24px] px-[16px]">
              <div className="flex">
                <p>UI/UX Designer</p>
                <div className="flex items-center gap-[3px] font-[700] text-[0.875rem] text-[#1C1C2582]">
                  <p>5.0 </p>
                  <img
                    src="/images/onboarding/star.svg"
                    className="h-[12px]"
                    alt=""
                  />
                  <p>15</p>
                </div>
              </div>
              <div className="flex gap-[4px] mb-[34px]">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="rounded-[24px] bg-[#E2E2E2] flex-none"
                  >
                    <p className="text-[0.5rem] font-[700] leading-[10.43px] px-[6px] py-[3px]">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>

              <p>
                I am working in design industry from 3+ years as a design lead
              </p>
            </div>
          </div>
        </div>

        <div className="lg:absolute -right-[0px] lg:bottom-[100px] mt-[30px] lg:mt-0">
          <div className="bg-[#ffffff] shadow-xl lg:w-[347px] h-[133px] rounded-[16px] py-[17px] px-[16px]">
            <p className="text-[0.813rem]">
              I am working in design industry from 3+ years as a MERN Stack
              Developer
            </p>

            <div className="flex mt-[12px] justify-between">
              <img
                src="/images/onboarding/woman.svg"
                alt=""
                className="w-[32px] "
              />

              <div className="flex items-center gap-[7px]">
                <p className="text-[#18181860] text-[0.563rem]">Availibility</p>

                <div className="rounded-[8px]  h-[26px] bg-gradient-to-r from-[#794FEC]  to-[#FFBE2E] p-[1px] ">
                  <div className="w-full h-full bg-[#ffffff] rounded-[8px] flex justify-center items-center px-[10px]">
                    9 Hours
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightContentOne;
