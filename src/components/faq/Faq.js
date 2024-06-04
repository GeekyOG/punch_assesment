import React from "react";
import Heading from "../../ui/Heading";
import FaqTab from "./FaqTab";

const faqs = [
  {
    faq: "I want to work part-time, is that possible",
    sideText: "General",
  },
  {
    faq: "How long are the average projects?",
  },
  {
    faq: "How does the payment works?",

    active: true,
  },
  {
    faq: "How much can I earn?",
  },
  {
    faq: "I want to work part-time, is that possible",
    sideText: "General",
    SideTextTwo: "Joining Process",
  },
  {
    faq: "How long are the average projects?",
  },
  {
    faq: "How long are the average projects?",
  },
  {
    faq: "How much can I earn?",
  },
];

function Faq() {
  return (
    <div className="w-[100%] flex justify-center relative overflow-hidden -mt-[70px] pb-[40px]">
      <div className="-rotate-2 bg-[#F3F3F3]  w-[calc(100%+50px)] mt-[40px] flex-none pt-[63px] pb-[148px] flex justify-center">
        <div className="rotate-2 lg:px-[25px] w-[100%] flex flex-col items-center">
          <Heading text="Frequently asked questions" />
          <div className="w-[100%] mt-[88px]">
            {faqs.map((faq, index) => (
              <FaqTab
                key={index}
                text={faq.faq}
                sideText={faq.sideText}
                active={faq.active}
                SideTextTwo={faq.SideTextTwo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
