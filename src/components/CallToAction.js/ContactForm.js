import React from "react";

function ContactForm() {
  return (
    <div className=" lg:max-w-[683px] w-[100%]">
      <div className="flex flex-col lg:flex-row w-[100%] lg:gap-[20px]">
        <div className="border-b-[1px] items-center flex lg:w-[50%]">
          <p className="text-[#fff] font-[600] flex-none ">Enter Your</p>
          <input
            type="text"
            placeholder="name |"
            className="w-[100%] h-[50px] px-[10px] py-[10px] border-none bg-[transparent] focus:outline-none"
          />
        </div>
        <div className="border-b-[1px] items-center flex lg:w-[50%]">
          <p className="text-[#fff] font-[600] flex-none">Enter Your</p>
          <input
            type="text"
            placeholder="Email |"
            className="w-[100%] h-[50px] px-[10px] py-[10px] border-none bg-[transparent] focus:outline-none"
          />
        </div>
      </div>
      <div className="border-b-[1px] items-center flex mt-[20px]">
        <input
          type="text"
          placeholder="Enter Your message |"
          className="w-[100%] h-[50px] px-[10px] py-[10px] border-none lg:text-center bg-[transparent] focus:outline-none"
        />
      </div>
    </div>
  );
}

export default ContactForm;
