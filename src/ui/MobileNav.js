import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

import clsx from "clsx";
const NavItems = ["Find Talent", "Articles", "About Us", "Contact Us"];
function MobileNav() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleClose = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <div>
      <CiMenuFries
        className="text-[20px] text-[#ffffff]"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      />

      <div
        className={clsx(
          " fixed bottom-0 left-0 right-0  top-0 z-40 flex  min-h-[100vh] flex-col transition  duration-500 ease-in-out bg-[#fff]",
          showMobileMenu ? "" : "-translate-y-[130vh]"
        )}
      >
        <div className="flex justify-between px-[20px] py-[20px]">
          <div className="h-[50px] w-[50px] rounded-[20px] bg-[#202229] flex items-center justify-center">
            <img src="/images/arrowlight.svg" alt="" />
          </div>

          <div onClick={handleClose}>
            <IoMdClose className="text-[30px]" />
          </div>
        </div>

        <div className="flex flex-col gap-[30px] items-center mt-[100px] ">
          {NavItems.map((item, index) => (
            <a key={index} href="/" className="text-[0.875rem] font-[500]">
              {item}
            </a>
          ))}
          <a href="/" className="text-[0.875rem]">
            Log In
          </a>
          <button className="h-[43px] bg-[#000] flex items-center px-[21px] rounded-[16px]">
            <p className="text-[0.875rem] font-[500] text-[#ffffff]">
              FInd Work
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
