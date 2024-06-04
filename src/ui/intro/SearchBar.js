import React from "react";

function SearchBar() {
  return (
    <div className="mt-[30px] border-[1.5px] border-[#F0F0F0] h-[74px] lg:w-[570px] rounded-[15px] flex pl-[27px] items-center">
      <p className="flex-none">Looking for </p>
      <input className="outline-0 w-[100%] ml-[3px]" placeholder="design |" />
      <div className="w-[74px] h-[74px] bg-[#FFBE2E] flex-none rounded-[15px] flex items-center justify-center">
        <img src="/images/search_arrow.svg" alt="" />
      </div>
    </div>
  );
}

export default SearchBar;
