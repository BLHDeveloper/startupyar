import React from "react";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="flex flex-col  justify-center items-center gap-[45px] px-[88px] py-[50px] ">
      <h1 className="text-black text-center font-poppins  font-medium text-[60px] leading-[80px]">
        From{" "}
        <span className="text-[#5C4FFF] font-poppins  font-bold  text-[60px] leading-[80px]">
          Idea to Launch,{" "}
        </span>
        <br />
        Discover best tools for your Startup
      </h1>
      <div className="flex w-[802px] h-[74px] justify-between items-center shrink-0 rounded-[50px] border-[2px] border-[#DBDBDB]">
        <input
          type="text"
          className="flex-grow h-full px-4 rounded-l-[50px] border-none outline-none"
          placeholder="Search for tools..."
        />
        <button className="flex w-[238px] h-full justify-center items-center shrink-0 rounded-[50px] bg-[#5C4FFF] cursor-pointer">
          <span className="text-white text-center font-poppins  font-regular text-[18px] leading-[32px]">
            Search Now
          </span>
        </button>
      </div>
      <div className="flex items-center justify-center  justify-items-center  gap-[30px]">
        <div className="flex w-[234px] h-[49px] gap-3">
          <Image
            src="/images/Image1.png"
            alt="Illustration"
            width={49}
            height={49}
            className="flex"
          />
          <Image
            src="/images/Image2.png"
            alt="Illustration"
            width={49}
            height={49}
            className="flex"
          />
          <Image
            src="/images/Image3.png"
            alt="Illustration"
            width={49}
            height={49}
            className="flex"
          />
          <Image
            src="/images/Image4.png"
            alt="Illustration"
            width={49}
            height={49}
            className="flex"
          />
        </div>
        <div className="flex items-center w-5 h-0 rotate-180 stroke-2 stroke-[#CCC]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3"
            height="21"
            viewBox="0 0 3 21"
            fill="none"
          >
            <path
              d="M1.31641 0.566406L1.31641 20.5664"
              stroke="#CCCCCC"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="flex items-center justify-center  justify-items-center  w-[491px] h-[40px] gap-2">
          <div className="inline-flex items-start -space-x-[15px]">
            <Image
              src="/images/Ellipse1.png"
              alt="Illustration"
              width={40}
              height={40}
              className="rounded-[40px] bg-center bg-cover bg-no-repeat"
            />
            <Image
              src="/images/Ellipse2.png"
              alt="Illustration"
              width={40}
              height={40}
              className="rounded-[40px] bg-[3px_-0.6px] bg-[length:100%_125%] bg-no-repeat"
            />
            <Image
              src="/images/Ellipse3.png"
              alt="Illustration"
              width={40}
              height={40}
              className="rounded-[40px] bg-center bg-cover bg-no-repeat"
            />
            <Image
              src="/images/Ellipse4.png"
              alt="Illustration"
              width={40}
              height={40}
              className="rounded-[40px] bg-center bg-cover bg-no-repeat"
            />
            <Image
              src="/images/Ellipse5.png"
              alt="Illustration"
              width={40}
              height={40}
              className="rounded-[40px] bg-center bg-cover bg-no-repeat"
            />
            <Image
              src="/images/Ellipse6.png"
              alt="Illustration"
              width={40}
              height={40}
              className="rounded-[40px] bg-center bg-cover bg-no-repeat"
            />
          </div>
          {/*  */}
          <div className="text-black text-center  text-lg leading-8">
            <span className="text-black font-poppins  font-medium">
              Trusted by 2000+ Startup
            </span>
            <span className="text-black font-poppins  font-light pl-1">
              Founders
            </span>
          </div>
        </div>
      </div>
      <div className="w-[89px] h-0 stroke-[2px] stroke-[#5C4FFF]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="90"
          height="3"
          viewBox="0 0 90 3"
          fill="none"
        >
          <path d="M0.5 1.13281H89.5" stroke="#5C4FFF" strokeWidth="2" />
        </svg>
      </div>
      <div className="flex justify-center text-black text-center font-poppins  font-semibold  text-[40px] leading-[80px] self-stretch">
        All the
        <span>
          {" "}
          tools{" "}
          <svg
            className="-mt-5"
            xmlns="http://www.w3.org/2000/svg"
            width="98"
            height="17"
            viewBox="0 0 98 17"
            fill="none"
          >
            <path
              d="M0 12.2575V2.7725L24.4933 1.19166C41.0696 0.137774 77.191 -1.17959 89.0666 1.98208C100.942 5.14375 98.4681 9.62278 95.7466 11.4671C76.7457 10.8347 47.7496 14.8922 35.6266 17L32.6577 9.09583L0 12.2575Z"
              fill="#5C4FFF"
            />
          </svg>
        </span>{" "}
        that you need
      </div>
    </div>
  );
};

export default Banner;
