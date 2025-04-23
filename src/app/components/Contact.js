import React from "react";
import Image from "next/image";
const Contact = () => {
  return (
    <div className="h-[442px] bg-white my-[80px]">
      <div className="h-[284px] px-[124px] pt-[81px] pb-[77px]">
        <div className="flex justify-center items-center gap-[28px]">
          <div className="flex flex-col justify-center gap-[8px] w-[588px]">
            <div className="text-black font-poppins text-[40px] leading-[60px] w-[588px]">
              <span className="font-semibold">Didn’t find</span>
              <br />
              <span className="font-light">what you are Looking for?</span>
            </div>
            <p className="text-black font-poppins text-[18px] font-normal leading-[32px] w-[501px]">
              Our vision is to become the one stop destination for all <br />{" "}
              the startup needs.
            </p>
            <button className="w-[176.027px] h-[50px] flex-shrink-0 rounded-[15px] bg-[#5C4FFF] mt-[19px] cursor-pointer">
              <span className="text-white text-center font-poppins text-[18px] font-normal leading-[32px]">
                Let us Know
              </span>
            </button>
          </div>
          <Image
            src="/images/GIF.png"
            alt="Illustration"
            width={583.403}
            height={281}
            className="rounded-xl  bg-no-repeat"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
