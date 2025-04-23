import React from "react";

const Faqs = () => {

  return (
    <div className="flex justify-center items-center h-[550px] bg-[#5C4FFF]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white text-center font-poppins text-[40px] font-semibold leading-none mb-8 tracking-tight">
          FAQ’s
        </h1>
        <div className="flex items-center w-[1200px] h-[131px] flex-shrink-0 rounded-[20px] border border-[#3247C6] bg-white pl-[66px] mt-2">
          <div className="flex flex-row gap-8 items-center">
            <div className="flex flex-col gap-[13px] w-[1039px] ">
              <p className="text-black font-poppins text-[20px] font-medium leading-none w-[696px]">
                Who can list their startup on our directory?
              </p>
              <p className="text-black font-poppins text-[16px] font-normal leading-none tracking-[0.48px] w-[1039px]">
                We welcome all active startups at any stage of development, from
                seed to Series B, across all industries and locations
              </p>
            </div>
            <div className="w-[29px] h-[29px] flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
              >
                <rect
                  x="28.5"
                  y="28.5"
                  width="28"
                  height="28"
                  rx="14"
                  transform="rotate(-180 28.5 28.5)"
                  stroke="#3247C6"
                />
                <path
                  d="M20 11L14 18L8 11"
                  stroke="#3247C6"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>{" "}
        </div>
        {/*  */}
        <div className="flex flex-col  gap-[26px] pt-[45px]">
          <div className="flex justify-between px-[56px]">
            <h2 className="text-white font-poppins text-[20px] font-medium leading-none w-[696px]">
              What are the benefits of listing my startup on our directory?
            </h2>
            <div className="w-[29px] h-[29px] flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
              >
                <rect width="29" height="29" rx="14.5" fill="#3247C6" />
                <path
                  d="M9 18L15 11L21 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1201"
            height="2"
            viewBox="0 0 1201 2"
            fill="none"
          >
            <path
              d="M1201 1L1.52588e-05 1"
              stroke="white"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-col  gap-[26px] pt-[32px]">
          <div className="flex justify-between px-[56px]">
            <h2 className="text-white font-poppins text-[20px] font-medium leading-none w-[696px]">
              How much does it cost to list my startup on your directory?
            </h2>
            <div className="w-[29px] h-[29px] flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
              >
                <rect width="29" height="29" rx="14.5" fill="#3247C6" />
                <path
                  d="M9 18L15 11L21 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1201"
            height="2"
            viewBox="0 0 1201 2"
            fill="none"
          >
            <path
              d="M1201 1L1.52588e-05 1"
              stroke="white"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
