import React, { useRef, useState } from "react";
import Heading from "../../ui/Heading";
import ContactForm from "./ContactForm";

function CallToAction() {
  const arrowRef = useRef(null);
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    arrowRef.current.style.transform = "rotate(270deg)";

    setShowForm(!showForm);
  };

  return (
    <div className="w-[100%] flex justify-center relative overflow-hidden -mt-[70px]">
      <div className="-rotate-2 bg-[#202229]  w-[calc(100%+50px)] mt-[30px] flex-none pt-[64px]  pb-[148px] flex justify-center">
        <div className="rotate-2 lg:px-[100px] w-[100%] flex flex-col items-center px-[50px]">
          <div className="xl:w-[1280px] flex flex-col gap-[30px] flex flex-col items-center overflow-hidden py-[40px] w-[100vw]">
            <div className="-rotate-2 bg-[#525AA0] w-[calc(100%+50px)] mt-[30px] flex-none flex justify-center">
              <div className="rotate-2 lg:px-[100px] w-[100%] flex flex-col items-center px-[50px] pt-[142px] pb-[102px]">
                <Heading
                  text="Need a job done, and done well? Get started"
                  className="lg:max-w-[683px] text-center text-[#ffffff] transition duration-150 ease-out"
                />
                {showForm && <ContactForm />}

                <div
                  className="h-[50px] w-[50px] rounded-[20px] bg-[#202229] flex items-center justify-center mt-[35px]"
                  onClick={handleClick}
                >
                  <img src="/images/arrowdown.svg" alt="" ref={arrowRef} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
