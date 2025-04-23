import React from "react";
import "../../styles/globals.css";
const Nav = () => {
  return (
    <nav className="flex justify-between items-center h-[100px] bg-[#5C4FFF] px-[124px]">
      <div className="text-white text-[26px] leading-[32px]">
        <span className="font-poppins font-medium">STARTUP</span>
        <span className="font-poppins font-black">YAR</span>
      </div>
      <div className="flex items-center gap-[21px]">
        <button className="text-white text-center font-poppins font-regular  text-[18px] leading-[32px] cursor-pointer">
          Partner with us
        </button>
        <button className="flex w-[210px] px-[50px] py-[10px] justify-center items-center gap-[10px] rounded-[50px] bg-[#FBFF28] cursor-pointer">
          <span className="text-black text-center font-poppins font-regular text-[18px] leading-[32px]">
            Get Featured
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
