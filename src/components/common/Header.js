import React from "react";
import MobileNav from "../../ui/MobileNav";

const NavItems = [
  "Find Work",
  "Find Talent",
  "Articles",
  "About Us",
  "Contact Us",
];

function Header() {
  return (
    <header className="mx-[24px] lg:mx-[70px] mt-[36px] bg-[#525AA0] flex rounded-[15px] h-[60px] lg:pl-[25px] lg:pr-[9px] px-[9px] lg:px-0 items-center justify-between shadow-xl">
      <div>
        <img src="/images/logo.svg" alt="" />
      </div>
      <div className="lg:flex lg:gap-[30px] text-[#ffffff] hidden ">
        {NavItems.map((item, index) => (
          <a key={index} href="/" className="text-[0.875rem] font-[500]">
            {item}
          </a>
        ))}
      </div>
      <div className="lg:flex hidden gap-[20px] items-center">
        <a href="/" className="text-[0.875rem] text-[#ffffff]">
          Log In
        </a>
        <button className="h-[43px] flex items-center bg-[#ffffff] px-[21px] rounded-[16px]">
          <p className="text-[0.875rem] font-[500]">FInd Work</p>
        </button>
      </div>
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </header>
  );
}

export default Header;
