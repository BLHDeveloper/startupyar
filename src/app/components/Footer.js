import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center h-[109px] bg-black px-[88px]">
      <div className="w-[89px] h-[34px] shrink-0 bg-transparent text-white text-[20px] leading-[32px]">
        <span className="font-poppins  font-medium">STARTUP</span>
        <span className="font-poppins  font-black">YAR</span>
      </div>
      <div className="h-[32px] shrink-0">
        <div className="inline-flex items-start gap-[30px]">
          <a className="text-white font-poppins  font-semibold text-[18px] leading-[32px] cursor-pointer">
            © StartupYar
          </a>
          <a className="text-white font-poppins  font-semibold text-[18px] leading-[32px] cursor-pointer">
            Privacy policy
          </a>
          <a className="text-white font-poppins  font-semibold text-[18px] leading-[32px] cursor-pointer">
            Cookies policy
          </a>
          <a className="text-white font-poppins  font-semibold text-[18px] leading-[32px] cursor-pointer">
            Terms of use
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
