import React from "react";
import Heading from "../../ui/Heading";
import FooterHead from "../../ui/footer/Heading";
import FooterText from "../../ui/footer/FooterText";

const rowOne = ["Find Work", "Find Talent", "Categories", "About Us"];
const rowTwo = ["Data Science", "IT & Networking", "Web & Mobile"];
const rowThree = ["FAQ’s", "Contact Us"];
const rowFour = ["Instagram", "LinkedIn", "Twitter"];

function Footer() {
  return (
    <div className="w-[100%] flex -mt-[40px] bg-[#202229] pt-[50px] flex-col items-center text-[#ffffff]">
      <div className="xl:w-[1280px] flex flex-col lg:flex-row gap-[30px] justify-between pb-[148px] px-[20px]">
        <div>
          <div>
            <img src="/images/logo.svg" alt="" />
            <p className="text-[0.875rem] mt-[28px] leading-[22px] lg:max-w-[284px]">
              We take complex hiring processes - and simplify them. Connecting
              you to the world’s highly qualified talent pool.
            </p>
          </div>
          <div className="mt-[49px]">
            <p className="text-[0.875rem] font-[600] leading-[32px] text-[#FFFFFF9F]">
              LINKS AND REDIRECTS
            </p>
            <div className="mt-[16px] flex gap-[8px]">
              <button className="bg-[#292B34] w-[162px] h-[50px] rounded-[20px]">
                <p className="font-[500]">Hire now</p>
              </button>
              <button className="bg-[#292B34] w-[162px] h-[50px] rounded-[20px]">
                <p className="font-[500]">Apply now</p>
              </button>
            </div>
          </div>
        </div>

        <div className="lg:w-[876px]">
          <Heading text="Connecting the right people to the right businesses." />
          <div className="flex mt-[64px] justify-between flex-wrap">
            <div className="flex flex-col w-[50%] lg:w-[auto]">
              <FooterHead>PLATFORM</FooterHead>
              {rowOne.map((item, index) => (
                <FooterText key={index} text={item} />
              ))}
            </div>
            <div className="flex flex-col w-[50%] lg:w-[auto]">
              <FooterHead>CATEGORIES</FooterHead>
              {rowTwo.map((item, index) => (
                <FooterText key={index} text={item} />
              ))}
            </div>
            <div className="flex flex-col w-[50%] lg:w-[auto] mt-[50px] lg:mt-0">
              <FooterHead>HELP</FooterHead>
              {rowThree.map((item, index) => (
                <FooterText key={index} text={item} />
              ))}
            </div>
            <div className="flex flex-col w-[50%] lg:w-[auto] mt-[50px] lg:mt-0">
              <FooterHead>GET IN TOUCH @</FooterHead>
              {rowFour.map((item, index) => (
                <FooterText key={index} text={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-[1px] w-[100%] bg-gradient-to-r from-[#ffffff]"></div>
      <div className="xl:w-[1280px] flex flex-col lg:flex-row gap-[30px] justify-between py-[30px]">
        <p>All rights reserved by Zwilt</p>
        <div className="flex gap-[34px]">
          <p className="text-[#FFFFFF9F] underline ">Privacy Policy</p>
          <p className="text-[#FFFFFF9F] underline ">Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
